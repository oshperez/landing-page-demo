import styled from "styled-components";
import { alertIconMixin } from "utils/mixins";
import { ReactComponent as CheckIcon } from "assets/icons/check.svg";

const StyledSuccessIcon = styled(CheckIcon)`
  ${alertIconMixin}
`;

export default StyledSuccessIcon;
