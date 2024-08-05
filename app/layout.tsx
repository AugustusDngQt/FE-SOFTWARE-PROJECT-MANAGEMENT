"use client";
import "@/styles/globals.css";
import Toaster from "@/components/toast";
import QueryProvider from "@/utils/provider";
import { AuthModalProvider } from "@/context/use-auth-modal";
import { AuthModal } from "@/components/modals/auth";
import { useState } from "react";
import ChatBox from "@/components/chatbox/chatbox";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<string[]>([
    "Hi, how can I help you today?",
  ]);

  const addMessage = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <html lang="en">
      <head />
      <body>
        <QueryProvider>
          <AuthModalProvider>
            <AuthModal />
            <Toaster
              position="bottom-left"
              reverseOrder={false}
              containerStyle={{
                height: "92vh",
                marginLeft: "3vw",
              }}
            />
            {children}
            <ChatBox
              showChat={showChat}
              setShowChat={setShowChat}
              messages={messages}
              addMessage={addMessage}
            />
          </AuthModalProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
