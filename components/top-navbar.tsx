"use client";
import Image from "next/image";
import { useUser } from "@/hooks/query-hooks/use-User";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import UserProfile from "./user-profile";
import { type IUserLogin } from "@/utils/interface/auth/user-login.interface";

const TopNavbar: React.FC = () => {
  const router = useRouter();
  const { user } = useUser();

  return (
    <div className="flex h-12 w-full items-center justify-between border-b px-4">
      <div className="flex items-center gap-x-2">
        <Image
          src="https://cdn.worldvectorlogo.com/logos/jira-3.svg"
          alt="Jira logo"
          width={25}
          height={25}
        />
        <span className="text-sm font-medium text-gray-600">AugustusDngQt</span>
      </div>
      {user ? (
        <div className="flex items-center gap-x-2">
          <span className="text-sm font-medium text-gray-600">
            <UserProfile user={user as IUserLogin} />
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-x-3 ">
          <div className="px-3 py-1.5 text-base font-medium text-white ">
            <Button
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export { TopNavbar };
