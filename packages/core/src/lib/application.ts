import { ProjectReflection } from "typedoc";

import type { BoundComponent } from "./component";
import type { ComponentRenderContext, SomeReflection } from "./types";

export type Matcher = (
  // eslint-disable-next-line no-unused-vars
  node: SomeReflection
) => BoundComponent<any> | null;

export interface ApplicationProps {
  pageMatcher: Matcher;
}

export class Application {
  protected pageMatcher: Matcher;

  constructor(props: ApplicationProps) {
    this.pageMatcher = props.pageMatcher;
  }

  private async renderRecursively(
    node: SomeReflection,
    context: ComponentRenderContext
  ) {
    const binding = this.pageMatcher(node);

    if (binding) {
      const result = await binding.render(context);
      console.log("result", result);
    }

    if ((!binding || binding.component.props.recurse) && "children" in node) {
      for await (const child of node.children || []) {
        await this.renderRecursively(child, context);
      }
    }
  }

  public async render(project: ProjectReflection) {
    await this.renderRecursively(project, { project: project });
  }
}
