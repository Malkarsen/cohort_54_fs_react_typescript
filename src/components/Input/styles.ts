import styled from "@emotion/styled";
import { type ErrorType } from "./types";

interface FormInputProps {
  $error: ErrorType;
}

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
  border: 1px solid
    ${({ $error }) =>
      $error === "Some error" ? "rgba(232, 23, 23, 1)" : "rgba(63, 63, 63, 1)"};
  border-radius: 4px;
  height: 50px;
  width: 100%;
  padding: 12px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};

  &::placeholder {
    font-size: 16px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: ${({$error}) => ($error === "Some error" ? "rgba(232, 23, 23, 1)" : "rgba(111, 111, 111, 1)")}
  }
`;
