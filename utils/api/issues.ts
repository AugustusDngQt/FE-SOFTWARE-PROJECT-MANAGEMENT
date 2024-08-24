import axios from "axios";
import { getBaseUrl, getHeaders } from "../helpers";
import type {
  PatchIssueBody,
  GetIssueDetailsResponse,
  PatchIssueResponse,
  PostIssueResponse,
  PatchIssuesBody,
  GetIssuesResponse,
  PostIssueBody,
  GetIssueCommentResponse,
  GetIssueCommentsResponse,
  PostCommentBody,
} from "../type";

const baseUrl = getBaseUrl();

export const issuesRoutes = {
  getIssues: async ({ signal }: { signal?: AbortSignal }) => {
    const { data } = await axios.get<GetIssuesResponse>(`${baseUrl}/issues`, {
      signal,
      headers: getHeaders(),
    });
    return data?.issues;
  },
  updateBatchIssues: async (body: PatchIssuesBody) => {
    const { data } = await axios.patch<GetIssuesResponse>(
      `${baseUrl}/issues`,
      body,
      { headers: getHeaders() }
    );
    return data?.issues;
  },
  getIssueDetails: async ({ issueId }: { issueId: string }) => {
    const { data } = await axios.get<GetIssueDetailsResponse>(
      `${baseUrl}/api/issues/${issueId}`
    );
    return data?.issue;
  },
  postIssue: async (body: PostIssueBody) => {
    const { data } = await axios.post<PostIssueResponse>(
      `${baseUrl}/issues`,
      body,
      { headers: getHeaders() }
    );

    return data?.issue;
  },
  patchIssue: async ({
    issueId,
    ...body
  }: { issueId: string } & PatchIssueBody) => {
    console.log("body", body);

    const { data } = await axios.patch<PatchIssueResponse>(
      `${baseUrl}/issues/${issueId}`,
      body,
      { headers: getHeaders() }
    );

    return data?.issue;
  },
  deleteIssue: async ({ issueId }: { issueId: string }) => {
    const { data } = await axios.delete<PostIssueResponse>(
      `${baseUrl}/issues/${issueId}`,
      { headers: getHeaders() }
    );

    return data?.issue;
  },
  addCommentToIssue: async (
    payload: {
      issueId: string;
    } & PostCommentBody
  ) => {
    const { issueId, content } = payload;
    const { data } = await axios.post<GetIssueCommentResponse>(
      `${baseUrl}/comments`,
      { content, issueId },
      { headers: getHeaders() }
    );

    return data?.comment;
  },
  getIssueComments: async ({ issueId }: { issueId: string }) => {
    const { data } = await axios.get<GetIssueCommentsResponse>(
      `${baseUrl}/comments/${issueId}`,
      { headers: getHeaders() }
    );

    return data?.comments;
  },

  updateIssueComment: async ({
    issueId,
    content,
    commentId,
  }: {
    issueId: string;
    commentId: string;
    content: string;
  }) => {
    const { data } = await axios.patch<GetIssueCommentResponse>(
      `${baseUrl}/api/issues/${issueId}/comments/${commentId}`,
      { content },
      { headers: getHeaders() }
    );
    return data?.comment;
  },
};
