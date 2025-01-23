import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 10%) 1fr minmax(460px, 1fr);
  grid-template-rows: 2fr 1fr;
  grid-template-areas:
    "heading small-image large-image"
    "text text large-image";
  padding-block: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => theme.breakpoints.down.xl`
    grid-template-rows: repeat(2, auto);
    grid-template-columns: minmax(220px, 10%) 1fr;
    grid-template-areas: 
      "heading small-image"
      "text text";
    padding-bottom: 0;
    `}

  ${({ theme }) => theme.breakpoints.down.md`
  grid-template-columns: 1fr;
  grid-template-row: repeat(3, auto);
  grid-template-areas:
    "small-image"
    "heading"
    "text";
  `}
`;

export default Grid;
