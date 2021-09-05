import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Favorite = (props)=>{
    const {index , favoriteData} = props;

  return (
    <View style={{marginBottom: 25, border:"1px solid gray"}}>
        <Text style={styles.title}> {index} . {favoriteData.cityName} </Text>
        <Text style={styles.secondery}> {favoriteData.temperture} c </Text> 
        <Text style={styles.secondery}> {favoriteData.description} </Text> 
    </View>           
    )
}

export default Favorite;

const styles = StyleSheet.create({
    title:{
        color:"black"
    },
    secondery:{
        color:"#666"
    }
});