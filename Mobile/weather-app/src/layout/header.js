import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
import { FontAwesome5 } from '@expo/vector-icons'

const MyHeader = ({ navigation }) => {
  return (
    <View>
      <Header
        backgroundColor="#EC4646"
        leftComponent={
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <FontAwesome5 name="bars" size={24} color="#fff" />
          </TouchableOpacity>
        }
        centerComponent={{ text: "FIRE 102", style: styles.centerComponent }}
        rightComponent={
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <FontAwesome5 name="home" size={24} color="#fff" />
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default MyHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
  },
  centerComponent: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});