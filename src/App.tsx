import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";

import LoadingIndicator from "@shared/components/LoadingIndicator/LoadingIndicator.tsx";

import AppController from "./AppController.ts";
import AppRouter from "./AppRouter.tsx";

import "./App.scss";

const App = () => {
  const { theme, isInitialized } = AppController();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {isInitialized ? <LoadingIndicator /> : <RouterProvider router={AppRouter} />}
    </ThemeProvider>
  );
};

export default App;
