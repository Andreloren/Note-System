import React, { useState } from "react";

import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { searchStyled } from "./SearchStyled";
import { useAppDispatch, useAppSelector } from "../../../store/modules/hooks";
import { buscarRecadosUsuarioAPI } from "../../../store/modules/recados/recadosSlice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export function SearchBar() {
  const [busca, setBusca] = useState("");

  const dispatch = useAppDispatch();
  const usuarioLogado = useAppSelector((estado) => estado.usuarioLogado);

  const filterHome = () => {
    // setBusca(params);
    dispatch(
      buscarRecadosUsuarioAPI({
        cpf: usuarioLogado,
        filter: busca,
      })
    );
  };

  return (
    <Box sx={searchStyled}>
      <Toolbar>
        <button onClick={filterHome}>
          <SearchIcon />
        </button>
        <Search>
          <SearchIconWrapper></SearchIconWrapper>
          <StyledInputBase
            placeholder="Pesquisar"
            inputProps={{ "aria-label": "search" }}
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </Search>
      </Toolbar>
    </Box>
  );
}
