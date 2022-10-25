import * as React from "react";
import { Button as ButtonLog, Stack, SxProps } from "@mui/material";
import DoorBackOutlinedIcon from "@mui/icons-material/DoorBackOutlined";
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
}

export function Button(props: ButtonProps) {
  return (
    <Stack direction="row" spacing={2}>
      <ButtonLog
        sx={props.sx}
        type={props.tipoBotao}
        variant={props.variacao}
        startIcon={<DoorBackOutlinedIcon />}
        color={props.cor}
        size={props.tamanho}
      >
        {props.texto}
      </ButtonLog>
    </Stack>
  );
}
