import { Options, OptionsReader } from "typedoc";
import { THEME_NAME } from "./constants";

export class MarkdownThemeOptionsReader implements OptionsReader {
  name = "typedoc-markdown-theme-reader";
  readonly order = 1000;
  readonly supportsPackages = false;

  read(container: Options) {
    if (container.getValue("theme") === "default") {
      container.setValue("theme", THEME_NAME);
    }
  }
}
