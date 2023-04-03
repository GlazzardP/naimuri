interface IButton {
  onClick: any;
  btnText: string;
  loading: boolean;
}

const Button = ({ onClick, btnText, loading }: IButton) => {
  return (
    <button disabled={loading} onClick={onClick}>
      {loading ? "Loading" : btnText}
    </button>
  );
};

export default Button;
