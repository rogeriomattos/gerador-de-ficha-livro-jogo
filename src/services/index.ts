import templateList from "@/data/books";
import { Template } from "@/data/types";

export const getSavedGame = (
  templateKey: string = ""
): Template | undefined => {
  const savedGame = localStorage.getItem(templateKey);

  if (savedGame) return JSON.parse(savedGame) as Template;

  return undefined;
};

export const startNewGame = (
  templateKey: string = ""
): Template | undefined => {
  const template = templateList.find((t) => t.key === templateKey);

  if (template) {
    localStorage.setItem(templateKey, JSON.stringify(template));
    return template;
  }
  return undefined;
};

export const updateNumberValue = (
  templateKey: string,
  sectionKey: string,
  value: number
) => {
  const game = getSavedGame(templateKey);

  if (game) {
    console.log({ game, templateKey, sectionKey, value });
    game.numberSections = game.numberSections.map((s) =>
      s.key === sectionKey ? { ...s, value } : { ...s }
    );
    localStorage.setItem(templateKey, JSON.stringify(game));
  }
};
