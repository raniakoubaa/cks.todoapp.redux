import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import { ADD_TASK, DELETE_TASK, TASK_ISDONE } from "../types";

export const initialState = {
    todoList: [
        {id : Math.random(), description: "todos 1", isDone: false},
        {id : Math.random(), description: "todos 2", isDone: true},
        {id : Math.random(), description: "todos 3", isDone : true}
    ],
  };
  export const TaskReduce = (state = initialState, {type,payload}) => {

 switch (type) {
                    case ADD_TASK:
                          return {...state, todoList:[...state.todoList, payload]}                      
                    case TASK_ISDONE:
                    return {...state, todoList: [state.todoList.filter(elt => elt.isDone === true)]}
                    case DELETE_TASK:
                       
                      return {...state, todoList: state.todoList.filter(elt => elt.id !== payload) }
                    default:
                        return state;
          }
}
export default TaskReduce