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
  const [repSenha, setRepSenha] = useState("");
  const [senhaValido, setSenhaValido] = useState(false);
  const [senhaRepValido, setSenhaRepValido] = useState(false);

  const [mensagemNome, setMensagemNome] = useState("");
  const [mensagemCpf, setMensagemCpf] = useState("");
  const [mensagemEmail, setMensagemEmail] = useState("");
  const [mensagemSenha, setMensagemSenha] = useState("");
  const [mensagemRepSenha, setMensagemRepSenha] = useState("");

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

  useEffect(() => {
    if (!senha || senha.length < 7) {
      setSenhaValido(false);
      setMensagemSenha("Mínimo de 7 caracteres.");
    } else {
      setSenhaValido(true);
      setMensagemSenha("");
    }
  }, [senha]);

  useEffect(() => {
    if (senha !== repSenha) {
      setSenhaRepValido(false);
      setMensagemRepSenha("Senhas não conferem");
    } else {
      setSenhaRepValido(true);
      setMensagemRepSenha("");
    }
  }, [repSenha]);

  const handleChange = (value: string, key: label) => {
    switch (key) {
      case "Nome Completo":
        setNome(value);
        break;

      case "Digite seu CPF":
        setCpf(value);
        break;

      case "Digite seu E-mail":
        setEmail(value);
        break;

      case "Digite sua senha":
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
          <Input
            obrigatorio={true}
            error={!nomeValido}
            alturaInput="small"
            placeholder="Nome Completo"
            valor={nome}
            textoAjuda={mensagemNome}
            cor="primary"
            tipo="text"
            comprimentoInput="40ch"
            identificador="outlined-size-small"
            meuOnChange={handleChange}
            digitacaoMaxima={{ maxLength: 35 }}
          />

          <Input
            obrigatorio={true}
            error={!cpfValido}
            alturaInput="small"
            placeholder="Digite seu CPF"
            valor={cpf}
            textoAjuda={mensagemCpf}
            cor="primary"
            tipo="text"
            comprimentoInput="40ch"
            identificador="outlined-size-normal"
            meuOnChange={handleChange}
            digitacaoMaxima={{ maxLength: 11 }}
          />

          <Input
            obrigatorio={true}
            error={!emailValido}
            alturaInput="small"
            placeholder="Digite seu E-mail"
            valor={email}
            textoAjuda={mensagemEmail}
            cor="primary"
            tipo="email"
            comprimentoInput="40ch"
            identificador="outlined-size-normal"
            meuOnChange={handleChange}
            digitacaoMaxima={{ maxLength: 33 }}
          />

          <InputSenha
            obrigatorio={true}
            sizeInput="small"
            valor={senha}
            sizeLabel="small"
            cor="primary"
            placeholder="Digite sua senha"
            comprimentoInput="40ch"
            identificador="outlined-adornment-password"
            meuOnChange={handleChange}
            digitacaoMaxima={{ maxLength: 10 }}
            error={!senhaValido}
            texto={mensagemSenha}
          />

          <InputSenha
            obrigatorio={true}
            sizeInput="small"
            sizeLabel="small"
            cor="primary"
            valor={repSenha}
            placeholder="Confirmação de Senha"
            comprimentoInput="40ch"
            identificador="outlined-adornment-password"
            meuOnChange={handleChange}
            digitacaoMaxima={{ maxLength: 10 }}
            error={!senhaRepValido}
            texto={mensagemRepSenha}
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
