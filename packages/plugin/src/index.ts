import { Application, ParameterType } from "typedoc";
import { TypedocRendererThemeOptionsReader } from "./options-reader";
import { TypedocRendererTheme } from "./theme";
import { THEME_NAME } from "./constants";

export { TypedocRendererTheme } from "./theme";

export function load(app: Application) {
  app.renderer.defineTheme(THEME_NAME, TypedocRendererTheme);
  app.options.addReader(new TypedocRendererThemeOptionsReader());

  app.options.addDeclaration({
    help: "[Typedoc renderer Plugin] Entry point to the module which exports the Application instance from @typedoc-renderer/core.",
    name: "rendererEntryPoint",
    type: ParameterType.String,
    defaultValue: "./typedoc",
  });
}
