import { Application, ParameterType } from "typedoc";
import { MarkdownThemeOptionsReader } from "./options-reader";
import { TypedocMarkdownTheme } from "./theme";
import { THEME_NAME } from "./constants";

export { TypedocMarkdownTheme } from "./theme";

export function load(app: Application) {
  app.renderer.defineTheme(THEME_NAME, TypedocMarkdownTheme);
  app.options.addReader(new MarkdownThemeOptionsReader());

  app.options.addDeclaration({
    help: "[Markdown Plugin] Do not render page title.",
    name: "configPath",
    type: ParameterType.String,
    defaultValue: "./typedoc-renderer",
  });
}
