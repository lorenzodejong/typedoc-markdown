import { DeclarationReflection } from "typedoc";
import { M } from "@typedoc-markdown/composer";

export interface HeadingSectionProps {
  model: DeclarationReflection;
}

export const HeadingSection = ({ model }: HeadingSectionProps) => {
  return M.stack(
    [
      M.h1(model.name),
      model.comment
        ? M.p(model.comment.summary.map((s) => s.text).join(" "))
        : null,
    ],
    { spacing: 2 }
  );
};
