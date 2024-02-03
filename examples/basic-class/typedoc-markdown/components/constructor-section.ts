import { DeclarationReflection, ReflectionKind } from "typedoc";
import { M } from "@typedoc-renderer/md-composer";
import { ConstructorSignature } from "./constructor-signature";

export interface ConstructorSectionProps {
  model: DeclarationReflection;
}

export const ConstructorSection = ({ model }: ConstructorSectionProps) => {
  const constructor = model.children?.find(
    (c) => c.kind === ReflectionKind.Constructor
  );
  if (!constructor) {
    return "";
  }

  return M.stack(
    [
      M.h2("Constructor"),

      ...(constructor.signatures || []).flatMap((signature) =>
        ConstructorSignature({ signature })
      ),
    ],
    { spacing: 2 }
  );
};
