import StyledBarIcon from "./BarIcon.styled";
import Bars from "./Bars.styled";

const BarIcon = ({ open, setOpen }) => {
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <StyledBarIcon onClick={toggleMenu}>
      <Bars open={open} />
    </StyledBarIcon>
  );
};

export default BarIcon;
