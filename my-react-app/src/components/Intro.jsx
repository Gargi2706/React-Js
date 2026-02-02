import React from 'react'

export default function Intro() {
const name =" gnp"
 const num = 16;
 const lname = "gothi"

  return (
    <div>
      <h1 className="heading" contentEditable="true">hello {`${name} ${lname}`}</h1>  {/*templete literals*/}
      <p>my lucky number is {num}</p>
    </div>
  )
}
