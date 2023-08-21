import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

import Button from "../Button";

function SignUpCard(props) {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  return (
    <div className={styles["form-container"]}>
      <p className={styles.title}>Cadastro</p>
      <div className={styles.form}>
        {props.children}
        <div className={styles.buttons}>
          <Button action={navigateLogin}>Voltar</Button>
          <Button action={props.action}>Cadastrar</Button>
        </div>
      </div>
    </div>
  );
}

export default SignUpCard;
