import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react";

interface IInput {
  type: string;
  value: string | number | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;

  placeholder: string;
  name: string;
}

const Input = ({ type, value, onChange, placeholder, name }: IInput) => {
  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
