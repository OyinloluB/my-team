import React from "react";
import Button from "../components/button/Button";
import styles from "../assets/styles/contact.module.scss";

import pattern from "../assets/images/contact-pattern-one.svg";
import patternTwo from "../assets/images/contact-pattern-two.svg";

import person from "../assets/images/icon-person.svg";
import setting from "../assets/images/icon-cog.svg";
import chart from "../assets/images/icon-chart.svg";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <img src={patternTwo} alt="pattern_two" className={styles.pattern_two} />
      <div className={styles.wrapper}>
        <img src={pattern} alt="pattern" className={styles.pattern} />
        <div className={styles.lhs}>
          <h1>Contact</h1>
          <h2>Ask us about</h2>
          <div className={styles.list}>
            <div className={styles.item}>
              <img src={person} alt="person" />
              <div className={styles.content}>
                <p className={styles.description}>
                  The quality of our talent network
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <img src={setting} alt="setting" />
              <div className={styles.content}>
                <p className={styles.description}>
                  Usage {"&"} implementation of our software
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <img src={chart} alt="chart" />
              <div className={styles.content}>
                <p className={styles.description}>
                  How we help drive innovation
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rhs}>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Company Name" />
            <input type="text" placeholder="Title" />
            <textarea placeholder="Message" type="text" />
            <Button text="submit" type="filled" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
