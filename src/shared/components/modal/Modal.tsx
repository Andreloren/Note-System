import React, { useState } from "react";
import {
  Box,
  Button as ButtonModal,
  Typography,
  Modal,
  Grid,
  Input,
  TextField,
} from "@mui/material";
import { buttonStyledModal, ModalStyled } from "./ModalStyled";
import { Recado } from "../../../store/modules/usuarioLogado/usuarioLogadoSlice";
import { Button } from "../button/Button";
import { Heading } from "../heading/Heading";

export const ModalEdit: React.FC<Recado> = ({
  id,
  detalhamento,
  descricao,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <ButtonModal onClick={handleOpen}>Open modal</ButtonModal> */}
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyled}>
          <Heading
            texto="Editar Recado"
            tamanho="h6"
            sx={{ color: "#069dad", display: "flex", justifyContent: "center" }}
          />
          <TextField
            sx={{ margin: "5px 0" }}
            id="standard-basic"
            label="Descrição"
            variant="standard"
            defaultValue={descricao}
          ></TextField>
          <TextField
            sx={{ margin: "5px 0" }}
            id="standard-basic"
            label="Detalhamento"
            variant="standard"
            defaultValue={detalhamento}
          ></TextField>
          <Grid container sx={{ justifyContent: "center" }}>
            <Button
              texto="Salvar"
              tipoBotao="button"
              cor="success"
              tamanho="small"
              variacao="contained"
              myOnClick={() => {}}
              sx={buttonStyledModal}
            ></Button>
            <Button
              texto="Cancelar"
              tipoBotao="button"
              cor="error"
              tamanho="small"
              variacao="contained"
              myOnClick={handleClose}
              sx={buttonStyledModal}
            ></Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};
