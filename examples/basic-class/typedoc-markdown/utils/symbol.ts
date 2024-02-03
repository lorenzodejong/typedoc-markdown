import { ProjectReflection } from "typedoc";
import { SomeReflection } from "@typedoc-markdown/core";

export const getSymbol = (project: ProjectReflection, node: SomeReflection) => {
  const symbol = project.getSymbolIdFromReflection(node);
  if (!symbol) {
    throw new Error(
      `Symbol reference could not be found for node with id ${node.id}`
    );
  }

  return symbol;
};
