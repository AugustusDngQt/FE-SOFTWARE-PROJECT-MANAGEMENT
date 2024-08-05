import axios from "axios";
import { getBaseUrl, getHeaders } from "../helpers";
import type { GetProjectMembersResponse, GetProjectResponse } from "../type";

const baseUrl = getBaseUrl();

export const projectRoutes = {
  getProject: async () => {
    const { data } = await axios.get<GetProjectResponse>(
      `${baseUrl}/projects/find-by-id/61707d2c-91de-4e39-b605-7f4a4a74f039`,
      {
        headers: getHeaders(),
      }
    );
    return data?.project;
  },
  getMembers: async ({ project_id }: { project_id: string }) => {
    const { data } = await axios.get<GetProjectMembersResponse>(
      `${baseUrl}/members/${project_id}`,
      {
        headers: getHeaders(),
      }
    );
    return data?.members;
  },
};
