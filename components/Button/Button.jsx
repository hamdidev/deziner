const Button = ({ buttonText, onClick, customClass, prefix }) => {
  return (
    <div
      className={`flex flex-center btn-wrapper ${customClass}`}
      onClick={onClick}
    >
      {prefix} {buttonText}
    </div>
  );
};

export default Button;
