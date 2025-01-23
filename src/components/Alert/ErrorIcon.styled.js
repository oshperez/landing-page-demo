import styled from "styled-components";
import { alertIconMixin } from "utils/mixins";
import { ReactComponent as ErrorIcon } from "assets/icons/exclamation-circle.svg";

const StyledErrorIcon = styled(ErrorIcon)`
  ${alertIconMixin}
`;
export default StyledErrorIcon;
