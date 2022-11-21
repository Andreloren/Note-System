import { Box, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import {
  limparUsuarioLogado,
  Recado,
} from "../../store/modules/usuarioLogado/usuarioLogadoSlice";

import { v4 as uuidv4 } from "uuid";
import { Recados } from "../../shared/components/recados/RecadosMap";
import {
  adicionarItem,
  selectAll,
} from "../../store/modules/recados/recadosSlice";

export const Home: React.FC = () => {
  const [descricao, setDescricao] = useState("");
  const [descricaoValido, setDescricaoValido] = useState(false);

  const [detalhamento, setDetalhamento] = useState("");
  const [detalhamentoValido, setDetalhamentoValido] = useState(false);

  const [recadosLocais, setRecadosLocais] = useState<Recado[]>([]);

  const navigate = useNavigate();

  const usuarioLogado = useAppSelector((estado) => estado.usuarioLogado);
  const dispatch = useAppDispatch();

  const recados = useAppSelector(selectAll);

  useEffect(() => {
    const navigateLogin = () => {
      navigate("/");
    };
    if (usuarioLogado.email === "") {
      navigateLogin();
    }
  }, [usuarioLogado, navigate]);

  useEffect(() => {
    const recadosUsuarios = recados.filter(
      (recado) => recado.userEmail === usuarioLogado.email
    );
    setRecadosLocais(recadosUsuarios);
  }, [recados, usuarioLogado, Recados]);

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
    const novoRecado: Recado = {
      id: uuidv4(),
      detalhamento: detalhamento,
      descricao: descricao,
      userEmail: usuarioLogado.email,
    };

    if (!descricao || !detalhamento) {
      alert("Necessário digitar alguma informação");
      return;
    }

    dispatch(adicionarItem(novoRecado));
    limparCamposRecado();
  };

  const handleLogout = () => {
    dispatch(limparUsuarioLogado());
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
        <Heading
          texto={`Painel de recados de ${usuarioLogado.nome}`}
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
              erro={!detalhamentoValido}
              comprimentoTotal={true}
              meuOnChange={handleChangeRecados}
              sizeInput="small"
              valor={detalhamento}
            />
          </Paper>
        </Grid>
        <Grid md={5} sm={7} xs={12} sx={{ mx: 1 }}>
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

      <Grid container columns={16}>
        {recadosLocais.map((card) => (
          <Recados
            id={card.id}
            descricao={card.descricao}
            detalhamento={card.detalhamento}
          />
        ))}
      </Grid>
    </>
  );
};
