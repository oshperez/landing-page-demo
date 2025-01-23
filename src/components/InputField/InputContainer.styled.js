import styled, { css } from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  ${(props) =>
    props.gutterBottom &&
    css`
      margin-bottom: ${({ theme }) => theme.spacing.lg};
    `}
`;

export default InputContainer;
