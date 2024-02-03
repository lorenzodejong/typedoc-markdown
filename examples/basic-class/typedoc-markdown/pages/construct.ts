import { M } from "@typedoc-markdown/composer";
import { Component } from "@typedoc-markdown/core";
import * as path from "path";
import { type DeclarationReflection } from "typedoc";

import { HeadingSection } from "../components";
import { getSymbol, readTextFile } from "../utils";

export const classPage = new Component<DeclarationReflection>({
  outputPath: (node) => `/classes/${node.name}`,
  render: (node, { project }) => {
    const symbol = getSymbol(project, node);
    const readmePath = path.resolve(path.dirname(symbol.fileName), "README.md");
    const readme = readTextFile(readmePath);

    return M.stack([...(readme ? [readme] : HeadingSection({ node }))], {
      spacing: 2,
    });
  },
});
