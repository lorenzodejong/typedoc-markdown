import * as fs from "fs/promises";
import * as path from "path";
import { Application, ProjectReflection, TSConfigReader } from "typedoc";

import markdownRenderer from "./typedoc-markdown";

async function main() {
  const app = await Application.bootstrap({
    entryPoints: [path.resolve(__dirname, "src/**/*.ts")],
    tsconfig: path.resolve(__dirname, "tsconfig.json"),
    preserveWatchOutput: true,
  });
  app.options.addReader(new TSConfigReader());

  const reflection = await app.convert();
  if (!reflection) {
    throw new Error("Reflection could not be generated");
  }

  await app.generateJson(reflection, "out.json");

  const json = (await fs
    .readFile("./out.json")
    .then((buffer) => JSON.parse(buffer.toString()))) as ProjectReflection;

  markdownRenderer.render(json);
}

main();
