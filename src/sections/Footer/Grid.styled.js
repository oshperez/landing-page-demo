import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "logo logo"
    "nav newsletter"
    "divider divider"
    "footer-bottom footer-bottom";
  column-gap: 15%;

  ${({ theme }) => theme.breakpoints.down.md`
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
    grid-template-areas:
      "logo"
      "nav"
      "newsletter"
      "divider"
      "footer-bottom";
  `}
`;

export default Grid;
