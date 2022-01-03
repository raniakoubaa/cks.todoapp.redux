import React from 'react'
import Task from '../Task/Task'

const TodoList = ({todo, HandleDelete}) => {
    return (
        <div>
            {todo.map((elt,index) => <Task todo={elt} key={index} HandleDelete={HandleDelete}/>)}
        </div>
    )
}

export default TodoList
