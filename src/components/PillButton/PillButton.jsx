import Button from "components/Button/Button";

function PillButton({ to, children, ...props }) {
  return (
    <Button
      to={to}
      variant="outlined"
      size="small"
      pill
      mq={{ down: { md: `display: none;` } }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default PillButton;
