import * as React from "react";
import { Box, Paper } from "@mui/material";

import { Heading } from "../shared/components/heading/Heading";
import { boxStyledLog as boxStyledCad } from "../shared/components/login/LoginStyled";
import {
  formBoxStyledCad,
  paperStyledCad,
} from "../shared/components/cadastro/CadastroStyled";
import InputSenha, { Input } from "../shared/components/inputs/Input";
import { Label } from "../shared/components/label/Label";
import { Button } from "../shared/components/button/Button";
import { buttonStyled } from "../shared/components/button/ButtonStyled";
import { Link } from "../shared/components/footer/Footer";
import { FooterStyled } from "../shared/components/footer/FooterStyled";

export const Cadastro: React.FC = () => {
  return (
    <Box sx={boxStyledCad}>
      <Paper elevation={3} sx={paperStyledCad}>
        <Heading
          texto="Cadastro de Usuário"
          tamanho="h4"
          sx={{ mx: 3, mt: 1 }}
        />
        <Box sx={formBoxStyledCad}>
          <Label htmlFor="nome" texto="Nome Completo"></Label>
          <Input
            size="small"
            placeholder="Nome"
            valor=""
            textoajuda=""
            cor="primary"
            tamanhoInput="40ch"
            identificador="outlined-size-small"
          />
          <Label htmlFor="cpf" texto="Digite seu CPF"></Label>
          <Input
            size="small"
            placeholder="CPF"
            valor=""
            textoajuda=""
            cor="primary"
            tamanhoInput="40ch"
            identificador="outlined-size-normal"
          />
          <Label htmlFor="email" texto="Digite seu E-mail"></Label>
          <Input
            size="small"
            placeholder="E-mail"
            valor=""
            textoajuda=""
            cor="primary"
            tamanhoInput="40ch"
            identificador="outlined-size-normal"
          />
          <Label htmlFor="senha" texto="Digite sua senha"></Label>
          <InputSenha
            sizeInput="small"
            sizeLabel="small"
            cor="primary"
            placeholder="Senha"
            tamanhoInput="40ch"
            identificador="outlined-adornment-password"
          />
          <Label htmlFor="repSenha" texto="Confirme sua senha"></Label>
          <InputSenha
            sizeInput="small"
            sizeLabel="small"
            cor="primary"
            placeholder="Confirmação de Senha"
            tamanhoInput="40ch"
            identificador="outlined-adornment-password"
          />
          <Button
            sx={buttonStyled}
            texto="Cadastrar Usuário"
            tipoBotao="submit"
            cor="primary"
            tamanho="medium"
            variacao="contained"
          ></Button>
          <Link
            sx={FooterStyled}
            link="/"
            texto="Já possui cadastro? Voltar a página de Login!"
            estilo="hover"
          />
        </Box>
      </Paper>
    </Box>
  );
};
