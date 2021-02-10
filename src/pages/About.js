import React from "react";
import styles from "../assets/styles/about.module.scss";

import pattern from "../assets/images/about-pattern-one.svg";
import patternTwo from "../assets/images/about-pattern-two.svg";
import patternThree from "../assets/images/about-pattern-three.svg";
import patternFour from "../assets/images/about-pattern-four.svg";

import profileOne from "../assets/images/avatar-nikita.jpg";
import profileTwo from "../assets/images/avatar-christian.jpg";
import profileThree from "../assets/images/avatar-cruz.jpg";
import profileFour from "../assets/images/avatar-drake.jpg";
import profileFive from "../assets/images/avatar-griffin.jpg";
import profileSix from "../assets/images/avatar-aden.jpg";
import plus from "../assets/images/icon-cross.svg";

import verge from "../assets/images/logo-the-verge.png";
import jakarta from "../assets/images/logo-jakarta-post.png";
import guardian from "../assets/images/logo-the-guardian.png";
import radar from "../assets/images/logo-tech-radar.png";
import gadgets from "../assets/images/logo-gadgets-now.png";

const director = {
  items: [
    {
      name: "Nikita Marks",
      position: "Founder & CEO",
      profile: profileOne,
      open: false,
    },
    {
      name: "Cristian Duncan",
      position: "Co-founder & COO",
      profile: profileTwo,
      open: false,
    },
    {
      name: "Cruz Hamer",
      position: "Co-founder & CTO",
      profile: profileThree,
      open: false,
    },
    {
      name: "Drake Heaton",
      position: "Business Development Lead",
      profile: profileFour,
      open: false,
    },
    {
      name: "Griffin Wise",
      position: "Lead Marketing",
      profile: profileFive,
      open: false,
    },
    {
      name: "Aden Allan",
      position: "CTO",
      profile: profileSix,
      open: false,
    },
  ],
};

const About = () => {
  return (
    <div>
      <div className={styles.hero}>
        <img src={pattern} alt="pattern" className={styles.pattern} />
        <div className={styles.wrapper}>
          <h1>About</h1>
          <div className={styles.rhs}>
            <hr className={styles.line} />
            <p>
              We help companies build dynamic teams made up of top global
              talent. Using our network of passionate professionals we drive
              innovation and deliver incredible outcomes. Talented, diverse
              teams shape the best products and experiences. We’ll bring those
              teams to you.
            </p>
          </div>
        </div>
      </div>
      <section className={styles.directors}>
        <img
          src={patternTwo}
          alt="pattern-two"
          className={styles.pattern_two}
        />
        <img
          src={patternThree}
          alt="pattern-three"
          className={styles.pattern_three}
        />
        <div className={styles.directors_wrapper}>
          <h2>Meet the directors</h2>
          <div className={styles.team}>
            {director.items.map((item) => (
              <div className={styles.director}>
                <img
                  src={item.profile}
                  alt="nikita"
                  className={styles.profile}
                />
                <div className={styles.info}>
                  <p>{item.name}</p>
                  <span>{item.position}</span>
                </div>
                {!item.open ? (
                  <div className={styles.plus}>
                    <img src={plus} alt="view" />
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.clients}>
        <img
          src={patternFour}
          alt="pattern-four"
          className={styles.pattern_four}
        />
        <div className={styles.clients_wrapper}>
          <h2>Some of our clients</h2>
          <div className={styles.logos}>
            <img src={verge} alt="verge" />
            <img src={jakarta} alt="jakarta" />
            <img src={guardian} alt="guardian" />
            <img src={radar} alt="radar" />
            <img src={gadgets} alt="gadgets" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
