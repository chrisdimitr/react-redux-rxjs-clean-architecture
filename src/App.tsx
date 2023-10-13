import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";

import LoadingIndicator from "@shared/components/loading-indicator/LoadingIndicator.tsx";

import AppHook from "./AppHook.ts";
import AppRouter from "./AppRouter.tsx";

import "./App.scss";

const App = () => {
  const { theme, isInitialized } = AppHook();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {isInitialized ? <LoadingIndicator /> : <RouterProvider router={AppRouter} />}
    </ThemeProvider>
  );
};

export default App;
