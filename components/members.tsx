import { useFiltersContext } from "@/context/use-filters-context";
import { useProject } from "@/hooks/query-hooks/use-project";
import { Button } from "./ui/button";
import { Avatar } from "./avatar";
import { NotImplemented } from "./not-implemented";
import { AddPeopleIcon } from "./svgs";

const Members = () => {
  const { members } = useProject();

  const { assignees, setAssignees } = useFiltersContext();
  const unassigned = {
    id: "unassigned",
    name: "Unassigned",
    avatar: undefined,
    email: "",
  };

  function handleAssigneeFilter(id: string) {
    setAssignees((prev) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      if (prev.includes(id)) return prev.filter((a) => a !== id);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return [...prev, id];
    });
  }
  if (!members) return <div />;

  return (
    <div className="flex items-center">
      {[...members, unassigned].map((member, index) => {
        return (
          <div
            key={member.id}
            style={{ zIndex: 10 - index }}
            className="hover:!z-10"
          >
            <Button
              onClick={() => handleAssigneeFilter(member.id)}
              customColors
              customPadding
              data-state={
                assignees.includes(member.id) ? "selected" : "not-selected"
              }
              className="[&[data-state=selected]]:border-inprogress -mx-1 flex border-spacing-2 rounded-full border-2 border-transparent bg-white p-0.5 transition-all duration-75 hover:-mt-1.5"
            >
              <Avatar src={member.avatar} alt={`${member.name}`} />
            </Button>
          </div>
        );
      })}

      <NotImplemented feature="add people">
        <button>
          <AddPeopleIcon
            className="ml-3 rounded-full bg-gray-200 p-1 text-gray-500"
            size={35}
          />
        </button>
      </NotImplemented>
    </div>
  );
};

export { Members };
