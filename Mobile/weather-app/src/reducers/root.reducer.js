import { combineReducers } from "redux";
import WeatherReducer from "./weather.reducer";
import FavoritesReducer from "./favorite.reducer";

export const RootReducer = combineReducers({
  weather: WeatherReducer,
  favorites: FavoritesReducer
});


