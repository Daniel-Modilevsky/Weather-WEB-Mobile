import React from "react";
import FavoritiesList from "../modules/favorites/list.favorites"

type FavoriteScreenProps = {
};

const FavoriteScreen: React.FC<FavoriteScreenProps> = () => {

  return (
    <div className="App">
      <header className="App-header">
      <FavoritiesList/>
      </header>
    </div>
  );
};

export default FavoriteScreen;

FavoriteScreen.defaultProps = {
};
