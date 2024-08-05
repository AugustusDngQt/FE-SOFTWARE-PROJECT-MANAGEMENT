import { type IExecutor } from "../executor.interface";
import { type IProject } from "../project/project.interface";
import { type IUser } from "../user/user.interface";

export interface IMember {
  id: string;
  userId: string;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  isDeleted: boolean;
  createdBy: IExecutor | null;
  updatedBy: IExecutor | null;
  deletedBy: IExecutor | null;
  Project: IProject;
  User: IUser;
}
