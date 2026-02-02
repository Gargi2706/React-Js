import React from 'react'

export default function Info() {
const name = "Gnp"
const currentyear = new Date();
 const stylee = {
  color : "red",
  fontSize : " 30px "
}

  return (
    <div>
      <p style={stylee}>created by {name}</p>
      <p>copyright {currentyear.getFullYear()} </p>
    </div>
  )
}
