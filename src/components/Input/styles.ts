import styled from "@emotion/styled";
import { type ErrorType } from "./types";

interface FormInputProps {
  $error?: ErrorType;
}

const generateInputColor = (error: ErrorType, disabled: boolean | undefined) => {
  if (disabled) {
    return "rgba(63, 63, 63, 1)";
  } else if (!!error) {
    return "rgba(232, 23, 23, 1)";
  } else {
    return "rgba(63, 63, 63, 1)";
  }
};

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FormLabel = styled.label`
  font-size: 16px;
  color: rgba(111, 111, 111, 1);
`;

export const FormInput = styled.input<FormInputProps>`
  outline: none;
  border: 1px solid ${({$error, disabled}) => generateInputColor($error, disabled)};
  border-radius: 4px;
  height: 50px;
  width: 100%;
  padding: 12px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};

  &::placeholder {
    font-size: 16px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: ${({$error, disabled}) => generateInputColor($error, disabled)};
  }
`;
export const ErrorText = styled.div`
  height: 18px;
  font-size: 16px;
  color: rgba(232, 23, 23, 1);
`;
