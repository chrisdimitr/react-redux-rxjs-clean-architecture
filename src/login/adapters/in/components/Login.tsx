import { Paper, Button, Typography } from "@mui/material";

import translationHook from "@shared/hooks/translation/TranslationHook.ts";

import LoginToolbar from "./login-toolbar/LoginToolbar.tsx";
import styles from "./Login.module.scss";
import LoginHook from "./LoginHook.ts";
import logo from "../../../../assets/images/logo/logo.png";

const Login = () => {
  const { handleLoginClick } = LoginHook();
  const { translation } = translationHook();

  return (
    <div className={styles["login-container"]}>
      <LoginToolbar />
      <div className={styles["login-main"]}>
        <Paper className={styles["login-main-paper"]} elevation={8}>
          <img src={logo} alt="logo" width={500} />
          <Button variant="contained" sx={{ marginTop: 5 }} onClick={handleLoginClick}>
            <Typography variant="h6">{translation("login")}</Typography>
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default Login;
