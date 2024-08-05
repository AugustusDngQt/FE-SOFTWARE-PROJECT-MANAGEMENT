import "@/styles/globals.css";
import Toaster from "@/components/toast";
import QueryProvider from "@/utils/provider";
import { AuthModalProvider } from "@/context/use-auth-modal";
import { AuthModal } from "@/components/modals/auth";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
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
          </AuthModalProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
