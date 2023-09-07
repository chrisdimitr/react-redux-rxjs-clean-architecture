import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { ConsoleLoggingConfig } from "@config/console-logging/ConsoleLoggingConfig.ts";
import { DayJsConfig } from "@config/dayjs/DayJsConfig.ts";
import { MuiConfig } from "@config/mui/MuiConfig.ts";
import { store } from "@config/redux-toolkit/store";

import "dayjs/locale/de";

import App from "./App.tsx";

import "./index.scss";

import "react-toastify/dist/ReactToastify.min.css";

ConsoleLoggingConfig();

DayJsConfig();

MuiConfig();

createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
