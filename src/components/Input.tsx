import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react";
import { InputWrapper } from "../styles";

interface IInput {
  type: string;
  value: string | number | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;

  placeholder: string;
  name: string;
}

const Input = ({ type, value, onChange, placeholder, name }: IInput) => {
  return (
    <InputWrapper
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    ></InputWrapper>
  );
};

export default Input;
