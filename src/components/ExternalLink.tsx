import React from "react";
import { FaGithub, FaChrome, FaFolderOpen } from "react-icons/fa";
import styles from "@/styles/projects.module.css";

interface Props {
  githubLink: string;
  openLink?: string;
  portfolio?: string;
}

export default function ExternalLink({
  githubLink,
  openLink,
  portfolio,
}: Props) {
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
      {portfolio && (
        <a
          className={styles["open-icon"]}
          href={portfolio}
          target="_blank"
          rel="noreferrer"
        >
          <FaFolderOpen style={{ color: "#ccd6f6", fontSize: 20 }} />
        </a>
      )}
    </span>
  );
}
