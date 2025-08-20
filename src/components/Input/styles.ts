import styled from "@emotion/styled";

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 470px;
`;

export const FormLabel = styled.label`
  display: inline-flex;
  align-items: center;
  height: 24px;
  font-size: 16px;
  font-weight: 400;
  color: rgba(111, 111, 111, 1);
`;

export const FormInput = styled.input`
  outline: none;
  border: 1px solid rgba(63, 63, 63, 1);
  border-radius: 4px;
  height: 50px;
  width: 100%;
  padding: 12px;

  &::placeholder {
    font-size: 16px;
    font-weight: 400px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: rgba(111, 111, 111, 1);
  }
`;
