import React from 'react'
import { useDispatch } from 'react-redux'
import {TaskIsDone } from '../../redux/actions/TodoAction'
import {RiDeleteBin6Line} from 'react-icons/ri'
import Edit from '../Edit/Edit'



const Task = ({todo,HandleDelete}) => {
    const dispatch = useDispatch()
    const handleComplete = (id) =>{
      dispatch(TaskIsDone(id))
    }

    return (
        <div className='task'>
            <p className={todo.isDone ? "undo" : null}>{todo.description}</p>
            <button onClick={()=>handleComplete(todo.id)}>{todo.isDone ? "Undo" :"Complete"}</button>
            <Edit todo={todo}/>
            <RiDeleteBin6Line onClick={()=>HandleDelete(todo.id)}/>

        </div>
    )
}

export default Task
