import React from "react";
import styles from "../assets/styles/home.module.scss";

import patternOne from "../assets/images/bg-pattern-home-1.svg";
import patternTwo from "../assets/images/bg-pattern-home-2.svg";

const Home = () => {
  return (
    <div>
      <div className={styles.hero}>
        <img src={patternOne} alt="/" className={styles.pattern} />
        <div className={styles.text}>
          <h1>
            Find the best <span>talent</span>
          </h1>
          <div className={styles.miniText}>
            <hr className={styles.line} />
            <p>
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
            <img src={patternTwo} alt="/" className={styles.pattern_two} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
