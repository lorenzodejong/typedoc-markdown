import type { ProjectReflection, Reflection, UrlMapping } from "typedoc";

import type { Component } from "./component";
import type { ComponentRenderContext, SomeReflection } from "./types";

export type Matcher = (model: SomeReflection) => Component<any> | null;

export interface ApplicationProps {
  pageComponentResolver: Matcher;
}

export class Application {
  protected collectedUrlMappingByModelId: Record<
    string,
    UrlMapping<Reflection>
  >;
  protected pageComponentResolver: Matcher;

  constructor(props: ApplicationProps) {
    this.collectedUrlMappingByModelId = {};

    this.pageComponentResolver = props.pageComponentResolver;
  }

  private createContext = (): ComponentRenderContext => ({
    getUrlMappingForModel: (model: SomeReflection) =>
      this.collectedUrlMappingByModelId[model.id] || null,
  });

  public collectPageUrls = (
    project: ProjectReflection
  ): UrlMapping<Reflection>[] => {
    const context = this.createContext();

    const collect = (
      model: SomeReflection,
      result: UrlMapping<Reflection>[] = []
    ): UrlMapping<Reflection>[] => {
      const component = this.pageComponentResolver(model);

      if (component) {
        const urlMapping: UrlMapping<Reflection> = {
          model: model,
          template: (event) => component.render(model, event, context),
          url: component.props.outputPath(model),
        };

        this.collectedUrlMappingByModelId[model.id] = urlMapping;
        result.push(urlMapping);
      }

      if ("children" in model) {
        let collected: UrlMapping<Reflection>[] = [];

        for (const child of model.children || []) {
          collected = [...collected, ...collect(child, result)];
        }

        return collected;
      }

      return result;
    };

    return collect(project);
  };
}
