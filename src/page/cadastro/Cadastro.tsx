import * as React from "react";
import { Box, Paper } from "@mui/material";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Heading } from "../../shared/components/heading/Heading";
import { boxStyledLog as boxStyledCad } from "../../shared/components/login/LoginStyled";
import {
  formBoxStyledCad,
  paperStyledCad,
} from "../../shared/components/cadastro/CadastroStyled";
import InputSenha, { Input } from "../../shared/components/inputs/Input";
import { Label } from "../../shared/components/label/Label";
import { Button } from "../../shared/components/button/Button";
import { buttonStyled } from "../../shared/components/button/ButtonStyled";
import { Link } from "../../shared/components/footer/Footer";
import { FooterStyled } from "../../shared/components/footer/FooterStyled";
import { UserLog } from "../login/Login";

export interface Users extends UserLog {
  nome: string;
  email: string;
  recados: [];
}

export const Cadastro: React.FC = () => {
  const [nome, setNome] = useState("");
  const [nomeValido, setNomeValido] = useState(false);

  const [cpf, setCpf] = useState("");
  const [cpfValido, setcpfValido] = useState(false);

  const [email, setEmail] = useState("");
  const [emailValido, setEmailValido] = useState(false);

  const [senha, setSenha] = useState("");
  const [repsenha, setRepsenha] = useState("");
  const [senhaValido, setSenhaValido] = useState(false);

  const [dados, setDados] = useState<Users[]>(
    JSON.parse(localStorage.getItem("Users") ?? "[]")
  );
  const navigate = useNavigate();

  // const handleChange = (value: string, key: placeholder) => {
  //   switch (key) {
  //   }
  // };

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
            obrigatorio={true}
            error={false}
            size="small"
            placeholder="Nome"
            valor={nome}
            textoAjuda=""
            cor="primary"
            tipo="text"
            tamanhoInput="40ch"
            identificador="outlined-size-small"
            meuOnChange={(e) => setNome(e.target.value)}
          />
          <Label htmlFor="cpf" texto="Digite seu CPF"></Label>
          <Input
            obrigatorio={true}
            error={false}
            size="small"
            placeholder="CPF"
            valor={cpf}
            textoAjuda=""
            cor="primary"
            tipo="text"
            tamanhoInput="40ch"
            identificador="outlined-size-normal"
            meuOnChange={(e) => setCpf(e.target.value)}
          />
          <Label htmlFor="email" texto="Digite seu E-mail"></Label>
          <Input
            obrigatorio={true}
            error={false}
            size="small"
            placeholder="E-mail"
            valor={email}
            textoAjuda=""
            cor="primary"
            tipo="email"
            tamanhoInput="40ch"
            identificador="outlined-size-normal"
            meuOnChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor="senha" texto="Digite sua senha"></Label>
          <InputSenha
            obrigatorio={true}
            sizeInput="small"
            valor={senha}
            sizeLabel="small"
            cor="primary"
            placeholder="Senha"
            tamanhoInput="40ch"
            identificador="outlined-adornment-password"
            meuOnChange={(e) => setSenha(e.target.value)}
          />
          <Label htmlFor="repSenha" texto="Confirme sua senha"></Label>
          <InputSenha
            obrigatorio={true}
            sizeInput="small"
            sizeLabel="small"
            cor="primary"
            valor={repsenha}
            placeholder="Confirmação de Senha"
            tamanhoInput="40ch"
            identificador="outlined-adornment-password"
            meuOnChange={(e) => setRepsenha(e.target.value)}
          />
          <Button
            iconButton={<HowToRegOutlinedIcon />}
            sx={buttonStyled}
            texto="Cadastrar Usuário"
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
            link="/"
            texto="Já possui cadastro? Voltar a página de Login!"
            estilo="hover"
          />
        </Box>
      </Paper>
    </Box>
  );
};
