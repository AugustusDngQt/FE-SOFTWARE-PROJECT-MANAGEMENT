import { type IExecutor } from "../executor.interface";
import { type IMember } from "../member/member.interface";

export interface IProject {
  id: string;
  name: string;
  description: string | null;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  createdBy: IExecutor | null;
  updatedBy: IExecutor | null;
  deletedBy: IExecutor | null;
  isDeleted: boolean;
  // Members: IMember[];
  Members: any[];
}
