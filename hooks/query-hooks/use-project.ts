"use client";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useProject = () => {
  const { data: project, isLoading: projectIsLoading } = useQuery(
    ["project"],
    api.project.getProject
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data: conversation } = useQuery(
    ["project-conversation"],
    () => api.project.getConversation({ project_id: project?.id ?? "" }),
    { enabled: !!project?.id }
  );
  const { data: members } = useQuery(
    ["project-members"],
    () => api.project.getMembers({ project_id: project?.id ?? "" }),
    {
      enabled: !!project?.id,
    }
  );

  const { data: messages } = useQuery(
    ["project-messages"],
    () => api.project.getMessage({ project_id: project?.id ?? "" }),
    {
      enabled: !!project?.id,
    }
  );

  return {
    project,
    projectIsLoading,
    members,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    conversation,
    messages,
  };
};
