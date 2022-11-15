import { TextField, Input } from "@mui/material";
import React, { InputHTMLAttributes } from "react";
import {
  inputLabel,
  inputSize,
  inputVariant,
  textFieldColor,
} from "../tipos/Tipos";

interface InputNoteProps {
  textoAjuda?: React.ReactNode;
  placeholder?: React.ReactNode;
  identificacao?: string;
  variante?: inputVariant;
  erro?: boolean;
  comprimentoTotal: boolean;
  propsInput?: object;
  meuOnChange: (event: object) => void;
  sizeInput?: inputSize;
}

export const InputNote: React.FC<InputNoteProps> = ({
  textoAjuda,
  identificacao,
  placeholder,
  variante,
  erro,
  comprimentoTotal,
  propsInput,
  meuOnChange,
  sizeInput,
}) => {
  return (
    <div>
      <TextField
        helperText={textoAjuda}
        id={identificacao}
        label={placeholder}
        variant={variante}
        error={erro}
        fullWidth={comprimentoTotal}
        InputProps={propsInput}
        onChange={meuOnChange}
        size={sizeInput}
      />
    </div>
  );
};
