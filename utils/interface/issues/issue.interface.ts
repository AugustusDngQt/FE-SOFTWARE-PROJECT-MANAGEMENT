import { type IExecutor } from "../executor.interface";
import { type IProject } from "../project/project.interface";
import { type ISprint } from "../sprint/sprint.interface";

export interface IIssue {
  id: string;
  name: string;
  key: string;
  type: string;
  status: string;
  priority: string;
  sprintPosition: number | null;
  boardPosition: number | null;
  reporterId: string | null;
  assigneeId: string | null;
  issueParrentId: string | null;
  sprintId: string | null;
  projectId: string | null;
  note: string | null;
  description: string | null;
  startDate: Date | null;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  createdBy: IExecutor | null;
  updatedBy: IExecutor | null;
  deletedBy: IExecutor | null;
  isDeleted: boolean;
  Project: IProject | null;
  Sprint: ISprint | null;
}
