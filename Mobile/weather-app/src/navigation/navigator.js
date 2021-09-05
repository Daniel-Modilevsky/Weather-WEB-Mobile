import * as React from "react";
// NAVIGATION
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

// SCREENS
import WeatherScreen from "../screens/weather.screen";
import FavoriteScreen from "../screens/favorite.screen";

import SliderMenu from "../layout/slidebar";

export default function Navigator() {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SliderMenu {...props} />} initialRouteName="Auth" drawerStyle={{
        backgroundColor: '#fff',
        width: 240,
      }}>
        <Drawer.Screen name="Weather" component={WeatherScreen} />
        <Drawer.Screen name="Favorites" component={FavoriteScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
