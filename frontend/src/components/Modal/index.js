import React from "react";
import styles from "./styles.module.css";

function Modal(props) {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button className={styles["close-button"]} onClick={props.close}>
          X
        </button>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
}

export default Modal;
