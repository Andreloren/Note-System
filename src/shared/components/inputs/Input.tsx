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

import { inputLabel, inputSize, textFieldColor } from "../tipos/Tipos";

//INPUT EMAIL
interface InputProps {
  placeholder: string;
  valor?: string;
  textoajuda?: string;
  cor: textFieldColor;
  tamanhoInput: string;
  identificador: string;
  size: inputSize;
}

export function Input(props: InputProps) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: props.tamanhoInput },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          size={props.size}
          helperText={props.textoajuda}
          label={props.placeholder}
          id={props.identificador}
          defaultValue={props.valor}
          color={props.cor}
        />
      </div>
    </Box>
  );
}

//INPUT SENHA
interface State {
  password?: string;
  showPassword?: boolean;
  placeholder?: string;
  cor?: textFieldColor;
  tamanhoInput?: string;
  identificador?: string;
  sizeLabel?: inputLabel;
  sizeInput?: inputSize;
}

export default function InputSenha(props: State) {
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
        <FormControl
          sx={{ m: 1, width: props.tamanhoInput }}
          variant="outlined"
        >
          <InputLabel
            htmlFor="outlined-adornment-password"
            size={props.sizeLabel}
          >
            {props.placeholder}
          </InputLabel>
          <OutlinedInput
            size={props.sizeInput}
            color={props.cor}
            id={props.identificador}
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
            label={props.placeholder}
          />
        </FormControl>
      </div>
    </Box>
  );
}
