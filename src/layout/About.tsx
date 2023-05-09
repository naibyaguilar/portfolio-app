/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import styles from "@/styles/about.module.css";
import person from "../assets/images/person.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { tech_stack } from "@/common/data/techStack";

export function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  const tech_items = tech_stack.map((stack) => <li>{stack}</li>);
  return (
    <div id={styles["about"]}>
      <div
        className={styles["about-heading"]}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <hr />
        <span className={styles["about-num"]}>{"// 01. "}</span> {"<About Me/>"}{" "}
        <hr />
      </div>
      <div className={styles["container"]}>
        <div
          className={styles["about-image"]}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Image src={person} alt="person" className={styles["person"]} />
        </div>
        <p
          className={styles["about-text"]}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="50"
        >
          If there&apos;s one thing that excites me, it&apos;s creating software
          products that is both beautiful and functional... I am a
          <span className={styles["highlight"]}>
            {" "}
            Multi-platform software Engineer{" "}
          </span>
          with over
          <span className={styles["highlight"]}>
            {" "}
            2+ experience in development
          </span>{" "}
          I am passionate about learning and using programming best practices to
          create scalable and usable software.. I am currently{" "}
          <span className={styles["highlight"]}>
            open to new opportunities so feel free to reach out.
          </span>
          <div className={styles["about-description"]}>
            {"Here are some technologies I have been working with:"}
            <ul
              className={styles["tech-stack"]}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              {tech_items}
            </ul>
          </div>
          <br />I am always willing to step out of my comfort zone to gain new
          experiences and achieve my goals. I&apos;m highly motivated, committed
          and focused on delivering quality work.
        </p>
      </div>
    </div>
  );
}
