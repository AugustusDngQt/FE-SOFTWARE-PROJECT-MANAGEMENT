import { Board } from "@/components/board";
import { type Metadata } from "next";
import { getQueryClient } from "@/utils/get-query-client";
import { Hydrate } from "@/utils/hydrate";
import { dehydrate } from "@tanstack/query-core";
export const metadata: Metadata = {
  title: "Board",
};

const BoardPage = async () => {
  return (
    <Hydrate state={undefined}>
      <Board />
    </Hydrate>
  );
};

export default BoardPage;
