import styled from "styled-components";
import Typography from "components/Typography/Typography.styled";

const Heading = styled(Typography)`
  ${({ theme }) => theme.breakpoints.up.md`
    word-spacing: 999rem;
    line-height: 2;
    position: relative;
    top: -0.65em;
  `}

  ${({ theme }) => theme.breakpoints.down.md`
    margin-top: ${theme.spacing.md};
    text-align: center;

  `}
`;

export default Heading;
