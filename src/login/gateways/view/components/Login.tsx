import { Paper, Button, Typography } from "@mui/material";

import useTranslation from "@shared/hooks/translation/useTranslation.ts";

import LoginToolbar from "./login-toolbar/LoginToolbar.tsx";
import styles from "./Login.module.scss";
import LoginController from "./LoginController.ts";
import logo from "../../../../assets/images/logo/logo.png";

const Login = () => {
  const { handleLoginClick } = LoginController();
  const { translation } = useTranslation();

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
