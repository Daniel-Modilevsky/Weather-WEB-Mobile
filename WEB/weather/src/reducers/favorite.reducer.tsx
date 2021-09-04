const initState = {
  favorites: [
    { cityName: "Tel Aviv", temperture: 30, description: "Sunny" },
    { cityName: "Ramat Gan", temperture: 30, description: "Sunny" },
  ],
};

const FavoritesReducer = (state = initState, action: any) => {
  switch (action.type) {
    // action.payload = favorite object
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };

    case "REMOVE_FAVORITE":
      // action.payload = favorites      
      return {
        ...state,
        favorites: [...action.payload],
      };

    default:
      return state;
  }
};

export default FavoritesReducer;
