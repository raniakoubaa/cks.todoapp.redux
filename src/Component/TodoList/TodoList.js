import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { FilterTask } from '../../redux/actions/TodoAction'
import Task from '../Task/Task'

const TodoList = ({todo, HandleDelete}) => {
    const dispatch = useDispatch()
const [sort, setsort] = useState(true)

    return (
      
        <div>
            <Button variant="primary" onClick={()=> {dispatch(FilterTask('all'));setsort(true)}}> All </Button>
            <Button variant="secondary" onClick={()=>{dispatch(FilterTask('done'));setsort(false)}}>  Done </Button>
            <Button variant="success" onClick={()=>{dispatch(FilterTask ('complete'));setsort(false)}}> Complete</Button>
            { 
            todo.map((elt,index) => <Task todo={elt} key={index} HandleDelete={HandleDelete}/>)
        
        }

        </div>
    )
}

export default TodoList
