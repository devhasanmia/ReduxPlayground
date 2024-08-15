import { combineReducers } from "redux";
import filterReducer from "./filters/reducer";

const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer
})