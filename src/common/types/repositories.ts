import { Portfolio } from "./portfolio";

export type Repositories = {
  [key: string]: {
    desc: string;
    techStack: string;
    link: string;
    open?: string;
    portfolio?: Portfolio;
  };
};
