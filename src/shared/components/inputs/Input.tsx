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
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: boolean;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  valor,
  textoAjuda,
  cor,
  tamanhoInput,
  identificador,
  size,
  onChange,
  error,
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
          onChange={onChange}
          size={size}
          helperText={textoAjuda}
          label={placeholder}
          id={identificador}
          defaultValue={valor}
          color={cor}
        />
      </div>
    </Box>
  );
};

//INPUT SENHA
interface State {
  password?: string;
  showPassword?: boolean;
  placeholder?: label;
  cor?: textFieldColor;
  tamanhoInput?: string;
  identificador?: string;
  sizeLabel?: inputLabel;
  sizeInput?: inputSize;
  error?: boolean;
  required?: boolean;
}

export const InputSenha: React.FC<State> = ({
  password,
  showPassword,
  placeholder,
  cor,
  tamanhoInput,
  identificador,
  sizeInput,
  sizeLabel,
  error,
  required,
}) => {
  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
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
            // error
            htmlFor="outlined-adornment-password"
            size={sizeLabel}
          >
            {placeholder}
          </InputLabel>
          <OutlinedInput
            error={error}
            size={sizeInput}
            color={cor}
            id={identificador}
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
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
