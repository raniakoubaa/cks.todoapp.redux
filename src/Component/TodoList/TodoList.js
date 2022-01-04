import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import './TodoList.css'
import Task from '../Task/Task'

const TodoList = ({todo, HandleDelete}) => {
    
const [sort, setsort] = useState("")

    return (
      
        <div>
            {/* <Button variant="primary" onClick={()=> {dispatch(FilterTask('all'));setsort(true)}}> All </Button>
            <Button variant="secondary" onClick={()=>{dispatch(FilterTask('done'));setsort(false)}}>  Done </Button>
            <Button variant="success" onClick={()=>{dispatch(FilterTask ('complete'));setsort(false)}}> Complete</Button> */}
            <Button className='button' variant="primary" onClick={()=> setsort("")}> All </Button>
            <Button  className='button' variant="secondary" onClick={()=>setsort(true)}>  Done </Button>
            <Button   className='button' variant="success" onClick={()=>setsort(false)}> Complete</Button>
            { 
            todo.map((elt,index) => (elt.isDone === sort || sort === "") ?
             <Task todo={elt} key={index} HandleDelete={HandleDelete}/>: "")
        
        }

        </div>
    )
}

export default TodoList
