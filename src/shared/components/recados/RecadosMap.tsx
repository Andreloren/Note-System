import React from "react";

import { Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import { useAppDispatch } from "../../../store/modules/hooks";

import { Recado } from "../../../store/modules/usuarioLogado/usuarioLogadoSlice";
import { Button } from "../button/Button";
import { ButtonStyledOneNote, gridNotes, paperNotes } from "./RecadosStyled";

export const Recados: React.FC<Recado> = ({ id, detalhamento, descricao }) => {
  const dispatch = useAppDispatch();

  // const handleRemoveRecado = () => {
  //   dispatch(removerRecados);
  // };

  return (
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
              myOnClick={() => {}}
              sx={ButtonStyledOneNote}
            ></Button>
            <Button
              texto="Excluir"
              tipoBotao="button"
              cor="error"
              tamanho="small"
              variacao="outlined"
              myOnClick={() => {}}
              sx={ButtonStyledOneNote}
            ></Button>
          </Grid>
        </Card>
      </Paper>
    </Grid>
  );
};
