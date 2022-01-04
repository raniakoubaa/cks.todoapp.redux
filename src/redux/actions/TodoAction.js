import { ADD_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK, TASK_ISDONE } from "../types";

export const  addTask = (description) =>  ({
    type: ADD_TASK,
    payload :{
        id : Math.random(),
        description,
        isDone: false
    }
  
})
export const TaskIsDone = (payload) => ({
      type: TASK_ISDONE,
      payload
    })
  export const DeleteTask = (payload) => ({
      type: DELETE_TASK,
      payload
  })
  export const EditTask = (id,value) => ({
      type: EDIT_TASK,
      payload :{
          id,
          value
      }
  })
  export const FilterTask = (payload) => ({
      type: FILTER_TASK,
      payload 
  })
  
  