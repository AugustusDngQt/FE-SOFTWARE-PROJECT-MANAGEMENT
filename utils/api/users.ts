import axios from "axios";
import { getBaseUrl, getHeaders } from "../helpers";
import { type GetUserResponse } from "../type";

const baseUrl = getBaseUrl();

export const usersRoutes = {
  authentications: async () => {
    const { data } = await axios.get<GetUserResponse>(
      `${baseUrl}/users/authentications`,
      {
        headers: getHeaders(),
      }
    );
    return data.user;
  },
};
