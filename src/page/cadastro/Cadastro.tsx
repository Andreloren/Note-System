import React, { useEffect, useState } from "react";
import { Box, Paper } from "@mui/material";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { useNavigate } from "react-router-dom";
import { Heading } from "../../shared/components/heading/Heading";
import { boxStyledLog as boxStyledCad } from "../../shared/components/login/LoginStyled";
import {
  formBoxStyledCad,
  paperStyledCad,
} from "../../shared/components/cadastro/CadastroStyled";
import { InputSenha, Input } from "../../shared/components/inputs/Input";
import { Label } from "../../shared/components/label/Label";
import { Button } from "../../shared/components/button/Button";
import { buttonStyled } from "../../shared/components/button/ButtonStyled";
import { Link } from "../../shared/components/footer/Footer";
import { FooterStyled } from "../../shared/components/footer/FooterStyled";
import { UserLog } from "../login/Login";
import { label } from "../../shared/components/tipos/Tipos";

const regexCpf = /^[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}$/g;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/g;

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
  const [repsenha, setRepSenha] = useState("");
  const [senhaValido, setSenhaValido] = useState(false);

  const [mensagemNome, setMensagemNome] = useState("Mínimo de 5 letras");
  const [mensagemCpf, setMensagemCpf] = useState("Mínimo de 5 letras");
  const [mensagemEmail, setMensagemEmail] = useState("Mínimo de 5 letras");

  const navigate = useNavigate();

  const [dados, setDados] = useState<Users[]>(
    JSON.parse(localStorage.getItem("Users") ?? "[]")
  );

  useEffect(() => {
    if (!nome || nome.length < 5) {
      setNomeValido(false);
      setMensagemNome("Mínimo de 5 caracteres.");
    } else {
      setNomeValido(true);
      setMensagemNome("");
    }
  }, [nome]);

  useEffect(() => {
    if (!cpf || !cpf.match(regexCpf)) {
      setcpfValido(false);
      setMensagemCpf("Mínimo de 5 caracteres.");
    } else {
      setcpfValido(true);
      setMensagemCpf("");
    }
  }, [cpf]);

  useEffect(() => {
    if (!email || !email.match(regexEmail)) {
      setEmailValido(false);
      setMensagemEmail("Mínimo de 5 caracteres.");
    } else {
      setEmailValido(true);
      setMensagemEmail("");
    }
  }, [email]);

  const handleChange = (value: string, key: label) => {
    switch (key) {
      case "Nome":
        setNome(value);
        break;

      case "CPF":
        setCpf(value);
        break;

      case "E-mail":
        setEmail(value);
        break;

      case "Senha":
        setSenha(value);
        break;

      case "Confirmação de Senha":
        setRepSenha(value);
        break;

      default:
        break;
    }
  };

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
            error={!nomeValido}
            alturaInput="small"
            placeholder="Nome"
            valor={nome}
            textoAjuda={mensagemNome}
            cor="primary"
            tipo="text"
            comprimentoInput="40ch"
            identificador="outlined-size-small"
            meuOnChange={handleChange}
            digitacaoMaxima={{ maxLength: 35 }}
          />
          <Label htmlFor="cpf" texto="Digite seu CPF"></Label>
          <Input
            obrigatorio={true}
            error={!cpfValido}
            alturaInput="small"
            placeholder="CPF"
            valor={cpf}
            textoAjuda={mensagemCpf}
            cor="primary"
            tipo="text"
            comprimentoInput="40ch"
            identificador="outlined-size-normal"
            meuOnChange={handleChange}
            digitacaoMaxima={{ maxLength: 11 }}
          />
          <Label htmlFor="email" texto="Digite seu E-mail"></Label>
          <Input
            obrigatorio={true}
            error={!emailValido}
            alturaInput="small"
            placeholder="E-mail"
            valor={email}
            textoAjuda={mensagemEmail}
            cor="primary"
            tipo="email"
            comprimentoInput="40ch"
            identificador="outlined-size-normal"
            meuOnChange={handleChange}
            digitacaoMaxima={{ maxLength: 33 }}
          />
          <Label htmlFor="senha" texto="Digite sua senha"></Label>
          <InputSenha
            obrigatorio={true}
            sizeInput="small"
            valor={senha}
            sizeLabel="small"
            cor="primary"
            placeholder="Senha"
            comprimentoInput="40ch"
            identificador="outlined-adornment-password"
            meuOnChange={handleChange}
            digitacaoMaxima={{ maxLength: 10 }}
          />
          <Label htmlFor="repSenha" texto="Confirme sua senha"></Label>
          <InputSenha
            obrigatorio={true}
            sizeInput="small"
            sizeLabel="small"
            cor="primary"
            valor={repsenha}
            placeholder="Confirmação de Senha"
            comprimentoInput="40ch"
            identificador="outlined-adornment-password"
            meuOnChange={handleChange}
            digitacaoMaxima={{ maxLength: 10 }}
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
