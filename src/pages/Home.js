import React from "react";
import styles from "../assets/styles/home.module.scss";

import patternOne from "../assets/images/bg-pattern-home-1.svg";
import patternTwo from "../assets/images/bg-pattern-home-2.svg";
import patternThree from "../assets/images/bg-pattern-home-3.svg";

import person from "../assets/images/icon-person.svg";
import setting from "../assets/images/icon-cog.svg";
import chart from "../assets/images/icon-chart.svg";

import quote from "../assets/images/quote.svg";

const Home = () => {
  return (
    <div>
      <div className={styles.hero}>
        <img src={patternOne} alt="/" className={styles.pattern} />
        <div className={styles.text}>
          <h1>
            Find the best <span>talent</span>
          </h1>
          <div className={styles.rhs}>
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
      <section className={styles.sectionOne}>
        <img src={patternThree} alt="/" className={styles.pattern_three} />
        <div className={styles.wrapper}>
          <hr className={styles.line} />
          <div className={styles.text}>
            <div className={styles.lhs}>
              <h2>Build {"&"} manage distributed teams like no one else.</h2>
            </div>
            <div className={styles.rhs}>
              <div className={styles.item}>
                <img src={person} alt="person" />
                <div className={styles.content}>
                  <p className={styles.title}>Experienced Individuals</p>
                  <p className={styles.description}>
                    Our network is made up of highly experienced professionals
                    who are passionate about what they do.
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <img src={setting} alt="setting" />
                <div className={styles.content}>
                  <p className={styles.title}>Easy to Implement</p>
                  <p className={styles.description}>
                    Our processes have been refined over years of implementation
                    meaning our teams always deliver.
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <img src={chart} alt="chart" />
                <div className={styles.content}>
                  <p className={styles.title}>Enhanced Productivity</p>
                  <p className={styles.description}>
                    Our customized platform with in-built analytics helps you
                    manage your distributed teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionTwo}>
        <div className={styles.sectionTwo_wrapper}>
          <h2>
            Delivering real results for top companies. Some of our{" "}
            <span>success stories.</span>
          </h2>
          <div className={styles.testimonials}>
            <div className={styles.testimonial}>
              <img src={quote} alt="quote" className={styles.quote} />
              <p>
                “The team perfectly fit the specialized skill set required. They
                focused on the most essential features helping us launch the
                platform eight months faster than planned.”
              </p>
              <div className={styles.clientInfo}>
                <p className={styles.name}>Kady Baker</p>
                <p className={styles.job}>Product Manager at Bookmark</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
