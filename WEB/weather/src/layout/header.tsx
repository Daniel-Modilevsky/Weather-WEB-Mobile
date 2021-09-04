import React from "react";

// UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// NAVIGATION
import { useHistory } from "react-router-dom";

// STYLE
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
    height: 50,
    width: 80,
  },
  title: {
    flexGrow: 1,
  },
}));

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  // NAVIGATION
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img
            src={
              "https://uxwing.com/wp-content/themes/uxwing/download/27-weather/weather.png"
            }
            alt={"logo"}
            className={classes.icon}
          />
          <Typography variant="h6" className={classes.title}>
            Weather Task
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              history.push("/favorite");
            }}
          >
            Favorites
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

Header.defaultProps = {};
