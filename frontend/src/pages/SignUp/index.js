import React, { useState } from "react";
import SignUpCard from "../../components/SignUpCard";

import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import api from "../../service/api";
import Input from "../../components/Input";
import Notification from "../../components/Notification";
import { BiSolidErrorCircle, BiSolidCheckCircle } from "react-icons/bi";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    const params = {
      email,
      name,
      password,
    };

    await api
      .post("/user", params)
      .then(() => {
        setIsError(false);
        setToggleModal(true);
        setMessage("Usuário cadastrado.");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((error) => {
        const data = error.response.data;
        const status = error.response.status;
        setIsError(true);
        setToggleModal(true);
        if (status === 422) {
          const field = data.error[0].path[0];
          setMessage(`Erro de validação do campo ${field}.`);
        } else {
          setMessage(data.message);
        }
      });
  };

  return (
    <div className={styles.container}>
      <SignUpCard action={handleSignUp}>
        <Input name="name" label="Nome" type="text" setValue={setName} />
        <Input name="email" label="Email" type="text" setValue={setEmail} />
        <Input
          name="password"
          label="Senha"
          type="password"
          setValue={setPassword}
        />
      </SignUpCard>
      {toggleModal && (
        <Notification action={() => setToggleModal(false)} isError={isError}>
          <div className={styles.notification}>
            {isError ? (
              <BiSolidErrorCircle size={24} />
            ) : (
              <BiSolidCheckCircle size={24} />
            )}
            <span className={styles["error-message"]}>{message}</span>
          </div>
        </Notification>
      )}
    </div>
  );
};

export default SignUp;
