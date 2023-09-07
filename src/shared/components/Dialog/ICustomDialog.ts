import { Breakpoint } from "@mui/material";

export interface ICustomDialogModel {
  title?: string;
  subtitle?: string;
  children?: JSX.Element;
  onClose: () => void;
  maxWidth?: Breakpoint;
  show?: boolean;
}
