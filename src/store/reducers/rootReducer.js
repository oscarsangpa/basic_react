import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";


export const rootReducer = combineReducers(
  {
    todosState: todosReducer,
    filterState: filterReducer
  }
)