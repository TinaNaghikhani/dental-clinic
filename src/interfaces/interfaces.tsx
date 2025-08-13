import { ReactNode } from "react";

export interface InputInterface{
  type: string;
  placeholder: string;
  className: string;
  value?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  error?: any;
  label: string;
  required?: true
}
export interface ButtonInterface {
  type: "submit" | "button" | undefined;
  onClick?: () => Promise<void> |any;
  className: string;
  label:ReactNode
  disable: boolean;
}