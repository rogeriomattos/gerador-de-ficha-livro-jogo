import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import * as S from "./styles";

type CountProps = {
  defaultValue: number;
  onChange: (value: number) => void;
};

const Count = ({ defaultValue, onChange }: CountProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleValue = (v: number) => {
    setValue(v);
    onChange(v);
  };

  return (
    <S.Container>
      <FaMinus onClick={() => handleValue(value - 1)} />
      <input
        type="number"
        value={value}
        onChange={(e) => handleValue(parseInt(e.target.value))}
      />
      <FaPlus onClick={() => handleValue(value + 1)} />
    </S.Container>
  );
};

export default Count;
