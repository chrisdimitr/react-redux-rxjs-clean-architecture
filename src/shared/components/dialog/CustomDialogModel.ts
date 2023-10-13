import { Breakpoint } from "@mui/material";

export interface CustomDialogModel {
  title?: string;
  subtitle?: string;
  children?: JSX.Element;
  onClose: () => void;
  maxWidth?: Breakpoint;
  show?: boolean;
}
