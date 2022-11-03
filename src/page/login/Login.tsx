import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Paper } from "@mui/material";
import DoorBackOutlinedIcon from "@mui/icons-material/DoorBackOutlined";

import { Logo } from "../../shared/components/logo/Logo";
import { Heading } from "../../shared/components/heading/Heading";
import {
  boxStyledLog,
  paperStyledLog,
  formBoxStyledLog,
} from "../../shared/components/login/LoginStyled";
import { InputSenha, Input } from "../../shared/components/inputs/Input";
import { Label } from "../../shared/components/label/Label";
import { Button } from "../../shared/components/button/Button";
import { buttonStyled } from "../../shared/components/button/ButtonStyled";
import { Link } from "../../shared/components/footer/Footer";
import { FooterStyled } from "../../shared/components/footer/FooterStyled";
import { label } from "../../shared/components/tipos/Tipos";

export interface UserLog {
  cpf: string;
  senha: string;
}

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [usuarios, setUsuarios] = useState<UserLog[]>(
    JSON.parse(localStorage.getItem("usuarios") ?? "[]")
  );
  const [usuarioLogado, setUsuarioLogado] = useState<UserLog | null>(null);

  const handleChange = (value: string, key: label) => {
    switch (key) {
      case "CPF":
        setCpf(value);
        break;

      case "Senha":
        setSenha(value);
        break;

      default:
        break;
    }
  };

  return (
    <Box sx={boxStyledLog}>
      <Paper elevation={3} sx={paperStyledLog}>
        <Logo />
        <Heading texto="Note System" tamanho="h4" sx={{ mx: 3, mt: 1 }} />
        <Heading
          texto="Faça login e comece a usar!"
          tamanho="h6"
          sx={{ mx: 3, mt: 1 }}
        />
        <Box sx={formBoxStyledLog}>
          <Label htmlFor="cpf" texto="Digite seu CPF"></Label>
          <Input
            obrigatorio={true}
            error={false}
            valor={cpf}
            tipo="text"
            meuOnChange={handleChange}
            alturaInput="medium"
            placeholder="CPF"
            textoAjuda=""
            cor="primary"
            comprimentoInput="40ch"
            identificador="outlined-size-normal"
            digitacaoMaxima={{ maxLength: 11 }}
          />
          <Label htmlFor="senha" texto="Digite sua senha"></Label>
          <InputSenha
            obrigatorio={true}
            error={false}
            valor={senha}
            meuOnChange={handleChange}
            cor="primary"
            placeholder="Senha"
            comprimentoInput="40ch"
            identificador="outlined-adornment-password"
            digitacaoMaxima={{ maxLength: 10 }}
          />
          <Button
            iconButton={<DoorBackOutlinedIcon />}
            sx={buttonStyled}
            texto="Entrar na Plataforma"
            tipoBotao="button"
            cor="primary"
            tamanho="medium"
            variacao="contained"
            myOnClick={() => {
              console.log("clicou");
            }}
          ></Button>
          <Link
            sx={FooterStyled}
            link="/cadastro"
            texto="Não possui conta? Crie uma agora!"
            estilo="hover"
          />
        </Box>
      </Paper>
    </Box>
  );
};
