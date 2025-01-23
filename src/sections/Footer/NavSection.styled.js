import styled from "styled-components";

const NavSection = styled.div`
  ${({ theme }) => theme.breakpoints.down.sm`
    text-align: center;
  `}
`;

export default NavSection;
