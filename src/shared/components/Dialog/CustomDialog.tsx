import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import { HTMLAttributes } from "react";
import Draggable from "react-draggable";

import { ICustomDialogModel } from "@shared/components/Dialog/ICustomDialog.ts";

type Props = HTMLAttributes<HTMLDivElement> & ICustomDialogModel;

const PaperComponent = (props: PaperProps) => {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
};

const CustomDialog = ({ draggable, title, subtitle, children, onClose, maxWidth = "sm", show = false }: Props) => {
  return (
    <Dialog
      open={show}
      onClose={onClose}
      PaperComponent={draggable ? PaperComponent : undefined}
      aria-labelledby="draggable-dialog-title"
      maxWidth={maxWidth}
    >
      {title ? (
        <DialogTitle
          style={draggable ? { cursor: "move" } : { cursor: "auto" }}
          align="center"
          id="draggable-dialog-title"
          sx={{ textAlign: "left" }}
        >
          {title}
        </DialogTitle>
      ) : null}
      {subtitle ? (
        <DialogContent sx={{ minWidth: 300 }}>
          <DialogContentText align="center">{subtitle}</DialogContentText>
        </DialogContent>
      ) : null}
      {children}
    </Dialog>
  );
};

export default CustomDialog;
