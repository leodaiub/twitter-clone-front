import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menus from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
      color: "#333",
    },
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#fff",
    display: "flex",
    alignItems: "center",
  },
}));

const Menu = (props) => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="primary">
            <Link className={classes.title} to="/">
              <img
                src={process.env.PUBLIC_URL + "/icons8-twitter.svg"}
                width="50"
                height="50"
                alt="twitter logo"
              />
              Twitter Clone
            </Link>
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menus
                id="menu-appbar"
                elevation={0}
                getContentAnchorEl={null}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                className={classes.popup}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="profile">Profile</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>Log out</MenuItem>
              </Menus>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Menu.propTypes = {};

export default Menu;
