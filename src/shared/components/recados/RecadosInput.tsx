import { TextField, Input } from "@mui/material";
import React, { InputHTMLAttributes } from "react";
import {
  inputLabel,
  inputSize,
  inputVariant,
  textFieldColor,
} from "../tipos/Tipos";

interface InputNoteProps {
  placeholder?: React.ReactNode;
  identificacao?: string;
  variante?: inputVariant;
  erro?: boolean;
  comprimentoTotal: boolean;
  propsInput?: object;
  meuOnChange: (value: string, key: React.ReactNode) => void;
  sizeInput?: inputSize;
  valor?: string;
}

export const InputNote: React.FC<InputNoteProps> = ({
  identificacao,
  placeholder,
  variante,
  erro,
  comprimentoTotal,
  propsInput,
  meuOnChange,
  sizeInput,
  valor,
}) => {
  return (
    <div>
      <TextField
        id={identificacao}
        label={placeholder}
        variant={variante}
        error={erro}
        fullWidth={comprimentoTotal}
        InputProps={propsInput}
        onChange={(ev) => meuOnChange(ev.target.value, placeholder)}
        size={sizeInput}
        value={valor}
      />
    </div>
  );
};
