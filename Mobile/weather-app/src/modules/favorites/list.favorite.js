import React from 'react';
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native';
import Favorite from "./favorite";

function mapStateToProps(state) {
    return{
        favorites: state.favorites.favorites,
    }
}

const FavoriteshList = (props)=>{
    const {favorites} = props;
    return (
        <View style={{padding: 30}}>
            {favorites.map((item,index)=> { return <Favorite key={item.cityName} index={index} favoriteData={item} /> })}
        </View>
    )
}

export default connect(mapStateToProps)(FavoriteshList);

const styles = StyleSheet.create({
    row:{
      color: 'black',
    }
  });
  
  