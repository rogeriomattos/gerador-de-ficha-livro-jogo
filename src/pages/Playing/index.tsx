import { useState } from "react";
import { redirect, useParams } from "react-router-dom";
import * as S from "./styles";
import Count from "@/components/Count";
import { getSavedGame, startNewGame, updateNumberValue } from "@/services";

const Playing = () => {
  const [updateKey, setUpdateKey] = useState(Date.now());
  const { key } = useParams();
  const savedGame = getSavedGame(key);
  const [game, setGame] = useState(savedGame ? savedGame : startNewGame(key));

  if (game === undefined || key === undefined) {
    redirect("/");
    return null;
  }

  const handleRestart = () => {
    startNewGame(key);
    setGame(startNewGame(key));
    setUpdateKey(Date.now());
  };
  console.log({ game });
  return (
    <S.Container key={updateKey}>
      <button onClick={handleRestart}>Restart</button>
      <S.BookTitle>{game.title}</S.BookTitle>
      <S.NumberSections>
        {game.numberSections.map((section) => (
          <S.Section key={section.key}>
            <h2>{section.title}</h2>
            <Count
              defaultValue={section.value}
              onChange={(value) => updateNumberValue(key, section.key, value)}
            />
          </S.Section>
        ))}
      </S.NumberSections>
      {game.textSections.map((section) => (
        <S.Section key={section.key}>
          <h2>{section.title}</h2>
          {section.value.map((text) => (
            <p>
              <span>{text}</span>
            </p>
          ))}
        </S.Section>
      ))}
      {game.itemsSections.map((section) => (
        <S.Section key={section.key}>
          <h2>{section.title}</h2>
          {section.value.map((item, index) => (
            <p key={item.title + index}>
              <span>{item.title}</span>
              <span>{item.value}</span>
            </p>
          ))}
        </S.Section>
      ))}
    </S.Container>
  );
};

export default Playing;
