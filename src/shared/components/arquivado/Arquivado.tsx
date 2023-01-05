import React, { useEffect, useState } from "react";

import { Box, Grid } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { Button } from "../button/Button";
import { Heading } from "../heading/Heading";
import {
  boxHeadingStyledNote,
  boxStyledNote,
  buttonStyledNote,
  gridNote,
  paperStyledNote,
} from "../recados/RecadosStyled";

import { useAppDispatch, useAppSelector } from "../../../store/modules/hooks";

import { Recados } from "../recados/RecadosMap";
import {
  adicionarRecadoAPI,
  adicionarTodosRecados,
  buscarRecados,
  deletarTodos,
} from "../../../store/modules/recados/recadosSlice";
import {
  atualizarRecadosUsuarioAPI,
  selecionarUsuariosPorCpf,
} from "../../../store/modules/usuarios/usuariosSlice";
import { status } from "../tipos/Tipos";

export const Arquivado: React.FC = () => {
  const [descricao, setDescricao] = useState("");
  const [descricaoValido, setDescricaoValido] = useState(false);

  const [detalhamento, setDetalhamento] = useState("");
  const [detalhamentoValido, setDetalhamentoValido] = useState(false);

  const navigate = useNavigate();

  const usuarioLogado = useAppSelector((estado) => estado.usuarioLogado);
  const usuarioPorCpf = useAppSelector((estado) =>
    selecionarUsuariosPorCpf(estado, usuarioLogado)
  );

  const dispatch = useAppDispatch();

  const recados = useAppSelector(buscarRecados);

  useEffect(() => {
    const navigateLogin = () => {
      navigate("/");
    };
    if (!usuarioLogado) {
      navigateLogin();
    }
  }, [usuarioLogado, navigate]);

  useEffect(() => {
    if (usuarioPorCpf?.recados) {
      dispatch(adicionarTodosRecados(usuarioPorCpf.recados));
    }
  }, [usuarioPorCpf?.recados, dispatch]);

  function handleCloseArchive(): void {
    throw new Error("Function not implemented.");
  }

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
        <Grid container md={12} xs={8}>
          <Heading
            texto={`Painel de recados de ${usuarioPorCpf?.nome}`}
            tamanho="h5"
            sx={boxHeadingStyledNote}
          />
        </Grid>
      </Box>
      <Grid container columns={16} sx={gridNote}>
        <Grid md={2} sm={3} xs={4}>
          <Button
            texto="Sair"
            tipoBotao="button"
            cor="error"
            tamanho="small"
            variacao="contained"
            myOnClick={handleCloseArchive}
            sx={buttonStyledNote}
          ></Button>
        </Grid>
      </Grid>

      <Grid container columns={16}>
        {recados.map(
          (card: {
            id: string;
            status: status;
            descricao: string;
            detalhamento: string;
          }) => (
            <Recados
              key={card.id}
              id={card.id}
              status={card.status}
              descricao={card.descricao}
              detalhamento={card.detalhamento}
            />
          )
        )}
      </Grid>
    </>
  );
};
