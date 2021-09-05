/**
 * Insert new favorite to my favorite weather list
 *
 * @param favorite:Favorite
 * @return {dispatch} Type + payload.
 */
export function AddFavorite(favorite) {
  return {
    type: "ADD_FAVORITE",
    payload: favorite,
  };
}

/**
 * Delete favorite from my favorite weather list
 *
 * @param index:number
 * @return {dispatch} Type + payload.
 */
export function DeleteFavorite(index, favorites) {
  // cheack when empty or only 1
  if(favorites.length === 0 || favorites.length === 1){
    return {
        type: "REMOVE_FAVORITE",
        payload: [],
      };
  };

  let newArray = new Array();
  newArray = [
    ...favorites.slice(0, index),
    ...favorites.slice(index + 1),
  ];

  return {
    type: "REMOVE_FAVORITE",
    payload: newArray,
  };
}
