export const StackDirection = {
  Horizontal: "horizontal",
  Vertical: "vertical",
} as const;
// eslint-disable-next-line no-redeclare
type StackDirection = (typeof StackDirection)[keyof typeof StackDirection];

const SeparatorByStackDirection: {
  [key in StackDirection]: string;
} = {
  [StackDirection.Horizontal]: " ",
  [StackDirection.Vertical]: "\n",
} as const;

export interface StackOptions {
  direction?: StackDirection;
  spacing?: number;
}

export const stack = (
  content: Array<string | null | undefined>,
  { direction = StackDirection.Vertical, spacing = 1 }: StackOptions = {}
) =>
  content
    .filter((item) => item !== null && item !== undefined)
    .join(SeparatorByStackDirection[direction].repeat(spacing));
