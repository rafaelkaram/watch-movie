import React, { useEffect, useState } from "react";
import LoginCard from "../../components/LoginCard";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

import styles from "./styles.module.css";
import api from "../../service/api";
import Input from "../../components/Input";
import Notification from "../../components/Notification";
import { BiSolidErrorCircle } from "react-icons/bi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState(null);
  const [toggleModal, setToggleModal] = useState(false);
  const [message, setMessage] = useState("");

  const { login, user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const params = {
      email,
      password,
    };

    await api
      .post("/login", params)
      .then((response) => setLoginData(response.data))
      .catch((error) => {
        const data = error.response.data;
        const status = error.response.status;
        setToggleModal(true);
        if (status === 422) {
          const field = data.error[0].path[0];
          setMessage(`Erro de validação do campo ${field}.`);
        } else {
          setMessage(data.message);
        }
      });
  };

  useEffect(() => {
    if (loginData) {
      login(loginData);
      navigate("/");
    }
  }, [loginData]);

  useEffect(() => {
    if (!!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <LoginCard handleLogin={handleLogin}>
        <Input name="email" label="Email" type="text" setValue={setEmail} />
        <Input
          name="password"
          label="Senha"
          type="password"
          setValue={setPassword}
        />
      </LoginCard>
      {toggleModal && (
        <Notification action={() => setToggleModal(false)} isError={true}>
          <div className={styles.notification}>
            <BiSolidErrorCircle size={24} />
            <span>{message}</span>
          </div>
        </Notification>
      )}
    </div>
  );
};

export default Login;
