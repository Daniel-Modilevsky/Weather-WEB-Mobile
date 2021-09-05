import React, { useState, useEffect } from "react";
import Weather from "./weather";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Button } from "react-native-elements";
import { SearchBar } from "react-native-elements";
import { Icon } from "react-native-elements/dist/icons/Icon";

// REDUX
import { AddFavorite, DeleteFavorite } from "../favorites/favorite.action";
import { connect } from "react-redux";
import { ChangeCityName } from "./weather.action";

//=============REDUCER-CONNECTION================
function mapStateToProps(props) {
  return {
    favorites: props.favorites.favorites,
    weatherStoredName: props.weather.currentCityName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addingFavorite: (favorite) => dispatch(AddFavorite(favorite)),
    deletingFavorite: (index, favorites) =>
      dispatch(DeleteFavorite(index, favorites)),
    changingCity: (cityName) => dispatch(ChangeCityName(cityName)),
  };
}

const TrackList = (props) => {
  const {
    favorites,
    weatherStoredName,
    addingFavorite,
    deletingFavorite,
    changingCity,
  } = props;
  const { weatherAPIKEY } = require("../../config/config");

  // STATES
  const [currentWeather, setCurrentWeather] = useState({
    city: "Tel Aviv",
    rank: 30,
    status: "Scattered clouds",
  });

  const [currentCityName, setCurrentCityName] = useState(weatherStoredName);
  const [textInput, setTextInput] = useState("Tel Aviv");

  const [currentCityKey, setCurrentCityKey] = useState("215854");
  const [weather5Days, setWeather5Days] = useState([
    {
      weatherDate: "2021-08-30T07:00:00+03:00",
      status: "Sunny",
      rank: 38,
      day: "Sun",
    },
  ]);

  const [colorLiked, setColorLiked] = useState("blue" || "gray");

  // Validation
  const [message, setMessage] = useState("");
  const [messageFlag, setMessageFlag] = useState(false || true);
  const [messageColor, setMessageColor] = useState("red" || "green");

  // URLS
  const urlCity =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const queryCity = `?apikey=${weatherAPIKEY}&q=${currentCityName}`;
  const url5 = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  const query5Day = `?apikey=${weatherAPIKEY}`;
  const urlCurrentLocation =
    "http://dataservice.accuweather.com/currentconditions/v1/";

  // LISTENERS
  useEffect(() => {
    getCity();
    getMyWeather();
    get5Dayes();
    changingCity(currentCityName);
  }, [currentCityName]);

  useEffect(() => {
    isFavorite();
  }, []);

  useEffect(() => {
    isFavorite();
  }, [currentWeather]);

  const handleClickLike = () => {
    // remove Favorite by index
    if (colorLiked === "blue") {
      const index = favorites.findIndex(
        (favorite) => favorite.cityName === currentCityName
      );
      deletingFavorite(index, favorites);
      setColorLiked("gray");

      setMessageColor("green");
      setMessage("Favorite is deleted");
      setMessageFlag(true);
      return;
    } else {
      // add new Favorite
      if (favorites.find((favorite) => favorite.cityName === currentCityName)) {
        setMessageColor("red");
        setMessage("Already exist in favorites");
        setMessageFlag(true);
        return;
      }
      const newFavorite = {
        cityName: currentWeather.city,
        temperture: currentWeather.rank,
        description: currentWeather.status,
      };
      addingFavorite(newFavorite);
      setColorLiked("blue");

      setMessageColor("green");
      setMessage("New favorite is added");
      setMessageFlag(true);
      return;
    }
  };

  const isFavorite = () => {
    if (favorites.find((favorite) => favorite.cityName === currentCityName)) {
      setColorLiked("blue");
    } else {
      setColorLiked("gray");
    }
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
    let array = [];
    data.DailyForecasts.forEach((dailyWeather) => {
      array.push({
        weatherDate: dailyWeather.Date,
        status: dailyWeather.Day.IconPhrase,
        rank: dailyWeather.Night.Icon,
        day: dateParser(dailyWeather.Date),
      });
    });
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

  const dateParser = (recivedDate) => {
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

  function searchHandler(inputText) {
    setTextInput(inputText);
  }

  function submitHandler() {
    setCurrentCityName(textInput);
    getCity();
  }

  return (
    <View style={styles.trackList}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={searchHandler}
        value={textInput}
      />
      <Pressable onPress={submitHandler} onLongPress={submitHandler}>
        <Button
          style={{ height: 40 }}
          title="Search"
          type="outline"
          onPress={submitHandler}
        ></Button>
      </Pressable>
      {messageFlag && (
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            color: messageColor,
            height: 40,
          }}
        >
          {message}
        </Text>
      )}
      <Text style={{ textAlign: "center", fontSize: 25 }}>
        {currentCityName}
      </Text>
      <Text style={{ textAlign: "center", fontSize: 25 , color:"gray" }}>
        {currentWeather.rank}
      </Text>
      <Text style={{ textAlign: "center", fontSize: 46 }}>
        {currentWeather.status}
      </Text>

     <View style={{padding:20}}>
     {weather5Days.map((item,index)=> { return <Weather key = {index} index={index} weatherData ={item} /> })} 

     </View>
      <Pressable
        onPress={handleClickLike}
        onLongPress={handleClickLike}
        style={{ backgroundColor: "#f4f6f8" }}
      >
        <Button
          onPress={handleClickLike}
          icon={
            <Icon
              name="heart"
              type="font-awesome"
              style={{ padding: 15 }}
              size={30}
              color={colorLiked}
            />
          }
          title="Like"
          type="clear"
        />
      </Pressable>

    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);

const styles = StyleSheet.create({
  trackList: {
    // backgroundColor: "white",
  },
});
