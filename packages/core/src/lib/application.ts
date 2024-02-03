import type { ProjectReflection, Reflection, UrlMapping } from "typedoc";

import type { Component } from "./component";
import type { SomeReflection } from "./types";

export type Matcher = (node: SomeReflection) => Component<any> | null;

export interface ApplicationProps {
  pageComponentResolver: Matcher;
}

export class Application {
  protected pageComponentResolver: Matcher;

  constructor(props: ApplicationProps) {
    this.pageComponentResolver = props.pageComponentResolver;
  }

  public collectPageUrls(project: ProjectReflection): UrlMapping<Reflection>[] {
    const collect = (
      node: SomeReflection,
      result: UrlMapping<Reflection>[] = []
    ): UrlMapping<Reflection>[] => {
      const component = this.pageComponentResolver(node);

      if (component) {
        result.push({
          model: node,
          template: () => component.render(node, { project }),
          url: component.props.outputPath(node),
        });
      }

      if ("children" in node) {
        for (const child of node.children || []) {
          return collect(child, result);
        }
      }

      return result;
    };

    return collect(project);
  }
}
