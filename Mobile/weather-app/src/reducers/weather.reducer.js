const initState = {
  currentCityName: "Tel Aviv"
};

const WeatherReducer = (state = initState, action) => {
  switch (action.type) {
    // action.payload = name:string
    case "UPDATE_WEATHER_NAME":
      return {
        ...state,
        currentCityName: action.payload,
      };

    default:
      return state;
  }
};

export default WeatherReducer;
