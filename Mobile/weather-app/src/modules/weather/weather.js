import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Weather = (props)=>{
  const {index , weatherData } = props;
  console.log(weatherData);
  return (
    <View style={{marginTop: 15, marginBottom: 15}}>
        <Text style={styles.title}> {index + 1} . {weatherData.day} </Text>
        <Text style={styles.artist}>{weatherData.rank} c </Text> 
    </View>           
    )
}

export default Weather;

const styles = StyleSheet.create({
    title:{
        color:"black"
    },
    artist:{
        color:"#666"
    },
    image:{
        height:80,
        width:80, 
        position:'absolute',
        left: 10,
        marginTop: 10
    }
});