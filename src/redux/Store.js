import { createStore } from "redux"
import TaskReduce from "./reducers/TodoReduce"


const devtool=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(TaskReduce,devtool)
export default store 