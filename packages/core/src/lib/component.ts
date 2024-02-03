import type { ComponentRenderContext, SomeReflection } from "./types";

export interface ComponentProps<Node extends SomeReflection> {
  outputPath: (node: Node) => string;
  render: (node: Node, context: ComponentRenderContext) => string;
}

export class Component<Node extends SomeReflection> {
  public props: ComponentProps<Node>;

  constructor(props: ComponentProps<Node>) {
    this.props = props;
  }

  public render = (node: Node, context: ComponentRenderContext) => {
    return this.props.render(node, context);
  };
}
