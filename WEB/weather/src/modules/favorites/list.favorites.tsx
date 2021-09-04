import React from "react";
import CardFavorite from "./card.favorites";
import { connect } from "react-redux";
import Favorite from "./interface.favorite";
//=============REDUCER-CONNECTION================

function mapStateToProps(props:any) {
  return {
    favorites: props.favorites.favorites,
  };
}


type ListFavoriteProps = {
  favorites: Favorite[]
};

const ListFavorite: React.FC<ListFavoriteProps> = (props) => {
  const { favorites } = props;
  
  
  return (
    <div
      style={{
        marginTop: "1%",
        padding: 20,
        marginLeft: "5%",
        marginRight: "5%",
        width: "90%",
      }}
    >
      {favorites.map((favoriteCity) => (
        <CardFavorite key={favoriteCity.cityName} favoriteCity={favoriteCity} />
      ))}
    </div>
  );
};


export default connect(mapStateToProps)(ListFavorite);
ListFavorite.defaultProps = {};
