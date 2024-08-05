import axios from "axios";
import { getBaseUrl } from "../helpers";
import type { IUserLogin } from "../interface/auth/user-login.interface";

const baseUrl = getBaseUrl();

export const authRoutes = {
  login: async (loginData: { username: string; password: string }) => {
    try {
      const { data } = await axios.post<{
        user: IUserLogin;
        accessToken: string;
        refreshToken: string;
      }>(`${baseUrl}/auth/login`, loginData);
      return data;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  },
};
