import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

import Button from "../Button";

function Profile(props) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const words = props.user.name.split(" ");
  const letters = `${words[0][0]}${
    words.length > 1 ? words[words.length - 1][0] : ""
  }`;
  const initials = letters.toUpperCase();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <label className={styles.user}>
        <input type="checkbox" />
        {initials}
        <div className={styles.modal}>
          <span className={styles.label}>
            Nome:
            <span>{props.user.name}</span>
          </span>
          <span className={styles.label}>
            Email:
            <span>{props.user.email}</span>
          </span>
          <span className={styles.label}>
            Data de cadastro:
            <span>{format(new Date(props.user.createdAt), "dd/MM/yyyy")}</span>
          </span>
          <div className={styles["btn-container"]}>
            <Button action={handleLogout}>Logout</Button>
          </div>
        </div>
      </label>
    </div>
  );
}

export default Profile;
