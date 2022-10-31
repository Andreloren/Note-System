import * as React from "react";
import {
  Box,
  IconButton,
  OutlinedInput,
  InputLabel,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { inputLabel, inputSize, label, textFieldColor } from "../tipos/Tipos";

//INPUT EMAIL
interface InputProps {
  placeholder: label;
  valor?: string;
  textoAjuda?: string;
  cor: textFieldColor;
  tamanhoInput: string;
  identificador: string;
  size: inputSize;
  meuOnChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: boolean;
  obrigatorio?: boolean;
  tipo: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  valor,
  textoAjuda,
  cor,
  tamanhoInput,
  identificador,
  size,
  meuOnChange,
  error,
  tipo,
  obrigatorio,
}) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: tamanhoInput },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error={error}
          onChange={meuOnChange}
          size={size}
          helperText={textoAjuda}
          label={placeholder}
          id={identificador}
          value={valor}
          color={cor}
          type={tipo}
          required={obrigatorio}
        />
      </div>
    </Box>
  );
};

//INPUT SENHA
interface State {
  password?: string;
  mostrarSenha?: boolean;
  placeholder?: label;
  cor?: textFieldColor;
  tamanhoInput?: string;
  identificador?: string;
  sizeLabel?: inputLabel;
  sizeInput?: inputSize;
  error?: boolean;
  meuOnChange?: React.ChangeEventHandler<HTMLInputElement>;
  valor?: string;
  obrigatorio?: boolean;
}

export const InputSenha: React.FC<State> = ({
  placeholder,
  cor,
  tamanhoInput,
  identificador,
  sizeInput,
  sizeLabel,
  error,
  meuOnChange,
  valor,
  obrigatorio,
}) => {
  const [values, setValues] = React.useState<State>({ mostrarSenha: false });

  // const handleChange =
  //   (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValues({ ...values, [prop]: event.target.value });
  //   };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      mostrarSenha: !values.mostrarSenha,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <FormControl sx={{ m: 1, width: tamanhoInput }} variant="outlined">
          <InputLabel
            required={obrigatorio}
            error={error}
            htmlFor="outlined-adornment-password"
            size={sizeLabel}
          >
            {placeholder}
          </InputLabel>
          <OutlinedInput
            required={obrigatorio}
            error={error}
            size={sizeInput}
            color={cor}
            id={identificador}
            type={values.mostrarSenha ? "text" : "password"}
            value={valor}
            onChange={meuOnChange}
            // onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.mostrarSenha ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={placeholder}
          />
        </FormControl>
      </div>
    </Box>
  );
};

export default InputSenha;
