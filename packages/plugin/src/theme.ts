import {
  PageEvent,
  ProjectReflection,
  Reflection,
  RenderTemplate,
  Renderer,
  Theme,
  UrlMapping,
} from "typedoc";
import * as path from "path";
import { register as registerTsNode } from "ts-node";
import type { Application } from "@typedoc-markdown/core";

// Using `ts-node` registration for runtime compilation
// eslint-disable-next-line no-undef
registerTsNode();

const loadUserApp = (configPath: string) => {
  // eslint-disable-next-line no-undef
  return require(path.resolve(configPath)).default as Application;
};

export class TypedocMarkdownTheme extends Theme {
  protected userApp: Application;

  constructor(renderer: Renderer) {
    super(renderer);

    const configPath = this.getOption<string>("configPath");
    this.userApp = loadUserApp(configPath);
  }

  getOption = <T>(key: string) => {
    return this.application.options.getValue(key) as T;
  };

  render = (
    page: PageEvent<Reflection>,
    template: RenderTemplate<PageEvent<Reflection>>
  ) => {
    console.log(page, template);

    return "";
  };

  getUrls(project: ProjectReflection) {
    this.userApp.render(project);

    const mapping: UrlMapping<Reflection>[] = [];

    return mapping;
  }
}
