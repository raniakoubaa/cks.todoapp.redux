import { ADD_TASK, DELETE_TASK, TASK_ISDONE } from "../types";

export const  addTask = (description) =>  ({
    type: ADD_TASK,
    payload :{
        id : Math.random(),
        description,
        isDone: false
    }
  
})
export const TaskIsDone = (id) => ({
      type: TASK_ISDONE,
      id
    })
  export const DeleteTask = (Id) => ({
      type: DELETE_TASK,
      Id
  })