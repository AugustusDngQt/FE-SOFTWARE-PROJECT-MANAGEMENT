"use client";
import { Backlog } from "@/components/backlog";
import { type Metadata } from "next";
import { getQueryClient } from "@/utils/get-query-client";
import { dehydrate } from "@tanstack/query-core";
import { Hydrate } from "@/utils/hydrate";
import React, { useState } from "react";
import ChatBox from "@/components/chatbox/chatbox";

export const metadata: Metadata = {
  title: "Backlog",
};

const BacklogPage = () => {
  const [showChat, setShowChat] = useState(false);
  const queryClient = getQueryClient();

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Backlog />
      <ChatBox showChat={showChat} setShowChat={setShowChat} />
    </Hydrate>
  );
};

export default BacklogPage;
