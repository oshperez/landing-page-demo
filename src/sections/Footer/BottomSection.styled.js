import styled from "styled-components";
import FlexContainer from "components/FlexContainer/FlexContainer.styled";

const BottomSection = styled(FlexContainer)`
  grid-area: footer-bottom;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  row-gap: 1.25em;

  ${({ theme }) => theme.breakpoints.down.sm`
  flex-direction: column-reverse;
  align-items: center;
`}
`;

export default BottomSection;
