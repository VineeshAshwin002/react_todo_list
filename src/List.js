
import React from "react"


import  Line  from "./Line";


const List = ({items,handleClick,handleDelete}) => {
  return (
    
    <ul>
        
        {items.map((item)=> (

            <Line
            key={item.id}
            item = {item}
            handleClick={handleClick}
            handleDelete={handleDelete}
            />
          

        ))}
       
      
      </ul>
    
  )
}

export default List