import * as React from "react";
import { Box, Paper } from "@mui/material";
import { Logo } from "../logo/Logo";
import { Heading } from "../heading/Heading";

export const Home: React.FC = () => {
  return (
    <Box>
      <Paper elevation={2} sx={{}}>
        <Box>
          <Logo />
          <Heading texto="Note System" tamanho="h4" />
        </Box>
      </Paper>
    </Box>
  );
};

{
  /* <form class="col-md-6 col-sm-12" id="formularioLogin">
                  <fieldset id="caixaLogin" class="row mt-3">
                    <p
                      class="fw-bolder mb-5"
                      id="tituloLogin"
                      style="color: #069dad"
                    >
                      Já possui cadastro?
                    </p>
                    <p class="fw-semibold">
                      Para entrar informe CPF e Senha cadastrados:
                    </p>
                    <div class="needs-validation was-validated" novalidate="">
                      <div class="form-floating mb-3">
                        <input
                          class="mt-4 form-control cpfLogin border border-0"
                          type="text"
                          id="floatingName validationCustomName"
                          placeholder="CPF"
                          required
                          value=""
                          minlength="11"
                          maxlength="11"
                        />
                        <label
                          class="form-label"
                          for="cpfLogin floatingName validationCustomName"
                          >*CPF</label
                        >
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          class="form-control senhaLogin border border-0"
                          type="text"
                          id="floatingPass validationCustomPass"
                          placeholder="Senha"
                          required
                          value=""
                          minlength="5"
                        />
                        <label
                          class="form-label"
                          for="senhaLogin floatingPass validationCustomPass"
                          >*Senha</label
                        >
                      </div>
                    </div>
                    <div class="mt-5 d-flex justify-content-center">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        class="btn btn-primary mx-1 mb-1"
                        id="botaoAcessar"
                        id="logadoSucesso"
                      >
                        Acessar Conta
                      </button>
                    </div>
                    <p
                      class="mobile mx-1 mt-1 text-center d-block d-md-none d-sm-block"
                    >
                      Não tem conta?
                      <a href="#" id="openCadastroMobile">Registre-se</a>
                    </p>
                  </fieldset>
                </form> */
}
