import type { Application } from "@typedoc-markdown/core";
import * as path from "path";
import { register as registerTsNode } from "ts-node";
import {
  PageEvent,
  ProjectReflection,
  Reflection,
  RenderTemplate,
  Renderer,
  Theme,
} from "typedoc";

// Using `ts-node` registration for runtime compilation
registerTsNode();

const loadUserApp = (configPath: string) => {
  return require(path.resolve(configPath)).default as Application;
};

export class TypedocMarkdownTheme extends Theme {
  protected userApp: Application;

  constructor(renderer: Renderer) {
    super(renderer);

    const configPath = this.getOption<string>("configPath");
    this.userApp = loadUserApp(configPath);
  }

  getOption = <T>(key: string): T => {
    return this.application.options.getValue(key) as T;
  };

  render = (
    page: PageEvent<Reflection>,
    template: RenderTemplate<PageEvent<Reflection>>
  ): string => {
    return template(page) as string;
  };

  getUrls(project: ProjectReflection) {
    return this.userApp.collectPageUrls(project);
  }
}
