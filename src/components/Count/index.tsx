import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import * as S from "./styles";

type CountProps = {
  defaultValue: number;
};

const Count = ({ defaultValue }: CountProps) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <S.Container>
      <FaMinus onClick={() => setValue(value - 1)} />
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <FaPlus onClick={() => setValue(value + 1)} />
    </S.Container>
  );
};

export default Count;
