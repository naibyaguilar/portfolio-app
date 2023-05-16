/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import styles from "@/styles/about.module.css";
import person from "../assets/images/person.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { tech_stack } from "@/common/data/techStack";
import { about } from "@/common/data/about";
import { languages } from "@/common/data/languages";
import { useAppSelector } from "@/store/hooks/useAppSelector";

export function About() {
  const { index } = useAppSelector((state) => state.app);

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
        <span className={styles["about-num"]}>{"// 01. "}</span>{" "}
        {about[languages[index].language].heading}
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
          {about[languages[index].language].description}
          <span className={styles["highlight"]}>
            {about[languages[index].language].light[0]}
          </span>
          {about[languages[index].language].with}
          <span className={styles["highlight"]}>
            {about[languages[index].language].light[1]}
          </span>{" "}
          {about[languages[index].language].learning}
          <span className={styles["highlight"]}>
            {about[languages[index].language].light[2]}
          </span>
          <div className={styles["about-description"]}>
            {about[languages[index].language].here}
            <ul
              className={styles["tech-stack"]}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              {tech_items}
            </ul>
          </div>
          <br /> {about[languages[index].language].motivation}
        </p>
        <br />
      </div>
    </div>
  );
}
