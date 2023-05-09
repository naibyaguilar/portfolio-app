import React from "react";
import styles from "@/styles/experience.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

let isHorizontal = false;
if (typeof window !== "undefined") {
  isHorizontal = window.innerWidth < 600;
}
interface Props {
  children?: React.ReactNode;
  index: number;
  value: number;
  isHorizontal: boolean;
}
export function TabPanel({ children, value, index, ...other }: Props) {
  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={styles["vertical-tabpanel"]}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}
