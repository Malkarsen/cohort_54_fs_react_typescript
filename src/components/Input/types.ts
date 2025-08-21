import { type ChangeEvent } from "react";

export type ErrorType = undefined | string;

export interface InputProps {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  disabled?: boolean;
  error?: ErrorType;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
