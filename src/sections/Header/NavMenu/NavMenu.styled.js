import styled from "styled-components";

const StyledNavMenu = styled.div`
  display: ${({ navOpen }) => (navOpen ? "block" : "none")};
  position: absolute;
  right: -10px;
  top: 90%;
  text-align: center;
  min-width: min(280px, 100%);
  background-color: ${({ theme }) => theme.palette.common.grey};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadow.dropShadow[2]};
  z-index: 1000;

  &::after {
    content: "";
    position: absolute;
    top: -4px;
    right: 10px;
    display: block;
    width: 25px;
    height: 25px;
    background-color: inherit;
    z-index: 1000;
    transform: rotate(45deg);
  }
`;

export default StyledNavMenu;
