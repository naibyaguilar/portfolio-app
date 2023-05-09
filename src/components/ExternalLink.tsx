import React from "react";
import { FaGithub, FaChrome } from "react-icons/fa";
import styles from "@/styles/projects.module.css";

interface Props {
  githubLink: string;
  openLink?: string;
}

export default function ExternalLink({ githubLink, openLink }: Props) {
  const handleSelect = (eventKey: string) => {
    // setState({
    //   activeKey: eventKey,
    // });
  };

  return (
    <span className={styles["external-links"]}>
      <a
        className={styles["github-icon"]}
        href={githubLink}
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <FaGithub style={{ color: "#ccd6f6", fontSize: 20 }} />
      </a>
      {openLink && (
        <a
          className={styles["open-icon"]}
          href={openLink}
          target="_blank"
          rel="noreferrer"
        >
          <FaChrome style={{ color: "#ccd6f6", fontSize: 20 }} />
        </a>
      )}
    </span>
  );
}
