/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import styles from "@/styles/projects.module.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import AOS from "aos";
import "aos/dist/aos.css";
import ExternalLink from "@/components/ExternalLink";
import { projects } from "@/common/data/projects";
import { languages } from "@/common/data/languages";
import { useAppSelector } from "@/store/hooks/useAppSelector";

export function Projects() {
  const { index } = useAppSelector((state) => state.app);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id={styles["projects"]}>
      <div
        className={styles["projects-heading"]}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <hr /> <span className={styles["projects-num"]}>{"// 03. "} </span>
        {projects[languages[index].language].heading} <hr />
      </div>
      <div
        className={styles["project-text"]}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {projects[languages[index].language].subheading}
      </div>

      <div
        className={styles["project-container"]}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <ul className={styles["projects-grid"]}>
          {Object.keys(projects[languages[index].language].repositories).map(
            (key, i) => (
              <li className={styles["projects-card"]}>
                <div className={styles["card-header"]}>
                  <div className={styles["folder-icon"]}>
                    <FolderOpenRoundedIcon
                      style={{ fontSize: 35 }}
                    ></FolderOpenRoundedIcon>
                  </div>
                  <ExternalLink
                    githubLink={
                      projects[languages[index].language].repositories[key].link
                    }
                    openLink={
                      projects[languages[index].language].repositories[key].open
                    }
                    portfolio={
                      projects[languages[index].language].repositories[key]
                        .portfolio
                        ? `/project/${key}`
                        : ""
                    }
                  ></ExternalLink>
                </div>

                <div className={styles["card-title"]}>{key}</div>
                <div className={styles["card-desc"]}>
                  {
                    projects[languages[index].language].repositories[key][
                      "desc"
                    ]
                  }
                </div>
                <div className={styles["card-tech"]}>
                  {
                    projects[languages[index].language].repositories[key][
                      "techStack"
                    ]
                  }
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
