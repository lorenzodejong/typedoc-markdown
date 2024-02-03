export interface LayoutOptions {
  spacing?: number;
}

export const layout = (
  content: Array<string | null | undefined>,
  { spacing = 1 }: LayoutOptions = {}
) =>
  content
    .filter((item) => item !== null && item !== undefined)
    .join("\n".repeat(spacing));
