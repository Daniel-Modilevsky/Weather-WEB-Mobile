import React from "react";
import CardWeather from "./card.weather"

type ListWeatherProps = {
  weather5Days: {
    weatherDate: any,
    status: any,
    rank: any,
    day: any
  }[]
};

const ListWeather: React.FC<ListWeatherProps> = (props) => {
  const { weather5Days } = props;

  return (
 <div style={{
    marginTop: "6%",
    padding: 20,
    marginLeft: "5%",
    marginRight: "5%",
    width: "90%",
  }}>
    {weather5Days.map((WeatherCity, index) => (
        <CardWeather key={WeatherCity.day} WeatherCity={WeatherCity}  />
    ))}

 </div>
  );
};

export default ListWeather;

ListWeather.defaultProps = {};
