import React from "react";
import Button from "../button/Button";
import styles from "../../assets/styles/cta.module.scss";

import pattern from "../../assets/images/bg-pattern-home-6-about-5.svg";

const CtaFooter = () => {
  return (
    <div className={styles.container}>
      <img src={pattern} alt="pattern" className={styles.pattern} />
      <div className={styles.wrapper}>
        <h2>Ready to get started?</h2>
        <Button text="contact us" type="colored" route="/contact" />
      </div>
    </div>
  );
};

export default CtaFooter;
