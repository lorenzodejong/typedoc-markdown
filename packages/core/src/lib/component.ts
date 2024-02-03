import type { ComponentRenderContext, SomeReflection } from "./types";

export interface ComponentProps<Node extends SomeReflection> {
  // eslint-disable-next-line no-unused-vars
  render: (node: Node, context: ComponentRenderContext) => void;
  recurse?: boolean;
}

export class BoundComponent<Node extends SomeReflection> {
  public readonly component: Component<Node>;
  public readonly node: Node;

  constructor(component: Component<Node>, node: Node) {
    this.component = component;
    this.node = node;
  }

  public async render(context: ComponentRenderContext) {
    return this.component.props.render(this.node, context);
  }
}

export class Component<Node extends SomeReflection> {
  public props: ComponentProps<Node>;

  constructor(props: ComponentProps<Node>) {
    this.props = props;
  }

  public bind(node: Node) {
    return new BoundComponent(this, node);
  }
}
