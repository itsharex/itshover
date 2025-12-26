"use client";

import * as React from "react";
import { Command } from "cmdk";
import {
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { motion } from "motion/react";
import { ICONS } from "@/lib/icons";
import { useRouter } from "next/navigation";
import { MoveRight } from "lucide-react";
import { useCommandMenu } from "./command-menu-context";

export const CommandMenu = () => {
  const { isOpen, setIsOpen } = useCommandMenu();
  const router = useRouter();
  const dialogRef = React.useRef<HTMLDivElement>(null);

  // Handle outside click
  React.useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    // Use setTimeout to avoid immediate trigger from the button click
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <motion.div
        ref={dialogRef}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        className="bg-popover text-popover-foreground w-full max-w-[450px] overflow-hidden rounded-xl border shadow-2xl"
      >
        <Command className="w-full">
          <CommandInput placeholder="Search for icons..." autoFocus />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Icons">
              {ICONS.map((icon) => (
                <CommandItem
                  key={icon.name}
                  className="gap-4"
                  onSelect={() => {
                    router.push(icon.path);
                    setIsOpen(false);
                  }}
                >
                  <MoveRight className="h-4 w-4" />
                  {icon.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </motion.div>
    </div>
  );
};
