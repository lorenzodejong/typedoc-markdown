export interface StackOptions {
  spacing?: number;
}

export const stack = (
  content: Array<string | null | undefined>,
  { spacing = 1 }: StackOptions = {}
) =>
  content
    .filter((item) => item !== null && item !== undefined)
    .join("\n".repeat(spacing));
