import * as React from "react";
import { Box, Paper } from "@mui/material";
import { Logo } from "../shared/components/logo/Logo";
import { Heading } from "../shared/components/heading/Heading";
import {
  boxStyledLog,
  paperStyledLog,
  formBoxStyledLog,
} from "../shared/components/login/LoginStyled";
import InputSenha, { Input } from "../shared/components/inputs/Input";
import { Label } from "../shared/components/label/Label";
import { Button } from "../shared/components/button/Button";
import { buttonStyled } from "../shared/components/button/ButtonStyled";
import { Link } from "../shared/components/footer/Footer";
import { FooterStyled } from "../shared/components/footer/FooterStyled";

export const Login: React.FC = () => {
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
            size="medium"
            placeholder="CPF"
            valor=""
            textoajuda=""
            cor="primary"
            tamanhoInput="40ch"
            identificador="outlined-size-normal"
          />
          <Label htmlFor="senha" texto="Digite sua senha"></Label>
          <InputSenha
            cor="primary"
            placeholder="Senha"
            tamanhoInput="40ch"
            identificador="outlined-adornment-password"
          />
          <Button
            sx={buttonStyled}
            texto="Entrar na Plataforma"
            tipoBotao="button"
            cor="primary"
            tamanho="medium"
            variacao="contained"
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
