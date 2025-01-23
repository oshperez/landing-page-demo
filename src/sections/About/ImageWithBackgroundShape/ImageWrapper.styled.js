import styled from "styled-components";

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  align-items: end;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    inset: 0 -10% 0 50%;
    width: 60%;
    height: 100%;
    background-color: ${({ theme }) => theme.palette.common.pink};
    z-index: 1;

    ${({ theme }) => theme.breakpoints.down.xl`
      inset: -15% 0 0 40%;
      height: 100%;
      `}

    ${({ theme }) => theme.breakpoints.down.md`
      width: 85%;
      inset: -15% 0 0 15%;
    `}
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    align-items: end;
  }

  ${({ theme }) => theme.breakpoints.down.xl`
    justify-content: center;
  `}
  
  ${({ theme }) => theme.breakpoints.down.lg`
    justify-content: start;
  `}
`;
export default ImageWrapper;
