import styled from "styled-components";
import { ReactComponent as XMarkIcon } from "assets/icons/xmark.svg";

const StyledXMarkIcon = styled(XMarkIcon)`
  position: relative;
  top: -10px;
  width: 12px;
  margin-left: auto;
  cursor: pointer;
  fill: ${({ theme }) => theme.palette.text.primary};
  fill-opacity: 0.6;

  &:hover {
    fill-opacity: 0.8;
    scale: 1.1;
  }
`;
export default StyledXMarkIcon;
