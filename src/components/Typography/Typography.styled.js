import styled from "styled-components";
import { spaceMixin, fontMixin, mediaQueryMixin } from "utils/mixins";

const Typography = styled.p`
  ${spaceMixin}
  ${fontMixin}
  ${mediaQueryMixin}
`;

export default Typography;
