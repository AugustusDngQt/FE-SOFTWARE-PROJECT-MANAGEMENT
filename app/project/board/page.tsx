import { Board } from "@/components/board";
import { type Metadata } from "next";
import { Hydrate } from "@/utils/hydrate";
export const metadata: Metadata = {
  title: "Board",
};

const BoardPage = () => {
  return (
    <Hydrate state={undefined}>
      <Board />
    </Hydrate>
  );
};

export default BoardPage;
