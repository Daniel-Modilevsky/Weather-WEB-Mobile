import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

// REDUX
import { ChangeCityName } from "../weather/weather.action";
import { connect } from "react-redux";

//=============REDUCER-CONNECTION================

function mapStateToProps(props) {
  return {
    favorites: props.favorites.favorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changingCity: (cityName) => dispatch(ChangeCityName(cityName)),
  };
}

const Favorite = (props) => {
    const {navigation} = props;
  const { index, favoriteData } = props;
  const { changingCity } = props;

  const handlerSelectedCard = () => {
    const { cityName } = favoriteData;
    changingCity(cityName);
     navigation.navigate("Weather");
  };

  return (
    <View style={{ marginBottom: 25, border: "1px solid gray" }}>
      <Pressable
        onPress={()=> {handlerSelectedCard()}}
        onLongPress={()=> {handlerSelectedCard()}}
      >
        <Text style={styles.title}>
          {index} . {favoriteData.cityName}
        </Text>
        <Text style={styles.secondery}> {favoriteData.temperture} c </Text>
        <Text style={styles.secondery}> {favoriteData.description} </Text>
      </Pressable>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);

const styles = StyleSheet.create({
  title: {
    color: "black",
  },
  secondery: {
    color: "#666",
  },
});
