import { type ReactNode } from "react";

export type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  buttonName: string;
  type?: ButtonType;
  isRed?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}
