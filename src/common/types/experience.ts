import { Jobs } from "./jobs";

export type Experience = {
  [language: string]: {
    heading: string;
    jobs: Jobs;
  };
};
