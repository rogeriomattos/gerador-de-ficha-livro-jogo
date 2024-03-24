import ListItem from "../ListItem";
import * as S from "./styles";
import templates from "@/data/books";

const TemplatesList = () => {
  return (
    <S.List>
      {templates.map((item) => (
        <ListItem template={item} />
      ))}
    </S.List>
  );
};

export default TemplatesList;
