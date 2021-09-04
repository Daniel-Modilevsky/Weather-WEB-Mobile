import { combineReducers } from "redux";
import WeatherReducer from "./weather.reducer";
import FavoritesReducer from "./favorite.reducer";
import store from "./store";
import {useDispatch} from "react-redux";

export const RootReducer = combineReducers({
  weather: WeatherReducer,
  favorites: FavoritesReducer
});

export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()

