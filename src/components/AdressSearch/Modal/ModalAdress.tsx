import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { styleAdress } from "./ModalAdress.style";
import { LinearProgress } from "@mui/material";

interface ModalCepProps {
  handleClose: Function;
  open: boolean;
  cep: any;
  loadingCep: boolean;
}

export default function ModalAdress({
  handleClose,
  open,
  cep,
  loadingCep,
}: ModalCepProps) {
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
          <Box sx={styleAdress}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Busca Por Endereço
            </Typography>
            {loadingCep ? (
              <LinearProgress />
            ) : (
              <>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h4"
                >
                  CEP: {cep?.cep}
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  Logradouro: {cep?.logradouro}
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  Cidade: {cep?.localidade}
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  Bairro: {cep?.bairro}
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  DDD: {cep?.ddd}
                </Typography>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
