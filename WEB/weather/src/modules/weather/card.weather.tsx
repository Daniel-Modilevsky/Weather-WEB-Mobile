import React from "react";

// UI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


type CardWeatherProps = {
  WeatherCity: {
    weatherDate: string;
    rank: number;
    day: string;
    status: string;
  };
};


const CardWeather: React.FC<CardWeatherProps> = (props) => {
  const {WeatherCity} = props;
  
  return (
    <Card
      style={{
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        marginTop: "6%",
        padding: 20,
        width:100,
        display: "inline-block",
        marginRight: 20,
        marginLeft: 20
      }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h5" component="h2">
          {WeatherCity.day}
        </Typography>
        <Typography color="textSecondary">
        {WeatherCity.rank} c
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardWeather;

CardWeather.defaultProps = {};
