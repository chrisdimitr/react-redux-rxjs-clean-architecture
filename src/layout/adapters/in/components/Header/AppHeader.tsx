import { AppBar, Avatar, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

import NavigationUtils from "@shared/utils/NavigationUtils.ts";

import AppHeaderHook from "./AppHeaderHook.ts";
import logo from "../../../../../assets/images/logo/logo.png";
import { authInteractor } from "../../../../../auth/infrastructure/AuthInstances.ts";
import styles from "../AppLayout.module.scss";

const AppHeader = () => {
  const { user } = AppHeaderHook();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    authInteractor.logout();
  };

  return (
    <header>
      <AppBar position="static">
        <Container maxWidth={false}>
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <img
              onClick={NavigationUtils.goToHome}
              className={styles["app-layout-logo"]}
              src={logo}
              alt="logo"
              height={50}
            />

            <Tooltip title={user?.name}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user?.name} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key={"Profile"}>
                <Typography textAlign="center">{"Profile"}</Typography>
              </MenuItem>
              <MenuItem key={"Account"}>
                <Typography textAlign="center">{"Account"}</Typography>
              </MenuItem>
              <MenuItem key={"Logout"} onClick={handleLogout}>
                <Typography textAlign="center">{"Logout"}</Typography>
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default AppHeader;
