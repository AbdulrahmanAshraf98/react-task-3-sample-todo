import React from 'react'
function Listitem(props) {
  return (
    props.tasks.length > 0?<div>
        {props.tasks.map(element=>{
          return(
            <div key={element.id} id={element.id}>
                  <span className="task">task={element.value}</span>
                  <button onClick={props.delete}>delete</button>
                  
          </div>
          )
        })}
    </div>:""
  )
}

export default Listitem
