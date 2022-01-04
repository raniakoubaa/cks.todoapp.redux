import { combineReducers } from "redux";
import TaskReduce, { visibilityFilter } from "./TodoReduce";
const rootReducer= combineReducers({TaskReduce,visibilityFilter})
export default rootReducer