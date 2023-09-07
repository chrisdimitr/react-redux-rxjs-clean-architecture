import { CircularProgress, Paper, Typography } from "@mui/material";

import styles from "./LoadingIndicator.module.scss";

function LoadingIndicator() {
  return (
    <div className={styles["loading-container"]}>
      <Paper className={styles["loading-paper"]} elevation={8}>
        <CircularProgress />
        <Typography variant="h4">Loading...</Typography>
      </Paper>
    </div>
  );
}

export default LoadingIndicator;
