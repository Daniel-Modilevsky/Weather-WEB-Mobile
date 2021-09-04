import React from "react";
import './cardFavorite.css';

// UI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

// NAVIGATION
import { useHistory } from "react-router-dom";

// REDUX
import {ChangeCityName} from "../weather/actions.weather"
import { connect } from "react-redux";
import Favorite from "./interface.favorite";

//=============REDUCER-CONNECTION================

function mapStateToProps(props:any) {
  return {
    favorites: props.favorites.favorites
  };
}

function mapDispatchToProps(dispatch:any) {
  return {
    changingCity: (cityName:string) => dispatch(ChangeCityName(cityName)),
  };
}

type CardFavoriteProps = {
  favoriteCity: {
    cityName: string;
    temperture: number;
    description: string;
  },
  changingCity: any,
  favorites: Favorite[]
};

const CardFavorite: React.FC<CardFavoriteProps> = (props) => {
  const { favoriteCity } = props;
  const { changingCity } = props;

  const history = useHistory();

  const handlerSelectedCard = () => {
    const { cityName } = favoriteCity; 
    changingCity(cityName);
    history.push("/");
  }

  return (
    <Card
      className="card"
      variant="outlined"
    >
      <CardContent onClick ={()=>{handlerSelectedCard()}}>
        <Typography variant="h5" component="h2">
          {favoriteCity.cityName}
        </Typography>
        <Typography color="textSecondary">{favoriteCity.temperture} c</Typography>
        <Typography >{favoriteCity.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CardFavorite);

CardFavorite.defaultProps = {};

