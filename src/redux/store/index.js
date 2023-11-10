import { combineReducers, configureStore } from "@reduxjs/toolkit";
import musicReducer from "../reducers/musicReducer";
import searchReducer from "../reducers/searchReducer";

const CombinedReducer = combineReducers({
  rockSongs: musicReducer,
  popSongs: musicReducer,
  hiphopSongs: musicReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: CombinedReducer,
});

export default store;
