import "./styles.css";
import { type ButtonProps } from "./types";

export default function Button({
  buttonName = "Send",
  type = "button",
  onClick = () => {},
  children,
}: ButtonProps) {
  return (
    <button className="button_component" type={type} onClick={onClick}>
      {/* {children ? "" : buttonName} */}

      {/* Условный рендеринг */}
      {!children && buttonName}
      {children}
    </button>
  );
}

// export default Button;
