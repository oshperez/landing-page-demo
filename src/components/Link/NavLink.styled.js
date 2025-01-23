import styled, { css } from "styled-components";
import Link from "./Link.styled";

const NavLink = styled(Link)`
  position: relative;
  padding-inline: 0.25rem;

  ${({ active }) =>
    active &&
    css`
      font-weight: ${({ theme }) => theme.typography.fontWeightBold};

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 35%;
        bottom: 9%;
        left: 0;
        background-color: ${({ theme }) => theme.palette.primary.main};
        z-index: -1;
      }
    `}
`;

export default NavLink;
