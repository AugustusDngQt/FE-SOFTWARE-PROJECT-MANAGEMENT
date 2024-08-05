import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Minus } from "lucide-react";
export default function ChatBox({
  showChat,
  setShowChat,
}: {
  showChat: boolean;
  setShowChat: (showChat: boolean) => void;
}) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      {showChat && (
        <div className="fixed bottom-0 right-7 h-[440px] w-[330px] translate-y-[-60px] justify-between overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm">
          <div className="mb-3 flex flex-row items-center space-y-1.5 bg-blue-600 p-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center space-x-4 ">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/jira-3.svg"
                    alt=""
                  />
                </span>
                <div className="text-white">
                  <p className="text-sm font-medium leading-none">Jira clone</p>
                  <p className="text-sm">m@example.com</p>
                </div>
              </div>
              <Minus
                className="cursor-pointer text-end text-white"
                onClick={(e) => setShowChat(!showChat)}
              />
            </div>
          </div>
          <div className="h-[64%] p-6 pt-0">
            <div className="space-y-4">
              <div className="dark:#303030 flex w-max max-w-[75%] flex-col gap-2 rounded-3xl bg-muted px-3 py-2 text-sm">
                Hi, how can I help you today?
              </div>
              {/* Add more chat messages here */}
            </div>
          </div>
          <div className="mb-2 mt-1 flex items-center p-6 pt-0">
            <Input
              className="mr-2 h-10 rounded-xl"
              placeholder="Type your message..."
              value={inputValue} // Set input value
              onChange={(e) => setInputValue(e.target.value)} // Handle input change
            />
            <Button className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border border-input bg-blue-600 text-sm font-medium text-white  hover:bg-blue-800">
              <p className="text-xl">
                <SendHorizontal size={15} strokeWidth={2} />
              </p>
            </Button>
          </div>
        </div>
      )}

      {!showChat && (
        <div className="fixed bottom-20 right-3">
          <img
            className="h-12 w-12 cursor-pointer rounded-full border-2"
            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/328127855_838300880577784_1570320180476258743_n.jpg?stp=dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGWTqps9Jkg0AE4cs_O7Ijusyvakl2HMx-zK9qSXYczH6f8mD-XbBVT1nblXbiXmH9ts_hy81se0KkLnuvX72Li&_nc_ohc=hw-9f3UY1y8Q7kNvgFakNTC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-4.fna&oh=00_AYB8zTnnG4aykk5eD9AtLF0wDUFksxXT0kIUSpgeD5eN4g&oe=66B62AC1"
            alt=""
            onClick={() => setShowChat(!showChat)}
          />
        </div>
      )}
    </>
  );
}
