import StyledButton from "./Button.styled";

const Button = ({ to, startIcon, endIcon, children, ...props }) => {
  return (
    <StyledButton
      href={to}
      startIcon={!!startIcon}
      endIcon={!!endIcon}
      {...props}
    >
      {startIcon}
      <span>{children}</span>
      {endIcon}
    </StyledButton>
  );
};

export default Button;
