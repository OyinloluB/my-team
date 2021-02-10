import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/navbar.module.scss";

import logo from "../../assets/images/logo.svg";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <ul>
        <img src={logo} alt="logo" />
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
      <Button text="contact us" type="white" route="/contact" />
    </div>
  );
};

export default Navbar;
