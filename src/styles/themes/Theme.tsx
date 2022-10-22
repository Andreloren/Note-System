import * as React from "react";

import {
  useTheme,
  ThemeProvider,
  createTheme,
  styled,
} from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Button, CssBaseline } from "@mui/material";

import PagesRoutes from "../../routes/PagesRoutes";
import { ThemeStyle } from "../themes/ThemeStyled";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function MyButton() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <ThemeStyle>
      <Button
        variant="outlined"
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </Button>
    </ThemeStyle>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyButton />
        <PagesRoutes />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
