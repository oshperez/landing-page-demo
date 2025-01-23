import styled from "styled-components";

const InputFieldWrapper = styled.div`
  position: relative;
  width: 100%;

  &::before {
    content: url(${(props) => props.startIcon});
    position: absolute;
    display: block;
    top: 50%;
    left: 15px;
    width: 17px;
    height: 17px;
    transform: translateY(-50%);
  }
`;

export default InputFieldWrapper;
