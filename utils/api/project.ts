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
    console.log(data?.members);

    return data?.members;
  },

  getConversation: async ({ project_id }: { project_id: string }) => {
    const { data } = await axios.get<{ conversation: any }>(
      `${baseUrl}/conversations/find-by-project-id/${project_id}`,
      {
        headers: getHeaders(),
      }
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data?.conversation;
  },

  getMessage: async ({ project_id }: { project_id: string }) => {
    const { data } = await axios.get<{ messages: any[] }>(
      `${baseUrl}/messages/find-by-project-id/${project_id}`,
      {
        headers: getHeaders(),
      }
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data?.messages;
  },
};
