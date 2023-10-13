import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { HTMLAttributes, useRef } from "react";

import { CustomModalModel } from "@shared/components/modal/CustomModalModel.ts";

type Props = HTMLAttributes<HTMLDivElement> & CustomModalModel;

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

const CustomModal = ({ title, children, onClose, show = false }: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  return (
    <Modal
      ref={modalRef}
      open={show}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {title ? (
          <Typography align="center" id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
        ) : null}
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
