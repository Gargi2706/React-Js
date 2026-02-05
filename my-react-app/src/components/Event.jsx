import React, { useState } from 'react'

export default function Event() {

    const [isMouseOver , setMouseOver] = useState(false)

     function handleMouseover(){
       setMouseOver(true);
     }

     function handleclick(){
        console.log("clicked")
     }

     function handleMouseOut(){
        setMouseOver(false);
     }
     
  return (
    <div className='demo'>
      <button style={{backgroundColor:  isMouseOver ? "blue" : "white" , color: "black"}} 
      onClick ={handleclick}
      onMouseOver={handleMouseover}
      onMouseOut={handleMouseOut}>submit</button>
    </div>
  )
}



