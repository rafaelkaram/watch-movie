import React from "react";
import styles from "./styles.module.css";
import { BiX } from "react-icons/bi";

function Notification(props) {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.modal} ${
          props.isError ? styles["modal-error"] : styles["modal-success"]
        }`}
      >
        <div
          className={`${styles.content} ${
            props.isError ? styles["content-error"] : styles["content-success"]
          }`}
        >
          {props.children}
        </div>
        <button
          className={`${styles.btn} ${
            props.isError ? styles["btn-error"] : styles["btn-success"]
          }`}
          onClick={props.action}
        >
          <BiX size={24} />
        </button>
      </div>
    </div>
  );
}

export default Notification;
