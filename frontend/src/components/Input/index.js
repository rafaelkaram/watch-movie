import React from "react";

import styles from "./styles.module.css";

function Input(props) {
  return (
    <div className={styles["input-group"]}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
