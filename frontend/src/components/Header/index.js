import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Profile from "../Profile";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user == null) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <h1>Watch Movies</h1>
      {!!user && <Profile user={user} />}
    </div>
  );
}

export default Header;
