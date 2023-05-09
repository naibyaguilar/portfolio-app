import React from "react";
import styles from "@/styles/sidebarNav.module.css";
import { useState, useCallback } from "react";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";

export function SidebarNav() {
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState("1");

  const handleSelect = useCallback(() => {
    setActiveKey("1");
  }, []);

  return (
    <div className={styles["sidebar-nav"]}>
      <div className={styles["sidebar-logos"]}>
        <a
          className={styles["a"]}
          href="https://github.com/naibyaguilar"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub style={{ fontSize: 19 }} />
        </a>
        <a
          className={styles["a"]}
          href="https://gitlab.com/naibyaguilar"
          target="_blank"
          rel="noreferrer"
        >
          <FaGitlab style={{ fontSize: 19 }} />
        </a>
        <a
          className={styles["a"]}
          href="https://www.linkedin.com/in/naibyaguilar/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin style={{ fontSize: 21 }} />
        </a>
      </div>
    </div>
  );
}
