import React from 'react'

const Task = ({todo,handleComplete,HandleDelete}) => {
    return (
        <div className='task'>
            <p className={todo.isDone ? "todo" : null}>{todo.description}</p>
            {/* <button onClick={()=>handleComplete(todo.id)}>{todo.isDone ? "Undo" :"Complete"}</button> */}
            <button onClick={()=>HandleDelete(todo.id)}>Delete</button>
        </div>
    )
}

export default Task
