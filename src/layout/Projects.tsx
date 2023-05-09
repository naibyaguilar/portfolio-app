/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import styles from "@/styles/projects.module.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import AOS from "aos";
import "aos/dist/aos.css";
import ExternalLink from "@/components/ExternalLink";
import { projects } from "@/common/data/projects";

export function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id={styles["projects"]}>
      <div
        className={styles["projects-heading"]}
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="50"
      >
        <hr /> <span className={styles["projects-num"]}>03. </span>Some things
        I&apos;ve built <hr />
      </div>

      <div
        className={styles["project-container"]}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <ul className={styles["projects-grid"]}>
          {Object.keys(projects).map((key, i) => (
            <li className={styles["projects-card"]}>
              <div className={styles["card-header"]}>
                <div className={styles["folder-icon"]}>
                  <FolderOpenRoundedIcon
                    style={{ fontSize: 35 }}
                  ></FolderOpenRoundedIcon>
                </div>
                <ExternalLink
                  githubLink={projects[key]["link"]}
                  openLink={projects[key].open}
                ></ExternalLink>
              </div>

              <div className={styles["card-title"]}>{key}</div>
              <div className={styles["card-desc"]}>{projects[key]["desc"]}</div>
              <div className={styles["card-tech"]}>
                {projects[key]["techStack"]}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
