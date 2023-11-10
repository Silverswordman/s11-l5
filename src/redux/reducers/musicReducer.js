const initialState = {
  rockSongs: [],
  popSongs: [],
  hiphopSongs: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ROCK_SUCCESS":
      return {
        ...state,
        rockSongs: action.payload,
      };
    case "FETCH_POP_SUCCESS":
      return {
        ...state,
        popSongs: action.payload,
      };
    case "FETCH_HIPHOP_SUCCESS":
      return {
        ...state,
        hiphopSongs: action.payload,
      };
    default:
      return state;
  }
};
export default musicReducer;
