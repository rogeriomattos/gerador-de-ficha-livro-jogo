import { Template } from "@/data/types";
import * as S from "./styles";
import { Link } from "react-router-dom";

type ListItemProps = {
  template: Template;
};

const ListItem = ({ template }: ListItemProps) => {
  return (
    <S.ListItem>
      <span>{template.title}</span>
      <Link to={`playing/${template.key}`}>
        <button>Jogar</button>
      </Link>
      <button>Deletar</button>
      <button>Editar</button>
    </S.ListItem>
  );
};

export default ListItem;
