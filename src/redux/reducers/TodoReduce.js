
import { ADD_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK, TASK_ISDONE } from "../types";

export const initialState = {
  todoList: [
    { id: Math.random(), description: "todos 1", isDone: false },
    { id: Math.random(), description: "todos 2", isDone: true },
    { id: Math.random(), description: "todos 3", isDone: false }
  ],
};
export const TaskReduce = (state = initialState, { type, payload }) => {

  switch (type) {
    case ADD_TASK:
      return { ...state, todoList: [...state.todoList, payload] }
    case TASK_ISDONE:
      return { ...state, todoList: state.todoList.map(elt => elt.id === payload ? { ...elt, isDone: !elt.isDone } : elt) }
    case DELETE_TASK:
      return { ...state, todoList: state.todoList.filter(elt => elt.id !== payload) }
    case EDIT_TASK:
      return {...state, todoList : state.todoList.map(elt => elt.id === payload.id ? {...elt,description:payload.value} : elt)}
      case  FILTER_TASK:
             if(payload=== 'all')
              return {...state, todoList : state.todoList} 
              else if(payload=== 'done')
              {
                return{...state, todoList : state.todoList.filter(task => task.isDone)}
              }
              else if(payload=== 'complete')
              {
                return{...state, todoList : state.todoList.filter(task => !task.isDone)}
              }    
             
      default:
      return state;
  }
}

export default TaskReduce