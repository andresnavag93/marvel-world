import { createStore, combineReducers } from "redux";
import { charactersReducer } from "./reducers/charactersReducer";
import { comicsReducer } from "./reducers/comicsReducer";
import { storiesReducer } from "./reducers/storiesReducer";

const reducers = combineReducers({
  charactersReducer,
  comicsReducer,
  storiesReducer,
});
const store = createStore(reducers);

export { store };
