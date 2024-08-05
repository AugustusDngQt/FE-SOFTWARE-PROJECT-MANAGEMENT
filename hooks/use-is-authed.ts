"use client";
import { useAuthModalContext } from "@/context/use-auth-modal";
import { useUser } from "./query-hooks/use-User";
export const useIsAuthenticated = (): [string | undefined, () => void] => {
  const user = useUser().user;

  const { setAuthModalIsOpen } = useAuthModalContext();

  function openAuthModal() {
    setAuthModalIsOpen(true);
  }

  return [user?.id, openAuthModal];
};
