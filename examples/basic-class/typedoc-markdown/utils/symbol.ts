import { ProjectReflection } from "typedoc";
import { SomeReflection } from "@typedoc-markdown/core";

export const getSymbol = (
  project: ProjectReflection,
  model: SomeReflection
) => {
  const symbol = project.getSymbolIdFromReflection(model);
  if (!symbol) {
    throw new Error(
      `Symbol reference could not be found for node with id ${model.id}`
    );
  }

  return symbol;
};
