export const code = (content: string) => `\`${content}\``;
export const codeBlock = (content: string, syntax: string = "") =>
  `\`\`\`${syntax}\n${content}\n\`\`\``;
