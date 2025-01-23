import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  margin-top: ${({ theme }) => theme.spacing.xxl};
  grid-gap: 1.5rem;
`;

export default Grid;
