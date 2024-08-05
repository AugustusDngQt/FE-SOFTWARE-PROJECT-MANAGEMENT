import { type ISprint } from "../sprint/sprint.interface";
import { type IProject } from "./project.interface";

export interface IGetProjects {
  projects: IProject[];
  sprints: ISprint[];
}
