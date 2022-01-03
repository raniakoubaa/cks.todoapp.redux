import React from 'react'

const Filter = ({HandleDone}) => {
    return (
        <div>
           <button onClick={()=>HandleDone()}> Done </button> 
           <button> Complete</button>
        </div>
    )
}

export default Filter
