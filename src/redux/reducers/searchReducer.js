import { SetSearch } from "../action/index";

const initialState = { searchValue: [] };

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SetSearch:
      return {
        ...state,
        searcValue: action.payload,
      };
    default:
      return state;
  }
};
export default searchReducer;
