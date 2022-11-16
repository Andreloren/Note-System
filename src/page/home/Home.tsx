import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Button } from "../../shared/components/button/Button";
import { Heading } from "../../shared/components/heading/Heading";
import { InputNote } from "../../shared/components/recados/RecadosInput";
import {
  boxHeadingStyledNote,
  boxStyledNote,
  buttonStyledNote,
  ButtonStyledOneNote,
  gridNote,
  gridNotes,
  paperNotes,
  paperStyledNote,
} from "../../shared/components/recados/RecadosStyled";
// import { v4 as uuidv4 } from "uuid";

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
              erro={true}
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

      <Grid container columns={16}>
        <Grid sx={gridNotes} lg={4} md={5} sm={6} xs={14}>
          <Paper elevation={3} sx={paperNotes}>
            <Card>
              <CardContent>
                <Typography variant="h5" align="center">
                  NOTE
                </Typography>
                <Typography sx={{ my: 2 }} variant="body1" align="center">
                  Detalhamento
                </Typography>
                <Typography variant="body2" align="center">
                  Descrição
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
      </Grid>
    </>
  );
};
