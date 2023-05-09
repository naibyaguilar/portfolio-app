/* eslint-disable react/jsx-key */
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styles from "@/styles/experience.module.css";
import React from "react";
import { TabPanel } from "./TabPanel";
import { makeStyles } from "@material-ui/core/styles";
import { experiences } from "@/common/data/experiences";

let isHorizontal = false;
if (typeof window !== "undefined") {
  isHorizontal = window.innerWidth < 600;
}

function a11yProps(index: any) {
  if (!isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  } else {
    return {
      id: `vertical-tab-${index}`,
    };
  }
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export function JobsList() {
  const classes = useStyles();
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "horizontal" : "vertical"}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#ae7dff",
          },
        }}
      >
        {Object.keys(experiences).map((key, i) => (
          <Tab
            label={isHorizontal ? `0${i}.` : key}
            {...a11yProps(i)}
            sx={{
              fontFamily: "NTR",
              fontSize: "1.5rem",
              display: "inline-flex",
              alignItems: "flex-start",
              marginLeft: "5.5rem",
            }}
          />
        ))}
      </Tabs>
      {Object.keys(experiences).map((key, i) => (
        <TabPanel value={value} index={i} isHorizontal={!isHorizontal}>
          <div className={styles["joblist"]}>
            <div className={styles["joblist-heading"]}>
              <span className={styles["joblist-job-title"]}>
                {experiences[key]["jobTitle"] + " "}
              </span>
              <br />
              <span className={styles["joblist-job-company"]}>
                {experiences[key]["location"]}
              </span>
              <div className={styles["joblist-duration"]}>
                {experiences[key]["duration"]}
              </div>
            </div>
            <div className={styles["joblist-content"]}>
              <ul className={styles["job-description"]}>
                {experiences[key]["desc"].map(function (descItem, i) {
                  return (
                    <div>
                      <li key={i}>{descItem}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </TabPanel>
      ))}
    </div>
  );
}