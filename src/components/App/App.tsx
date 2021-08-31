import { CssBaseline, Box, MuiThemeProvider } from "@material-ui/core";
import { Router } from "components/Router";
import { theme } from "_config/theme";


import { useStyle } from "./App.style";

export const App: React.FC = () => {
  const style = useStyle();
  return (
    
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Box className={style.app}>
          <Router />
        </Box>
      </MuiThemeProvider>
    
  );
};