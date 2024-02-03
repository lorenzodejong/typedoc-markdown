import { HEADER_PREFIX } from "./constants";

const leveledHeading = (level: number, content: string) =>
  `${HEADER_PREFIX.repeat(level)} ${content}`;

export const h1 = (content: string) => leveledHeading(1, content);
export const h2 = (content: string) => leveledHeading(2, content);
export const h3 = (content: string) => leveledHeading(3, content);
export const h4 = (content: string) => leveledHeading(4, content);
export const h5 = (content: string) => leveledHeading(5, content);
export const h6 = (content: string) => leveledHeading(6, content);
