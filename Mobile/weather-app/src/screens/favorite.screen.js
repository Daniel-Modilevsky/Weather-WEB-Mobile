import React from "react";
import { StyleSheet, View, Text } from "react-native";
import FavoriteshList from "../modules/favorites/list.favorite";

const FavoriteScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <FavoriteshList/>
    </View>
  );
};

export default FavoriteScreen;

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