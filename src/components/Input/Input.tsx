import { type InputProps } from "./types";
import { FormInputContainer, FormLabel, FormInput, ErrorText } from "./styles";

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  disabled = false,
  error = undefined,
  value,
  onChange,
}: InputProps) {
  return (
    <FormInputContainer>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <FormInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        $error={error}
        value={value}
        onChange={onChange}
      />
      {!!error && <ErrorText>{error}</ErrorText>}
    </FormInputContainer>
  );
}

export default Input;
