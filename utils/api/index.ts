import { projectRoutes } from "./project";
import { issuesRoutes } from "./issues";
import { sprintsRoutes } from "./sprints";
import { usersRoutes } from "./users";

export const api = {
  project: projectRoutes,
  issues: issuesRoutes,
  sprints: sprintsRoutes,
  users: usersRoutes,
};
