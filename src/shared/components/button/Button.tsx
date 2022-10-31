import * as React from "react";
import { Button as ButtonLog, Stack, SxProps } from "@mui/material";

import {
  buttonColor,
  buttonSize,
  buttonType,
  buttonVariant,
} from "../tipos/Tipos";

interface ButtonProps {
  variacao: buttonVariant;
  tipoBotao: buttonType;
  texto: string;
  cor: buttonColor;
  tamanho: buttonSize;
  children?: React.ReactNode;
  sx?: SxProps;
  iconButton: React.ReactNode;
  myOnClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variacao,
  tipoBotao,
  texto,
  cor,
  tamanho,
  children,
  sx,
  iconButton,
  myOnClick,
}) => {
  return (
    <Stack direction="row" spacing={2}>
      <ButtonLog
        sx={sx}
        type={tipoBotao}
        variant={variacao}
        startIcon={iconButton}
        color={cor}
        size={tamanho}
        onClick={myOnClick}
      >
        {texto}
      </ButtonLog>
    </Stack>
  );
};
