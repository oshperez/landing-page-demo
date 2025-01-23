import styled, { css } from "styled-components";
import { mediaQueryMixin, spaceMixin } from "utils/mixins";

const FlexContainer = styled.div`
  display: flex;
  ${spaceMixin}
  ${mediaQueryMixin}

  ${({ flexDirection }) =>
    flexDirection &&
    css`
      flex-direction: ${flexDirection};
    `}

  ${({ flexWrap }) =>
    flexWrap &&
    css`
      flex-wrap: ${flexWrap};
    `}

  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}

  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
    
  ${({ alignContent }) =>
    alignContent &&
    css`
      align-items: ${alignContent};
    `}
  
  ${({ dropShadow, theme }) =>
    dropShadow &&
    css`
      filter: drop-shadow(${theme.shadow.dropShadow[0]});
    `}
`;

export default FlexContainer;
