import React, { useState, useEffect } from "react";
import ListWeather from "./list.weather";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";

import {AddFavorite, DeleteFavorite} from "../favorites/actions.favorites"
import { connect } from "react-redux";
import Favorite from "../favorites/interface.favorite";

//=============REDUCER-CONNECTION================
function mapStateToProps(props:any) {
  return {
    favorites: props.favorites.favorites
  };
}

function mapDispatchToProps(dispatch:any) {
  return {
    addingFavorite: (favorite:any) => dispatch(AddFavorite(favorite)),
    deletingFavorite: (index:number, favorites:Favorite[]) => dispatch(DeleteFavorite(index,favorites )),
  };
}

type WeatherBlockProps = {
  weather5Days:{
    weatherDate: any,
    status: any,
    rank: any,
    day: any
  }[],
  currentWeather: {
    city: string;
    rank: number;
    status: string;
  },
  currentCityName:string,
  favorites: Favorite[],
  addingFavorite: any,
  deletingFavorite: any
};

const WeatherBlock: React.FC<WeatherBlockProps> = (props) => {
  const classes = useStyles();
  
  // Props data
  const {weather5Days} = props;
  const {currentWeather} = props;
  const {currentCityName} = props;

  // Store data
  const {favorites} = props;
  const {deletingFavorite } = props;
  const {addingFavorite } = props;

  const [colorLiked, setColorLiked] = useState("blue" || "gray");

  // Validation
  const [message, setMessage] = useState("");
  const [messageFlag, setMessageFlag] = useState(false || true);
  const [messageColor, setMessageColor] = useState("red" || "green");


  // LISTENERS
  useEffect(() => {
    isFavorite();
  }, []);

  useEffect(() => {
    isFavorite();
  }, [currentWeather]);

  const handleClickLike = () => {
    // remove Favorite by index
    if (colorLiked === "blue") {
      const index = favorites.findIndex(favorite => favorite.cityName === currentCityName);    
      deletingFavorite(index, favorites);
      setColorLiked("gray");

      setMessageColor("green");
      setMessage("Favorite is deleted")
      setMessageFlag(true);
      return;

    } else {
      // add new Favorite
      if(favorites.find(favorite => favorite.cityName === currentCityName)){
        setMessageColor("red");
        setMessage("Already exist in favorites")
        setMessageFlag(true);
        return;
      }
      const newFavorite:Favorite = {
        cityName: currentWeather.city,
        temperture: currentWeather.rank, 
        description: currentWeather.status,
      }
      addingFavorite(newFavorite);
      setColorLiked("blue");

      setMessageColor("green");
      setMessage("New favorite is added")
      setMessageFlag(true);
      return;
    }
  };

  const isFavorite = () => {
    if(favorites.find(favorite => favorite.cityName === currentCityName)){
      setColorLiked("blue");
    }
    else{
      setColorLiked("gray");
    }
  } 

  return (
    <div
      style={{
        border: "1px solid gray",
        marginTop: "6%",
        padding: 20,
        marginLeft: "5%",
        marginRight: "5%",
        height: "80%",
        backgroundColor: "white",
      }}
    >
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{
            backgroundColor: "white",
            color: "black",
            boxShadow:
              "0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0 rgba(0, 0, 0, 0)",
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6">{currentWeather.city} </Typography>
            <Typography
              variant="h6"
              style={{
                position: "absolute",
                marginTop: 45,
                marginLeft: 54,
                color: "gray",
              }}
            >
              {currentWeather.rank} c
            </Typography>
            <Typography className={classes.title}></Typography>
            <label htmlFor="icon-button-file">
              <IconButton
                style={{color:colorLiked}}
                aria-label="upload picture"
                component="span"
                onClick={()=>handleClickLike()}
              >
                <FavoriteIcon />
              </IconButton>
            </label>
      
          </Toolbar>
        </AppBar>
      </div>
      <p style={{ textAlign: "center", fontSize: 18, color:messageColor, height: 40 }}>
        {messageFlag && (<span>{message}</span>)}
      </p>
      <p style={{ textAlign: "center", fontSize: 60 }}>{currentWeather.status}</p>
      <ListWeather weather5Days = {weather5Days}/>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherBlock);

WeatherBlock.defaultProps = {};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
