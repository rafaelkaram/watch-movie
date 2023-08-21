import React from "react";
import styles from "./styles.module.css";

import Button from "../Button";

function LoginCard(props) {
  return (
    <div className={styles["form-container"]}>
      <p className={styles.title}>Login</p>
      <div className={styles.form}>
        {props.children}
        <Button action={props.handleLogin}>Login</Button>
      </div>
      <p className={styles.signup}>
        Não possui cadastro?&nbsp;
        <a href="/cadastro">Cadastre-se</a>
      </p>
    </div>
  );
}

export default LoginCard;
