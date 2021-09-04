/**
 * Change the current city name
 *
 * @param newName:string
 * @return {dispatch} Type + payload.
 */
export function ChangeCityName(newName: string) {
  return {
    type: "UPDATE_WEATHER_NAME",
    payload: newName,
  };
}
