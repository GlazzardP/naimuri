import { ButtonWrapper } from "../styles";

interface IButton {
  onClick: any;
  btnText: string;
  loading?: boolean;
  primary: boolean;
}

const Button = ({ onClick, btnText, loading, primary }: IButton) => {
  return (
    <ButtonWrapper disabled={loading} onClick={onClick} primary={primary}>
      {loading ? "Loading" : btnText}
    </ButtonWrapper>
  );
};

export default Button;
