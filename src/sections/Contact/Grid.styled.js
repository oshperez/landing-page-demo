import styled from "styled-components";
import carImg from "assets/images/car2.jpg";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 100px 1fr;
  grid-template-areas: "picture overlap card";
  width: 100%;

  & > div:first-child {
    grid-column-start: picture-start;
    grid-column-end: overlap-end;
    grid-row-start: 1;
    grid-row-end: 2;
    background-image: url(${carImg});
    background-size: cover;
    background-position: 50% 70%;
    z-index: 1;

    @media (max-width: 600px) {
      grid-row-end: overlap-end;
      background-position: 50% 80%;
    }
  }

  & > div:last-child {
    display: grid;
    align-items: center;
    grid-area: 1 / overlap-start / 2 / card-end;
    z-index: 2;

    @media (max-width: 600px) {
      grid-area: overlap-start / 1 / card-end / 2;
    }

    ${({ theme }) => theme.breakpoints.down.sm`
    grid-area: card-start / 1 / card-end / 2;
  
  `}
  }

  ${({ theme }) => theme.breakpoints.down.md`
  grid-template-columns: 1fr 80px 1fr;
  
  `}

  @media (max-width: 600px) {
    grid-template-rows: 0.8fr 80px 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: "picture" "overlap" "card";
  }

  ${({ theme }) => theme.breakpoints.down.sm`
  grid-template-rows: 300px 80px 1fr;
  `}
`;

export default Grid;
