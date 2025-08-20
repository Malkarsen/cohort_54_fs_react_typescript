import { type ButtonProps } from "./types";
import { ButtonComponent } from "./styles.ts";

export default function Button({
  buttonName = "Send",
  type = "button",
  isRed = false,
  disabled = false,
  onClick = () => {},
  children
}: ButtonProps) {
  return (
    <ButtonComponent
      type={type}
      $isRed={isRed}
      disabled={disabled}
      onClick={onClick}
    >
      {/* {children ? "" : buttonName} */}

      {/* Условный рендеринг */}
      {!children && buttonName}
      {children}
    </ButtonComponent>
  );
}

// export default Button;
