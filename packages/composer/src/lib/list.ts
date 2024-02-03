import { LIST_INDENTATION, UNORDERED_LIST_PREFIX } from "./constants";
import { layout } from "./layout";

export const ol = (items: string[], level: number = 0) =>
  layout(
    items.map(
      (item, index) => `${LIST_INDENTATION.repeat(level)}${index + 1}. ${item}`
    )
  );

export const ul = (items: string[], level: number = 0) =>
  layout(
    items.map(
      (item) =>
        `${LIST_INDENTATION.repeat(level)}${UNORDERED_LIST_PREFIX} ${item}`
    )
  );
