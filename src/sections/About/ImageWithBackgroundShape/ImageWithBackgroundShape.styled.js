import styled from "styled-components";

const StyledImageWithBackgroundShape = styled.img`
  max-width: 100%;
  position: relative;
  z-index: 2;

  ${({theme}) => theme.breakpoints.down.lg`
    max-width: 90%;
  `}
`;

export default StyledImageWithBackgroundShape;
