import { z } from "zod";

export type Project = {
  id: string;
  key: string;
  name: string;
  defaultAssignee: string | null;
  imageUrl: string | null;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
};

export type Member = {
  id: string;
  projectId: string;
};

export type Issue = {
  id: string;
  key: string;
  name: string;
  description: string | null;
  status: IssueStatus;
  type: IssueType;
  sprintPosition: number;
  boardPosition: number;
  reporterId: string;
  assigneeId: string | null;
  parentId: string | null;
  sprintId: string | null;
  projectId: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  sprintColor: string | null;
  creatorId: string;
};

export type Sprint = {
  id: string;
  name: string;
  description: string;
  duration: string | null;
  startDate: Date | null;
  endDate: Date | null;
  creatorId: string;
  projectId: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  status: SprintStatus;
};

export type Comment = {
  id: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  isEdited: boolean;
  issueId: string;
  logId: string | null;
};

export type DefaultUser = {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
};

export enum EIssueStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export type IssueStatus = (typeof EIssueStatus)[keyof typeof EIssueStatus];

export enum EIssueType {
  BUG = "BUG",
  TASK = "TASK",
  SUBTASK = "SUBTASK",
  STORY = "STORY",
  EPIC = "EPIC",
}

export type IssueType = (typeof EIssueType)[keyof typeof EIssueType];

export enum ESprintStatus {
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
  CLOSED = "CLOSED",
}

export type SprintStatus = (typeof ESprintStatus)[keyof typeof ESprintStatus];

export type GetProjectResponse = {
  project: Project | null;
};
export type GetProjectMembersResponse = {
  members: DefaultUser[];
};

type IssueT = Issue & {
  children: IssueT[];
  sprintIsActive: boolean;
  parent: Issue & {
    sprintIsActive: boolean;
    children: IssueT[];
    parent: null;
    assignee: DefaultUser | null;
    reporter: DefaultUser | null;
  };
  assignee: DefaultUser | null;
  reporter: DefaultUser | null;
};

export type GetIssuesResponse = {
  issues: IssueT[];
};

const patchIssuesBodyValidator = z.object({
  ids: z.array(z.string()),
  type: z.nativeEnum(EIssueType).optional(),
  status: z.nativeEnum(EIssueStatus).optional(),
  assigneeId: z.string().nullable().optional(),
  reporterId: z.string().optional(),
  parentId: z.string().nullable().optional(),
  sprintId: z.string().nullable().optional(),
  isDeleted: z.boolean().optional(),
});

export type PatchIssuesBody = z.infer<typeof patchIssuesBodyValidator>;

export type PostIssueResponse = { issue: Issue };

const postIssuesBodyValidator = z.object({
  name: z.string(),
  type: z.enum(["BUG", "STORY", "TASK", "EPIC", "SUBTASK"]),
  sprintId: z.string().nullable(),
  reporterId: z.string().nullable(),
  parentId: z.string().nullable(),
  sprintColor: z.string().nullable().optional(),
});

export type PostIssueBody = z.infer<typeof postIssuesBodyValidator>;

const patchIssueBodyValidator = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  type: z.nativeEnum(EIssueType).optional(),
  status: z.nativeEnum(EIssueStatus).optional(),
  sprintPosition: z.number().optional(),
  boardPosition: z.number().optional(),
  assigneeId: z.string().nullable().optional(),
  reporterId: z.string().optional(),
  parentId: z.string().nullable().optional(),
  sprintId: z.string().nullable().optional(),
  isDeleted: z.boolean().optional(),
  sprintColor: z.string().optional(),
});

export type PatchIssueBody = z.infer<typeof patchIssueBodyValidator>;

export type GetIssueDetailsResponse = {
  issue: GetIssuesResponse["issues"][number] | null;
};
export type PatchIssueResponse = {
  issue: Issue & { assignee: DefaultUser | null };
};
export type GetIssueCommentsResponse = {
  comments: GetIssueCommentResponse["comment"][];
};

export type GetIssueCommentResponse = {
  comment: Comment & { author: DefaultUser };
};
const postCommentBodyValidator = z.object({
  content: z.string(),
  authorId: z.string(),
});

export type PostCommentBody = z.infer<typeof postCommentBodyValidator>;
export type GetSprintsResponse = {
  map(arg0: (sprint: Sprint) => JSX.Element): import("react").ReactNode;
  sprints: Sprint[];
};
export type GetUserResponse = {
  user: DefaultUser;
};
export type GetUsersResponse = {
  users: DefaultUser[];
};
export type PostSprintResponse = {
  sprint: Sprint;
};
const patchSprintBodyValidator = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  duration: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  status: z.nativeEnum(ESprintStatus).optional(),
});

export type PatchSprintBody = z.infer<typeof patchSprintBodyValidator>;
export type PatchSprintResponse = { sprint: Sprint };
