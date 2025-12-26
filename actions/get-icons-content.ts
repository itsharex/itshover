"use server";

import { promises as fs } from "fs";
import path from "path";
const ICON_DIR = "icons";
export const getIconsContent = async (name: string) => {
  const iconPath = path.join(process.cwd(), ICON_DIR, `${name}.tsx`);
  const content = await fs.readFile(iconPath, "utf-8");
  return content;
};
