import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/navbar.module.scss";

import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/icon-hamburger.svg";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dsktp}>
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
      <div className={styles.mobile}>
        <img src={logo} alt="logo" width="100px"/>
        <img src={hamburger} alt="hamburger" />
      </div>
    </div>
  );
};

export default Navbar;
