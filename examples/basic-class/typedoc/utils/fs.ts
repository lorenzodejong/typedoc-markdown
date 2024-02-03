import * as fs from "fs";
import { existsSync } from "fs";

export const readTextFile = (readmePath: string) => {
  const readmeExists = existsSync(readmePath);
  if (!readmeExists) {
    return null;
  }

  const readmeBuffer = fs.readFileSync(readmePath);
  return readmeBuffer.toString();
};
