import { io } from "socket.io-client";
import { getBaseUrl, getHeaders } from "./utils/helpers";
// import { IUserLogin } from "./utils/interface/auth/user-login.interface";

const baseUrl = getBaseUrl();
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
// const user: IUserLogin =
//   localStorage.getItem("user") &&
//   JSON.parse(localStorage.getItem("user") as string);

const { Authorization } = getHeaders();
export const socket = io(baseUrl, {
  autoConnect: false,
  extraHeaders: {
    authorization: Authorization,
  },
});
