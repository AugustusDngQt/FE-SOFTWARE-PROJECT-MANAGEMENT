/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizontal, Minus } from "lucide-react";
import { io, type Socket } from "socket.io-client";
import { getBaseUrl, getHeaders } from "@/utils/helpers";
import { type IUserLogin } from "@/utils/interface/auth/user-login.interface";

interface ISendMessage {
  message: string;
  conversationId: string;
  senderId: string;
}

interface IDataMessage {
  message: string;
  senderId: string;
}

interface ChatBoxProps {
  showChat: boolean;
  setShowChat: (showChat: boolean) => void;
  conversation: any;
  messages: any[];
}
const baseUrl = getBaseUrl();
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const user: IUserLogin =
  localStorage.getItem("user") &&
  JSON.parse(localStorage.getItem("user") as string);

const { Authorization } = getHeaders();

export const ChatBox: React.FC<ChatBoxProps> = ({
  showChat,
  setShowChat,
  conversation,
  messages,
}: ChatBoxProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const messageConvertType: IDataMessage[] = messages.map((item) => ({
    message: item.message as string,
    senderId: item.senderId as string,
  }));
  const [mess, setMess] = useState<IDataMessage[]>(messageConvertType);

  const [message, setMessage] = useState<string>("");
  const socketRef = useRef<Socket>();

  useEffect(() => {
    socketRef.current = io(baseUrl, {
      extraHeaders: {
        Authorization,
      },
      query: {
        conversationId: conversation.id as string,
      },
    });
    socketRef.current.on("sendDataClient", (dataGot: IDataMessage) => {
      setMess((oldMsgs: IDataMessage[]) => [...oldMsgs, dataGot]);
    });
    return () => {
      socketRef.current?.disconnect();
    };
  }, []);
  const sendMessage = () => {
    if (message !== null) {
      const dataSendToServer: ISendMessage = {
        message,
        senderId: user.id,
        conversationId: conversation.id as string,
      };
      const dataMessage: IDataMessage = { message, senderId: user.id };
      setMess((oldMsgs: IDataMessage[]) => [...oldMsgs, dataMessage]);
      socketRef.current?.emit("sendDataServer", dataSendToServer);
      setMessage("");

      //Khi emit('sendDataClient') bên phía server sẽ nhận được sự kiện có tên 'sendDataClient' và handle như câu lệnh trong file index.js
      // socket.on("sendDataClient", function (data) {
      //   // Handle khi có sự kiện tên là sendDataClient từ phía client
      //   socketIo.emit("sendDataServer", { data }); // phát sự kiện  có tên sendDataServer cùng với dữ liệu tin nhắn từ phía server
      // });
    }
  };
  return (
    <>
      {showChat && (
        <div className="fixed bottom-0 right-3 h-[440px] w-[330px] translate-y-[-60px] justify-between overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm">
          <div className="mb-3 flex flex-row items-center space-y-1.5 bg-blue-600 p-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center space-x-4 ">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_1280.png"
                    alt=""
                  />
                </span>

                <div className="text-white">
                  <p className="text-sm font-medium leading-none">
                    {conversation.title}
                  </p>
                  <p className="text-sm">{user.name}</p>
                </div>
              </div>
              <Minus
                className="cursor-pointer text-end text-white"
                onClick={() => setShowChat(!showChat)}
              />
            </div>
          </div>
          <div className="h-[64%] overflow-auto p-6 pt-0">
            <div className="space-y-4">
              {mess
                ? mess.map((item, index) => (
                    <div
                      key={index}
                      className={`dark:#303030 flex w-max max-w-[75%] flex-col gap-2 rounded-3xl  px-3 py-2 text-sm ${
                        item.senderId === user.id
                          ? "ml-auto bg-blue-600 text-white"
                          : "mr-auto bg-muted"
                      }`}
                    >
                      {item.message}
                    </div>
                  ))
                : ""}
            </div>
          </div>
          <div className="mb-2 mt-1 flex items-center p-6 pt-0">
            <Input
              className="mr-2 h-10 rounded-xl"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <Button
              className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border border-input bg-blue-600 text-sm font-medium text-white hover:bg-blue-800"
              onClick={sendMessage}
            >
              <SendHorizontal size={15} strokeWidth={2} />
            </Button>
          </div>
        </div>
      )}

      {!showChat && (
        <div className="fixed bottom-20 right-3">
          <img
            className="h-12 w-12 cursor-pointer rounded-full border-2"
            src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_1280.png"
            alt=""
            onClick={() => setShowChat(!showChat)}
          />
        </div>
      )}
    </>
  );
};

export default ChatBox;
