import { Box, Grid, Paper, TextField } from "@mui/material";
import React from "react";
import { Button } from "../../shared/components/button/Button";
import { Heading } from "../../shared/components/heading/Heading";
import { InputNote } from "../../shared/components/recados/RecadosInput";
import {
  boxHeadingStyledNote,
  boxStyledNote,
  buttonStyledNote,
  gridNote,
  paperStyledNote,
} from "../../shared/components/recados/RecadosStyled";

export const Home: React.FC = () => {
  return (
    <>
      <Box sx={boxStyledNote}>
        <Heading
          texto="PÁGINA DE RECADOS"
          tamanho="h4"
          sx={{ mb: 2, color: "#069dad" }}
        />
      </Box>
      <Box>
        <Heading
          texto={`Painel de recados de ${"André"}`}
          tamanho="h5"
          sx={boxHeadingStyledNote}
        />
      </Box>
      <Grid container columns={16} sx={gridNote}>
        <Grid md={5} sm={7} xs={12} sx={{ mr: 1 }}>
          <Paper elevation={1} sx={paperStyledNote}>
            <InputNote
              identificacao="standard-helperText"
              placeholder="Detalhamento"
              variante="standard"
              erro={false}
              comprimentoTotal={true}
              meuOnChange={() => {}}
              sizeInput="small"
            />
          </Paper>
        </Grid>
        <Grid md={5} sm={7} xs={12} sx={{ mx: 1 }}>
          <Paper elevation={1} sx={paperStyledNote}>
            <InputNote
              identificacao="standard-helperText"
              placeholder="Descrição"
              variante="standard"
              erro={true}
              comprimentoTotal={true}
              meuOnChange={() => {}}
              sizeInput="small"
            />
          </Paper>
        </Grid>
        <Grid md={2} sm={3} xs={4}>
          <Button
            texto="Salvar"
            tipoBotao="button"
            cor="success"
            tamanho="small"
            variacao="contained"
            myOnClick={() => {}}
            sx={buttonStyledNote}
          ></Button>
        </Grid>
        <Grid md={2} sm={3} xs={4}>
          <Button
            texto="Sair"
            tipoBotao="button"
            cor="error"
            tamanho="small"
            variacao="contained"
            myOnClick={() => {}}
            sx={buttonStyledNote}
          ></Button>
        </Grid>
      </Grid>
    </>
  );
};
