import * as React from "react";
import { Typography } from "@mui/material";
import { variant } from "../tipos/Tipos";

interface HeadingProps {
  texto: string;
  tamanho: variant;
}

export const Heading: React.FC<HeadingProps> = ({ texto, tamanho }) => {
  return <Typography variant={tamanho}>{texto}</Typography>;
};
