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
import {
  buttonStyledModal,
  buttonStyledModalExclude,
  ModalStyled,
} from "../modal/ModalStyled";

export const Recados: React.FC<Recado> = ({ id, detalhamento, descricao }) => {
  const [novoDetalhamento, setnovoDetalhamento] = useState(detalhamento);
  const [novaDescricao, setnovaDescricao] = useState(descricao);

  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const [openExclude, setOpenExclude] = useState(false);
  const handleOpenExclude = () => setOpenExclude(true);
  const handleCloseExclude = () => setOpenExclude(false);

  const dispatch = useAppDispatch();

  const handleUpdateRecado = () => {
    dispatch(
      atualizarItem({
        id: id,
        changes: {
          detalhamento: novoDetalhamento,
          descricao: novaDescricao,
        },
      })
    );

    handleCloseEdit();
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
                {`Recado(s)`}
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
                myOnClick={handleOpenEdit}
                sx={ButtonStyledOneNote}
              ></Button>
              <Button
                texto="Excluir"
                tipoBotao="button"
                cor="error"
                tamanho="small"
                variacao="outlined"
                myOnClick={handleOpenExclude}
                sx={ButtonStyledOneNote}
              ></Button>
            </Grid>
          </Card>
        </Paper>
      </Grid>

      <Modal
        open={openEdit}
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
            label="Detalhamento"
            variant="standard"
            defaultValue={detalhamento}
            onChange={(e) => setnovoDetalhamento(e.target.value)}
          ></TextField>
          <TextField
            sx={{ margin: "5px 0" }}
            id="standard-basic"
            label="Descrição"
            variant="standard"
            defaultValue={descricao}
            onChange={(e) => setnovaDescricao(e.target.value)}
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
              myOnClick={handleCloseEdit}
              sx={buttonStyledModal}
            ></Button>
          </Grid>
        </Box>
      </Modal>

      <Modal
        open={openExclude}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyled}>
          <Heading
            texto="Deseja realmente excluir o Recado?"
            tamanho="h6"
            sx={{ color: "#069dad", display: "flex", justifyContent: "center" }}
          />

          <Grid container sx={{ justifyContent: "center" }}>
            <Button
              texto="Confirmar"
              tipoBotao="button"
              cor="success"
              tamanho="small"
              variacao="contained"
              myOnClick={handleRemoveRecado}
              sx={buttonStyledModalExclude}
            ></Button>
            <Button
              texto="Cancelar"
              tipoBotao="button"
              cor="error"
              tamanho="small"
              variacao="contained"
              myOnClick={handleCloseExclude}
              sx={buttonStyledModalExclude}
            ></Button>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};
