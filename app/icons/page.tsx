"use client";
import React from "react";
import { CodeBlock } from "@/components/ui/code-block";
import IconList from "@/components/icons-list";
import Link from "next/link";
import { motion } from "motion/react";

const page = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <HeroSection />
      <IconList />
    </div>
  );
};

const HeroSection = () => {
  return (
    <motion.div
      className="container mx-auto grid grid-cols-1 items-center gap-12 py-24 lg:grid-cols-2 lg:gap-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <motion.h1
          className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          Static Icons feels dead now
        </motion.h1>
        <motion.p
          className="text-muted-foreground mb-8 max-w-2xl text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          A collection of smooth, high-quality animated icons for your next
          project. Copy and paste directly into your app.
        </motion.p>
        <motion.p
          className="text-muted-foreground max-w-2xl text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          Crafted with care and{" "}
          <Link
            href="https://motion.dev/"
            target="_blank"
            className="text-primary hover:text-primary/70 bg-background/10 rounded px-2 py-1 transition-colors duration-150"
          >
            motion
          </Link>
        </motion.p>
      </div>

      <motion.div
        className="flex w-full justify-center lg:justify-end"
        initial={{ opacity: 0, x: 30, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <CodeBlock
          command="@lucide-animated/circle-chevron-down"
          className="w-full max-w-xl shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default page;
