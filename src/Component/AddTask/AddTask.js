import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions/TodoAction';

const AddTask = () => {
const dispatch = useDispatch()
    const [value, setValue] = useState('');
    const handleOnChange = (e) => {
        setValue(e.target.value)
    }
    const handleAdd = (newTask) => {
    if(value){
      dispatch(addTask(newTask))
    }
    else{
      alert("empty value")
    }
      
    }
   

    return (
         <div className='add'>
        <input type="text" onChange={handleOnChange} value={value} placeholder="You text here" />
        <button onClick={()=>{ handleAdd(value); setValue('')}}>Add</button>
      </div> 

    )
}

export default AddTask
