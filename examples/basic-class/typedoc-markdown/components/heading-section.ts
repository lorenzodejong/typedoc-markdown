import { DeclarationReflection } from "typedoc";
import { M } from "@typedoc-markdown/composer";

export interface HeadingSectionProps {
  node: DeclarationReflection;
}

export const HeadingSection = ({ node }: HeadingSectionProps) => {
  return [
    M.h1(node.name),
    node.comment
      ? M.p(node.comment.summary.map((s) => s.text).join(" "))
      : null,
  ];
};
