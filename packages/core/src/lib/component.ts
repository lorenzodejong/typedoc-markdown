import { PageEvent, Reflection } from "typedoc";
import type { ComponentRenderContext, SomeReflection } from "./types";

export interface ComponentProps<Model extends SomeReflection> {
  outputPath: (model: Model) => string;
  render: (
    model: Model,
    event: PageEvent<Reflection>,
    context: ComponentRenderContext
  ) => string;
}

export class Component<Model extends SomeReflection> {
  public props: ComponentProps<Model>;

  constructor(props: ComponentProps<Model>) {
    this.props = props;
  }

  public render = (
    model: Model,
    event: PageEvent<Reflection>,
    context: ComponentRenderContext
  ) => {
    return this.props.render(model, event, context);
  };
}
