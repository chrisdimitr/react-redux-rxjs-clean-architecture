import { Box, Divider } from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import LoadingIndicator from "@shared/components/LoadingIndicator/LoadingIndicator.tsx";

import styles from "./AppLayout.module.scss";
import AppFooter from "./Footer/AppFooter.tsx";
import AppHeader from "./Header/AppHeader.tsx";

const AppLayout = () => {
  console.log("AppLayout");

  return (
    <Suspense fallback={<LoadingIndicator />}>
      <Box className={styles["app-layout-container"]} sx={{ backgroundColor: "background.default" }}>
        <AppHeader />
        <Outlet />
        <Divider />
        <AppFooter />
      </Box>
    </Suspense>
  );
};

export default AppLayout;
