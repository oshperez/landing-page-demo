import styled from "styled-components";

const Link = styled.a`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

export default Link;
