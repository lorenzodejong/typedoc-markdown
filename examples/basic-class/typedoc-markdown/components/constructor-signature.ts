import { M, StackDirection } from "@typedoc-markdown/composer";
import { SignatureReflection } from "typedoc";

export interface ConstructorSignatureProps {
  signature: SignatureReflection;
}

export const ConstructorSignature = ({
  signature,
}: ConstructorSignatureProps) => {
  return M.codeBlock(
    M.stack(
      [
        M.p(signature.name),
        M.p("("),
        M.p(
          (signature.parameters || [])
            .map((param) => M.p(param.name))
            .join(", ")
        ),
        M.p(")"),
      ],
      {
        direction: StackDirection.Horizontal,
        spacing: 0,
      }
    ),
    "ts"
  );
};
