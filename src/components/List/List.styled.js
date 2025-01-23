import styled, { css } from "styled-components";
import { mediaQueryMixin, spaceMixin } from "utils/mixins";
import ListItem from "components/ListItem/ListItem.styled";

const List = styled.ul.attrs((props) => ({
  direction: props.direction || "column",
}))`
  display: ${({ direction }) => (direction === "row" ? "flex" : "block")};

  ${({ theme, direction, dense }) =>
    direction === "column" &&
    css`
      & > ${ListItem}:not(:last-child) {
        margin-bottom: ${dense ? theme.spacing.sm : theme.spacing.md};
      }
    `}

  ${({ theme, direction, dense }) =>
    direction === "row" &&
    css`
      & > ${ListItem}:not(:last-child) {
        margin-right: ${dense ? theme.spacing.lg : theme.spacing.xl};
      }
    `}

    ${mediaQueryMixin}
    ${spaceMixin}
`;
export default List;
