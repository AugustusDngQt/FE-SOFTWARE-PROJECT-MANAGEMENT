import { type IExecutor } from "../executor.interface";

export interface IUser {
  id: string;
  email: string;
  name: string;
  address: string;
  phoneNumber: string;
  password: string;
  verifiedToken: string | null;
  forgotPasswordToken: string | null;
  refreshToken: string | null;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  createdBy: IExecutor | null;
  updatedBy: IExecutor | null;
  deletedBy: IExecutor | null;
  isDeleted: boolean;
}
