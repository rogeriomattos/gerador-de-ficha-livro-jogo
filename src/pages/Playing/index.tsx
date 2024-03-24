import { redirect, useParams } from "react-router-dom";
import * as S from "./styles";
import Count from "@/components/Count";
import { Template } from "@/data/types";
import templateList from "@/data/books";

const Playing = () => {
  const { key } = useParams();

  const template: Template | undefined = templateList.find(
    (item) => item.key === key
  );

  if (!template) {
    redirect("/");
    return null;
  }

  return (
    <S.Container>
      <S.BookTitle>{template.title}</S.BookTitle>
      <S.NumberSections>
        {template.numberSections.map((section) => (
          <S.Section key={section.title}>
            <h2>{section.title}</h2>
            <Count defaultValue={section.value} />
          </S.Section>
        ))}
      </S.NumberSections>
      {template.textSections.map((section) => (
        <S.Section key={section.title}>
          <h2>{section.title}</h2>
          {section.value.map((text) => (
            <p>
              <span>{text}</span>
            </p>
          ))}
        </S.Section>
      ))}
      {template.itemsSections.map((section) => (
        <S.Section key={section.title}>
          <h2>{section.title}</h2>
          {section.value.map((item) => (
            <p>
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
