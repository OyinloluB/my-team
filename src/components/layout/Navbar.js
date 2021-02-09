import React from "react";
import styles from "../../assets/styles/navbar.module.scss";
import logo from "../../assets/images/logo.svg";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <ul>
        <img src={logo} alt="logo" />
        <li>home</li>
        <li>about</li>
      </ul>
      <Button text="contact us" />
    </div>
  );
};

export default Navbar;
