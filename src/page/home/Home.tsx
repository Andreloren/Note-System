import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Box, Grid, IconButton, Paper } from "@mui/material";
import UnarchiveIcon from "@mui/icons-material/Unarchive";

import { Button } from "../../shared/components/button/Button";
import { Heading } from "../../shared/components/heading/Heading";
import { InputNote } from "../../shared/components/recados/RecadosInput";
import {
  boxHeadingStyledNote,
  boxStyledNote,
  buttonStyledArchive,
  buttonStyledNote,
  gridNote,
  paperStyledNote,
} from "../../shared/components/recados/RecadosStyled";
import { Recados } from "../../shared/components/recados/RecadosMap";
import { status } from "../../shared/components/tipos/Tipos";

import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import { limparUsuarioLogado } from "../../store/modules/usuarioLogado/usuarioLogadoSlice";
import {
  adicionarRecadoAPI,
  adicionarTodosRecados,
  buscarRecados,
  buscarRecadosUsuarioAPI,
  deletarTodos,
} from "../../store/modules/recados/recadosSlice";
import {
  atualizarRecadosUsuarioAPI,
  selecionarUsuariosPorCpf,
} from "../../store/modules/usuarios/usuariosSlice";

export const Home: React.FC = () => {
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

  useEffect(() => {
    dispatch(buscarRecadosUsuarioAPI(usuarioLogado));
  }, [recados, dispatch]);

  useEffect(() => {
    if (!descricao) {
      setDescricaoValido(false);
    } else {
      setDescricaoValido(true);
    }
    if (!detalhamento) {
      setDetalhamentoValido(false);
    } else {
      setDetalhamentoValido(true);
    }
  }, [descricao, detalhamento]);

  const handleChangeRecados = (value: string, key: React.ReactNode) => {
    switch (key) {
      case "Detalhamento":
        setDetalhamento(value);
        break;

      case "Descrição":
        setDescricao(value);
        break;

      default:
        break;
    }
  };

  const limparCamposRecado = () => {
    setDescricao("");
    setDetalhamento("");
  };

  const handleCadastrarRecados = () => {
    if (!descricao || !detalhamento) {
      alert("Necessário digitar alguma informação");
      return;
    }

    dispatch(
      adicionarRecadoAPI({
        cpf: usuarioLogado,
        recado: {
          descricao,
          detalhamento,
        },
      })
    );
    limparCamposRecado();
  };

  const handleLogout = () => {
    dispatch(
      atualizarRecadosUsuarioAPI({ cpf: usuarioLogado, recados: recados })
    );

    dispatch(limparUsuarioLogado());
    dispatch(deletarTodos());
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
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
        <Grid md={5} sm={7} xs={12} sx={{ mr: 1 }}>
          <Paper elevation={1} sx={paperStyledNote}>
            <InputNote
              identificacao="standard-helperText"
              placeholder="Detalhamento"
              variante="standard"
              erro={!detalhamentoValido}
              comprimentoTotal={true}
              meuOnChange={handleChangeRecados}
              sizeInput="small"
              valor={detalhamento}
            />
          </Paper>
        </Grid>
        <Grid md={5} sm={7} xs={12} sx={{ mr: 1 }}>
          <Paper elevation={1} sx={paperStyledNote}>
            <InputNote
              identificacao="standard-helperText"
              placeholder="Descrição"
              variante="standard"
              erro={!descricaoValido}
              comprimentoTotal={true}
              meuOnChange={handleChangeRecados}
              sizeInput="small"
              valor={descricao}
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
            myOnClick={handleCadastrarRecados}
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
            myOnClick={handleLogout}
            sx={buttonStyledNote}
          ></Button>
        </Grid>
      </Grid>
      <IconButton color="info" aria-label="archive" sx={buttonStyledArchive}>
        <UnarchiveIcon fontSize="large" />
      </IconButton>

      <Grid container columns={16}>
        {recados
          .filter((f) => f.status === "ativo")
          .map(
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
