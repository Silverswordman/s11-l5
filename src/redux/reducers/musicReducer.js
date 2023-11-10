import { fetchRockSuccess } from "../action/index";
import { fetchPopSuccess } from "../action/index";
import { fetchHipHopSuccess } from "../action/index";

const initialState = {
  rockSongs: [],
  popSongs: [],
  hiphopSongs: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchRockSuccess:
      return {
        ...state,
        rockSongs: action.payload,
      };
    case fetchPopSuccess:
      return {
        ...state,
        popSongs: action.payload,
      };
    case fetchHipHopSuccess:
      return {
        ...state,
        hiphopSongs: action.payload,
      };
    default:
      return state;
  }
};
export default musicReducer;
