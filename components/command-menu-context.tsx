"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface CommandMenuContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggle: () => void;
}

const CommandMenuContext = createContext<CommandMenuContextType | undefined>(
  undefined,
);

export const CommandMenuProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <CommandMenuContext.Provider value={{ isOpen, setIsOpen, toggle }}>
      {children}
    </CommandMenuContext.Provider>
  );
};

export const useCommandMenu = () => {
  const context = useContext(CommandMenuContext);
  if (!context) {
    throw new Error("useCommandMenu must be used within a CommandMenuProvider");
  }
  return context;
};
