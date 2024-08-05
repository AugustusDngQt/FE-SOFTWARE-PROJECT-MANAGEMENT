import { type IExecutor } from "../executor.interface";
import { type IProject } from "../project/project.interface";
import { type IUser } from "../user/user.interface";

export interface ISprint {
  id: string;
  name: string;
  description: string | null;
  startDate: Date | null;
  endDate: Date;
  status: string;
  projectId: string;
  assigneeId: string | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  createdBy: IExecutor | null;
  updatedBy: IExecutor | null;
  deletedBy: IExecutor | null;
  isDeleted: boolean;
  Project: IProject;
  Assignee: IUser | null;
}
