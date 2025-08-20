import styled from "@emotion/styled";

interface ButtonComponentProps {
  $isRed: boolean;
}
const generateButtonColor = (
  isRed: boolean,
  disabled: boolean | undefined
): string => {
  if (disabled) {
    return "rgba(172, 172, 172, 1)";
  } else {
    if (isRed) {
      return "rgba(252, 51, 51, 1)";
    } else {
      return "rgba(31, 39, 245, 1)";
    }
  }
};

const generateButtonColorOnHover = (
  isRed: boolean,
  disabled: boolean | undefined
): string => {
  if (disabled) {
    return "rgba(172, 172, 172, 1)";
  } else {
    if (isRed) {
      return "rgba(243, 85, 85, 1)";
    } else {
      return "rgba(65, 71, 252, 1)";
    }
  }
};

export const ButtonComponent = styled.button<ButtonComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 0;
  height: 70px;
  width: 100%;
  background-color: ${({ $isRed, disabled }) =>
    generateButtonColor($isRed, disabled)};
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ $isRed, disabled }) =>
      generateButtonColorOnHover($isRed, disabled)};
  }
`;
