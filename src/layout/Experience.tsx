import React, { useEffect } from "react";
import styles from "@/styles/experience.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { JobsList } from "@/components/JobsList";
export function Experience() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id={styles["experience"]}>
      <div
        className={styles["experience-heading"]}
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="50"
      >
        <hr />
        <span className={styles["experience-num"]}>{"// 02. "}</span>{" "}
        {"<Experience/>"}
        <hr />
      </div>
      <div
        className={styles["container"]}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <JobsList />
      </div>
    </div>
  );
}
