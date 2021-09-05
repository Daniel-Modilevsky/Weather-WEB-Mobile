import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ListWeather from "../modules/weather/list.weather";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <ListWeather/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f4f6f8",
    height: '100%',
    // alignItems: "center",
  },
  screenText: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
  },
  logo: {
    height: 400,
    width: 400,
  },
  image: {
    marginTop: 150
  },
});