import { Switch, Route } from "react-router-dom";
import Header from "../layout/header";

// ROUTES
import WeatherScreen from "./weather.screen";
import FavoriteScreen from "./favorite.screen";

// EXCEPTIONS
import Screen404 from "./screen.404";

function RouterApplication() {

  return (
    <>
     <Header/>
      <Switch>
        <Route path="/" exact>
          <WeatherScreen />
        </Route>

        <Route path="/favorite">
          <FavoriteScreen />
        </Route>

        <Route path="/*">
          <Screen404 />
        </Route>
      </Switch>
    </>
  );
}

export default RouterApplication;
