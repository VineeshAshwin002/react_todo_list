import React from "react"

import { MdDeleteOutline } from "react-icons/md";

const Line = ({item,handleClick,handleDelete}) => {
  return (
    <li className='item'   >
    <input
     type="checkBox" 
     checked={item.checked}
     onChange={()=> handleClick(item.id)}
    />
    <label
    style={(item.checked)?
    {textDecoration: 'line-through'}:null}
    onDoubleClick={()=> handleClick(item.id)}>{item.item}</label>
   <MdDeleteOutline
   role="button"
   tabIndex="0"
   araia-label={`Delete {${item.item}}`}
   
   onClick={()=> handleDelete(item.id)}
   />
  </li>
  )
}

export default Line