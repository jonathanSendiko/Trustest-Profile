// import React from "react";
import { forwardRef } from "react";
import { AppBar, UserMenu, MenuItemLink, useTranslate } from "react-admin";
// import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import { makeStyles } from "@material-ui/core/styles";

import { Logo } from "../../../assets";

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  spacer: {
    flex: 1,
  },
});

const ConfigurationMenu = forwardRef((props, ref) => {
  const translate = useTranslate();

  return (
    <MenuItemLink
      {...props}
      ref={ref}
      to="/configuration"
      primaryText={translate("pos.configuration")}
      leftIcon={<SettingsIcon />}
      onClick={props.onClick}
      sidebarIsOpen
    />
  );
});

const CustomUserMenu = (props) => (
  <UserMenu {...props}>
    <ConfigurationMenu />
  </UserMenu>
);

const CustomAppBar = (props) => {
  const classes = useStyles();

  return (
    <AppBar {...props} elevation={1} userMenu={<CustomUserMenu />}>
      {/* <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
        id="react-admin-title"
      /> */}
      <a href="/">
        <img src={Logo} alt="Logo" height={40} />
      </a>
      <span className={classes.spacer} />
    </AppBar>
  );
};

export default CustomAppBar;
