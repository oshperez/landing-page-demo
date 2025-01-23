import styled from "styled-components";
import FlexContainer from "components/FlexContainer/FlexContainer.styled";

const Navigation = styled(FlexContainer)`
  grid-area: nav;
  justify-content: space-between;
  row-gap: ${({ theme }) => theme.spacing.lg};
  column-gap: 15%;

  ${({ theme }) => theme.breakpoints.down.md`
    justify-content: start;
  `}

  ${({ theme }) => theme.breakpoints.down.sm`
    flex-direction: column;
    align-items: center;
  `}
`;

export default Navigation;
