import React, { useState, useEffect } from "react";
import SearchWeather from "../modules/weather/search.weather";
import BlockWeather from "../modules/weather/block.wearher";

// REDUX
import { connect } from "react-redux";
import {ChangeCityName} from "../modules/weather/actions.weather"

//=============REDUCER-CONNECTION================
function mapStateToProps(props:any) {
  return {
    weatherStoredName: props.weather.currentCityName
  };
}

function mapDispatchToProps(dispatch:any) {
  return {
    changingCity: (cityName:string) => dispatch(ChangeCityName(cityName)),
  };
}

const { weatherAPIKEY } = require("../config/config");

type WeatherScreenProps = {
  weatherStoredName: string,
  changingCity: any
};

const WeatherScreen: React.FC<WeatherScreenProps> = (props) => {
  // STORE
  const {weatherStoredName} = props;
  const {changingCity} = props;

  // STATES
  const [currentWeather, setCurrentWeather] = useState({
    city: "Tel Aviv",
    rank: 30,
    status: "Scattered clouds",
  });

  const [currentCityName, setCurrentCityName] = useState(weatherStoredName);
  const [currentCityKey, setCurrentCityKey] = useState("215854");
  const [weather5Days, setWeather5Days] = useState([
    {
      weatherDate: "2021-08-30T07:00:00+03:00",
      status: "Sunny",
      rank: 38,
      day: "Sun",
    },
  ]);


  // URLS
  const urlCity =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const queryCity = `?apikey=${weatherAPIKEY}&q=${currentCityName}`;
  const url5 = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  const query5Day = `?apikey=${weatherAPIKEY}`;
  const urlCurrentLocation =
    "http://dataservice.accuweather.com/currentconditions/v1/";


  useEffect(() => {
    getCity();
    getMyWeather();
    get5Dayes();
    changingCity(currentCityName);
  }, [currentCityName]);

  const handlerCityName = (newName: string) => {
    setCurrentCityName(newName);
  };

  const getCity = async () => {
    const res = await fetch(urlCity + queryCity);
    const data = await res.json();
    const city = {
      LocalizedName: data[0].LocalizedName,
      Rank: data[0].Rank,
      Key: data[0].Key,
    };
    setCurrentCityKey(city.Key);
  };

  const get5Dayes = async () => {
    setWeather5Days([]);
    const res = await fetch(url5 + currentCityKey + query5Day);
    const data = await res.json();
    let array: {
      weatherDate: string;
      status: string;
      rank: number;
      day: any;
    }[] = [];
    data.DailyForecasts.forEach(
      (dailyWeather: {
        Date: any;
        Day: { IconPhrase: any };
        Night: { Icon: any };
      }) => {
        array.push({
          weatherDate: dailyWeather.Date,
          status: dailyWeather.Day.IconPhrase,
          rank: dailyWeather.Night.Icon,
          day: dateParser(dailyWeather.Date),
        });
      }
    );
    setWeather5Days([...array]);
  };

  const getMyWeather = async () => {
    const res = await fetch(urlCurrentLocation + currentCityKey + query5Day);
    const data = await res.json();
    let weather = {
      city: currentCityName,
      rank: data[0].Temperature.Metric.Value,
      status: data[0].WeatherText,
    };
    setCurrentWeather({ ...weather });
  };

  const dateParser = (recivedDate: "string") => {
    const myDate = new Date(recivedDate);
    const day = myDate.getDay();
    switch (day) {
      case 0:
        return "Sun";

      case 1:
        return "Mon";

      case 2:
        return "Tue";

      case 3:
        return "Wen";

      case 4:
        return "Thu";

      case 5:
        return "Fri";

      case 6:
        return "Sut";

      default:
        break;
    }
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <SearchWeather handlerCityName={handlerCityName} />
          <BlockWeather
            weather5Days={weather5Days}
            currentWeather={currentWeather}
            currentCityName ={currentCityName}
          />
        </header>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherScreen);

WeatherScreen.defaultProps = {};
