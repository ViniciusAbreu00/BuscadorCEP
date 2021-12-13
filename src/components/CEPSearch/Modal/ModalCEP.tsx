import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { style } from "./Modal.style";

interface ModalCepProps {
    handleClose : Function
    open : boolean
    cepData : any
}

export default function ModalCEP({handleClose, open, cepData} : ModalCepProps) {
  

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => handleClose()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Endereço 
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Logradouro: {cepData?.logradouro}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Cidade: {cepData?.localidade}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Bairro: {cepData?.bairro}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              DDD: {cepData?.ddd}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
