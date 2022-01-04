import React, { useState } from 'react'

const AddTask = ({handleAdd}) => {

    const [value, setValue] = useState('');
    const handleOnChange = (e) => {
        setValue(e.target.value)
    }
   

    return (
         <div className='add'>
        <input type="text" onChange={handleOnChange} value={value} placeholder="You text here" />
        <button onClick={()=>{ handleAdd(value); setValue('')}}>Add</button>
      </div> 

    )
}

export default AddTask
