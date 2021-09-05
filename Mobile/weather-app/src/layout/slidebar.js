import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Text,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import backgroundPhoto from "../../assets/backgroundlight.jpg";
import logo from "../../assets/weather.png";

export default SliderMenu = (props) => (
  <ScrollView>
    <ImageBackground
      source={
        backgroundPhoto
      }
      style={{ height: 250, width: 400, paddingTop: 48 }}
    >
      <Image
        source={
          logo
        }
        style={styles.profile}
      />
    </ImageBackground>
    <View style={styles.section}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Weather")}
        style={styles.nav}
      >
        <Text style={styles.navText}>Weather</Text>
        <FontAwesome5 name="home" size={24} color="#666" style={styles.row} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("Favorites")}
        style={styles.nav}
      >
        <Text style={styles.navText}>Favorites</Text>
        <FontAwesome5 name="map" size={24} color="#666" style={styles.row} />
      </TouchableOpacity>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
    position: "absolute",
    marginLeft: 120,
    marginTop: 60,
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
    marginVertical: 8,
    marginTop: 190,
    marginLeft: 100,
    height: 50,
    position: "absolute",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  section: {
    flexDirection: "column",
    alignItems: "flex-end",
    marginRight: 15,
    marginTop: 10,
  },
  nav: {
    marginTop: 30,
    flexDirection: "row",
  },
  navText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#666",
  },
  Paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  perference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  userInfo: {},
});
