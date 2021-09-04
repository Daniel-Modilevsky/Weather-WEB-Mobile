import React, { useState } from "react";

// UI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

type SearchWeatherProps = {
  handlerCityName: Function
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    marginTop: 20
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchWeather: React.FC<SearchWeatherProps> = (props) => {
  const classes = useStyles();
  const {handlerCityName} = props;

  // STATES
  const [searcherdWeather, setSearcherdWeather] = useState("Tel Aviv");

  //EVENT-HANDLERS
  const handleSearcherdWeather = (val: string) => {
    setSearcherdWeather(val);
  };

  const search = () => {
    handlerCityName(searcherdWeather);
  };

  return (
    <>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search google maps" }}
          value={searcherdWeather}
          onChange={(e) => handleSearcherdWeather(e.target.value)}
        />

        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          className={classes.iconButton}
          aria-label="search"
          color="primary"
          onClick={() => search()}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchWeather;

SearchWeather.defaultProps = {};
