import React, { useState } from "react";

import { Box, Modal, TextField } from "@mui/material";
import { Heading } from "../heading/Heading";

import { Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import { useAppDispatch } from "../../../store/modules/hooks";

import { Recado } from "../../../store/modules/usuarioLogado/usuarioLogadoSlice";
import { Button } from "../button/Button";
import { ButtonStyledOneNote, gridNotes, paperNotes } from "./RecadosStyled";
import {
  atualizarItem,
  removerItem,
} from "../../../store/modules/recados/recadosSlice";
import { ModalEdit } from "../modal/Modal";
import { buttonStyledModal, ModalStyled } from "../modal/ModalStyled";

export const Recados: React.FC<Recado> = ({ id, detalhamento, descricao }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useAppDispatch();

  const handleUpdateRecado = () => {
    dispatch(
      atualizarItem({
        id: id,
        changes: { detalhamento: detalhamento, descricao: descricao },
      })
    );
  };

  const handleRemoveRecado = () => {
    dispatch(removerItem(id));
  };

  return (
    <>
      <Grid sx={gridNotes} lg={3} md={5} sm={6} xs={14}>
        <Paper elevation={3} sx={paperNotes}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center">
                NOTE
              </Typography>

              <Typography sx={{ my: 2 }} variant="body1" align="center">
                {detalhamento}
              </Typography>
              <Typography variant="body2" align="center">
                {descricao}
              </Typography>
            </CardContent>
            <Grid container sx={{ justifyContent: "center" }}>
              <Button
                texto="Editar"
                tipoBotao="button"
                cor="warning"
                tamanho="small"
                variacao="outlined"
                myOnClick={handleOpen}
                sx={ButtonStyledOneNote}
              ></Button>
              <Button
                texto="Excluir"
                tipoBotao="button"
                cor="error"
                tamanho="small"
                variacao="outlined"
                myOnClick={handleRemoveRecado}
                sx={ButtonStyledOneNote}
              ></Button>
              <ModalEdit
                id={id}
                descricao={detalhamento}
                detalhamento={descricao}
              />
            </Grid>
          </Card>
        </Paper>
      </Grid>

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
              myOnClick={handleUpdateRecado}
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
    </>
  );
};
