import { Application } from "@typedoc-markdown/core";
import { match, P } from "ts-pattern";
import { ReflectionKind } from "typedoc";

import { classPage } from "./pages/class";

const app = new Application({
  pageComponentResolver: (node) => {
    return match(node)
      .with(
        {
          kind: ReflectionKind.Class,
          variant: "declaration",
        },
        () => classPage
      )
      .with(P.any, () => null)
      .exhaustive();
  },
});

export default app;
