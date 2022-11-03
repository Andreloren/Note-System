import * as React from "react";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Button, CssBaseline } from "@mui/material";

import PagesRoutes from "../../routes/PagesRoutes";
import { ThemeStyle } from "../themes/ThemeStyled";
import { Provider } from "react-redux";
import { store } from "../../store/modules";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const MyButton: React.FC = () => {
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
};

const ToggleColorMode: React.FC = () => {
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
        <Provider store={store}>
          <CssBaseline />
          <MyButton />
          <PagesRoutes />
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
