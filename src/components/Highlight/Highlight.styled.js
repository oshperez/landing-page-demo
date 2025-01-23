import styled from "styled-components";
import curvedLine from "assets/images/curved-line.svg";

const Highlight = styled.span`
  position: relative;
  font-family: "Nova Slim", sans-serif;
  font-weight: 400;

  &::before {
    content: url(${curvedLine});
    position: absolute;
    right: 0;
    bottom: -50%;
  }

  @media (max-width: 800px) {
    &::before {
      display: none;
    }
  }
`;

export default Highlight;
