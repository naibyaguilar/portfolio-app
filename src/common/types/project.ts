import { Repositories } from "./repositories";

export type Project = {
  [language: string]: {
    heading: string;
    subheading: string;
    repositories: Repositories;
  };
};
