import React from "react";
import StyledInputField from "./InputField.styled";
import InputContainer from "./InputContainer.styled";
import InputLabel from "./InputLabel.styled";
import InputFieldWrapper from "./InputFieldWrapper.styled";

const InputField = ({
  label,
  name,
  startIcon,
  gutterBottom,
  required,
  ...props
}) => {
  const inputField = (
    <StyledInputField name={name} required={required} {...props} />
  );

  return (
    <InputContainer gutterBottom={gutterBottom}>
      {label && (
        <InputLabel for={name}>{`${label}${required ? " *" : ""}`}</InputLabel>
      )}
      {startIcon
        ? React.cloneElement(<InputFieldWrapper />, { startIcon }, [inputField])
        : inputField}
    </InputContainer>
  );
};

export default InputField;
