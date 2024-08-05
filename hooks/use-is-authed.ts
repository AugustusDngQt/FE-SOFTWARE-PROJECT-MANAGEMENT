"use client";
import { useAuthModalContext } from "@/context/use-auth-modal";

export const useIsAuthenticated = (): [string | undefined, () => void] => {
  const { setAuthModalIsOpen } = useAuthModalContext();

  function openAuthModal() {
    setAuthModalIsOpen(true);
  }

  return [undefined, openAuthModal];
};
