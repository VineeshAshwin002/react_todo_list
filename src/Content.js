import React from 'react'


import List from './List';
const Content = ({items,handleClick,handleDelete}) => {
  
    

  
  return (
   
      <>
          {(items.length)?(
       
               
        <List
        items = {items}
        handleClick = {handleClick}
        handleDelete = {handleDelete}
          />
        ):(
        <p style={{fontSize:'2rem'}}>Your List is Empty</p>
        )
        }
      </>
    
  )
}

export default Content