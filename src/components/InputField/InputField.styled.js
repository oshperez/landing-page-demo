import styled, { css } from "styled-components";
import { spaceMixin } from "utils/mixins";

const StyledInputField = styled.input`
  width: 100%;
  min-height: 2.75em;
  outline: 1.5px solid ${({ theme }) => theme.palette.text.disabled};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  padding-left: 2.75em;

  ${spaceMixin}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.primary.main};
  }

  ${({ disableOutline }) =>
    disableOutline &&
    css`
      outline: none;

      &:focus-visible {
        outline: none;
      }
    `}

  ${({ pill }) =>
    pill &&
    css`
      border-radius: 200px;
    `}

  ${(props) =>
    props.as === "textarea" &&
    css`
      padding: ${({ theme }) => theme.spacing.md};
    `}
`;

export default StyledInputField;
