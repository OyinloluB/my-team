import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/navbar.module.scss";

import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/icon-hamburger.svg";
import closeMenu from "../../assets/images/icon-close.svg";
import pattern from "../../assets/images/pattern-mobile-nav.svg";
import Button from "../button/Button";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

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
        <img src={logo} alt="logo" width="100px" />
        <img
          src={hamburger}
          alt="hamburger"
          onClick={() => setOpenMenu(true)}
        />
        {openMenu && (
          <div className={styles.menu}>
            <div className={styles.menu_wrapper}>
              <div className={styles.closeMenu}>
                <img
                  src={closeMenu}
                  alt="close-menu"
                  onClick={() => setOpenMenu(false)}
                />
              </div>
              <ul>
                <li onClick={() => setOpenMenu(false)}>
                  <Link to="/">home</Link>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                  <Link to="/about">about</Link>
                </li>
              </ul>
              <Button text="contact us" type="white" route="/contact" />
            </div>
            <img
              src={pattern}
              alt="pattern-mobile-nav"
              className={styles.pattern}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
