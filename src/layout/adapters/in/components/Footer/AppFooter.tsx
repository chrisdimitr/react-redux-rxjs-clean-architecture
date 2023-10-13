import { Button } from "@mui/material";

import styles from "../AppLayout.module.scss";

const AppFooter = () => {
  return (
    <footer className={styles["app-layout-footer"]}>
      <Button>Terms & Conditions</Button>
      <Button>Contact</Button>
    </footer>
  );
};

export default AppFooter;
