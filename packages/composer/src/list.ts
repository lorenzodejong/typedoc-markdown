import { LIST_INDENTATION, UNORDERED_LIST_PREFIX } from "./constants";
import { stack } from "./stack";

export const ol = (items: string[], level: number = 0) =>
  stack(
    items.map(
      (item, index) => `${LIST_INDENTATION.repeat(level)}${index + 1}. ${item}`
    )
  );

export const ul = (items: string[], level: number = 0) =>
  stack(
    items.map(
      (item) =>
        `${LIST_INDENTATION.repeat(level)}${UNORDERED_LIST_PREFIX} ${item}`
    )
  );
