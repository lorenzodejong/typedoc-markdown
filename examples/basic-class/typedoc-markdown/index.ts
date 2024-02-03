import { Application } from "@typedoc-markdown/core";
import { match, P } from "ts-pattern";
import { ReflectionKind } from "typedoc";

import { classPage } from "./pages/class";

const app = new Application({
  pageMatcher: (node) => {
    return match(node)
      .with(
        {
          kind: ReflectionKind.Class,
          variant: "declaration",
        },
        (node) => classPage.bind(node)
      )
      .with(P.any, () => null)
      .exhaustive();
  },
});

export default app;
