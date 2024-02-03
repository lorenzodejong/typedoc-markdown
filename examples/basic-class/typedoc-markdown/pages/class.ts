import { M } from "@typedoc-markdown/composer";
import { Component } from "@typedoc-markdown/core";
import { existsSync } from "fs";
import * as fs from "fs/promises";
import * as path from "path";
import { type DeclarationReflection } from "typedoc";

const renderHeadingSection = (node: DeclarationReflection) => {
  return [
    M.h1(node.name),
    node.comment
      ? M.p(node.comment.summary.map((s) => s.text).join(" "))
      : null,
  ];
};

const loadReadme = async (readmePath: string) => {
  const readmeExists = existsSync(readmePath);
  if (!readmeExists) {
    return null;
  }

  const readmeBuffer = await fs.readFile(readmePath);
  return readmeBuffer.toString();
};

export const classPage = new Component<DeclarationReflection>({
  render: async (node, { project }) => {
    const symbol = project.getSymbolIdFromReflection(node);

    if (!symbol) {
      throw new Error(
        `Symbol reference could not be found for node with id ${node.id}`
      );
    }

    const readmePath = path.resolve(path.dirname(symbol.fileName), "README.md");
    const readme = await loadReadme(readmePath);

    return M.layout(
      [...(readme ? [readme] : renderHeadingSection(node)), M.h1("Interfaces")],
      {
        spacing: 2,
      }
    );
  },
});
