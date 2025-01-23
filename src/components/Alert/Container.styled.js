import styled from "styled-components";
import FlexContainer from "components/FlexContainer/FlexContainer.styled";

const StyledContainer = styled(FlexContainer)`
  position: relative;
  top: -3em;
  background-color: ${({ theme }) => theme.palette.common.pink};
  border-radius: 10px;
`;

export default StyledContainer;
