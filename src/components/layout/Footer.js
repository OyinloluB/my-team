import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/footer.module.scss";

import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import twitter from "../../assets/images/icon-twitter.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.lhs}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
            </ul>
          </div>
          <div className={styles.address}>
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>Call Us : 949-833-7432</p>
          </div>
        </div>
        <div className={styles.rhs}>
          <div className={styles.socials}>
            <img src={facebook} alt="facebook" />
            <img src={pinterest} alt="pinterest" style={{ margin: "0 15px" }} />
            <img src={twitter} alt="twitter" />
          </div>
          <span>Copyright 2020. All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
