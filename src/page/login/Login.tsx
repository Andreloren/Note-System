import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MaskedInput from "react-text-mask";
import { Box, Paper } from "@mui/material";
import DoorBackOutlinedIcon from "@mui/icons-material/DoorBackOutlined";

import { Logo } from "../../shared/components/logo/Logo";
import { Heading } from "../../shared/components/heading/Heading";
import {
  boxStyledLog,
  paperStyledLog,
  formBoxStyledLog,
} from "../../shared/components/login/LoginStyled";
import {
  InputSenha,
  InputCadastro,
} from "../../shared/components/inputs/Input";
import { Button } from "../../shared/components/button/Button";
import { buttonStyled } from "../../shared/components/button/ButtonStyled";
import { Link } from "../../shared/components/footer/Footer";
import { FooterStyled } from "../../shared/components/footer/FooterStyled";
import { label } from "../../shared/components/tipos/Tipos";
import { MaskCpf, regexCpf } from "../../shared/components/mascara/Mask";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import { incluirUsuarioLogado } from "../../store/modules/usuarioLogado/usuarioLogadoSlice";

interface UserLog {
  cpf: string;
  senha: string;
}

export const Login: React.FC = () => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const [mensagemCpf, setMensagemCpf] = useState("");
  const [mensagemSenha, setMensagemSenha] = useState("");
  const [senhaValido, setSenhaValido] = useState(false);
  const [cpfValido, setcpfValido] = useState(false);

  const navigate = useNavigate();

  const usuarios = useAppSelector((estado) => estado.usuarios);
  const dispatch = useAppDispatch();

  const handleChange = (value: string, key: label) => {
    switch (key) {
      case "Digite seu CPF":
        setCpf(value);
        break;

      case "Digite sua senha":
        setSenha(value);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (!cpf || !cpf.match(regexCpf)) {
      setcpfValido(false);
      setMensagemCpf("Favor digitar 11 números.");
    } else {
      setcpfValido(true);
      setMensagemCpf("");
    }
    if (!senha || senha.length < 7) {
      setSenhaValido(false);
      setMensagemSenha("Mínimo de 7 caracteres.");
    } else {
      setSenhaValido(true);
      setMensagemSenha("");
    }
  }, [cpf, senha]);

  const handleClickLogin = () => {
    const userLog: UserLog = {
      cpf: cpf,
      senha: senha,
    };

    const buscaUsuario = usuarios.find(
      (usuarioLog) =>
        usuarioLog.cpf === userLog.cpf && usuarioLog.senha === userLog.senha
    );

    if (!buscaUsuario) {
      alert("CPF inexistente ou Senha incorreta");
      return;
    }

    const usuarioLogado = {
      nome: buscaUsuario.nome,
      email: buscaUsuario.email,
    };
    dispatch(incluirUsuarioLogado(usuarioLogado));
    navigate("/home");
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
          <InputCadastro
            obrigatorio={true}
            error={!cpfValido}
            valor={cpf}
            tipo="text"
            meuOnChange={handleChange}
            alturaInput="medium"
            placeholder="Digite seu CPF"
            textoAjuda={mensagemCpf}
            cor="primary"
            comprimentoInput="40ch"
            identificador="outlined-size-normal"
            propsInput={{
              inputComponent: MaskCpf,
              inputProps: { component: MaskedInput },
            }}
          />
          <InputSenha
            obrigatorio={true}
            error={!senhaValido}
            valor={senha}
            meuOnChange={handleChange}
            cor="primary"
            placeholder="Digite sua senha"
            comprimentoInput="40ch"
            identificador="outlined-adornment-password"
            propsInput={{ maxLength: 10 }}
            texto={mensagemSenha}
          />
          <Button
            iconButton={<DoorBackOutlinedIcon />}
            sx={buttonStyled}
            texto="Entrar na Plataforma"
            tipoBotao="button"
            cor="primary"
            tamanho="medium"
            variacao="contained"
            myOnClick={handleClickLogin}
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
