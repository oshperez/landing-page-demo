import styled from "styled-components";

const StyledBarIcon = styled.div`
  position: relative;
  font-size: ${({ theme }) => theme.typography.fontSize200};
  width: 2.25em;
  height: 2.25em;
  margin-left: ${({ theme }) => theme.spacing.lg};
  cursor: pointer;
  transition: all 0.2s ease 0s;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 150%;
    width: 150%;
    top: -25%;
    left: -25%;
  }

  ${({ theme }) => theme.breakpoints.up.lg`
    display: none;
`}
`;

export default StyledBarIcon;
