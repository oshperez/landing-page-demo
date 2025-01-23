import styled, { css } from "styled-components";

const Bars = styled.div`
  top: 50%;
  margin-top: -0.125em;
  &,
  &::after,
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 0.25em;
    background-color: ${({ theme }) => theme.palette.text.primary};
    border-radius: 500px;
    transition: top 0.2s 0.2s, left 0.1s 0.2s, transform 0.2s,
      background-color 0.4s 0.2s;
    transform: rotate(0deg);
  }

  &::before,
  &::after {
    width: 1.5em;
  }

  &::after {
    left: 0;
    top: -0.75em;
  }
  &::before {
    left: 0.75em;
    top: 0.75em;
  }

  ${({ open }) =>
    open &&
    css`
      &,
      &::before,
      &::after {
        transition: background-color 0.2s, top 0.2s, left 0.2s,
          transform 0.2s 0.15s;
      }

      & {
        background-color: transparent;
      }

      &::before,
      &::after {
        top: 0;
        left: 0.35em;
      }

      &::before {
        transform: rotate(-45deg);
      }

      &::after {
        transform: rotate(45deg);
      }
    `}
`;

export default Bars;
