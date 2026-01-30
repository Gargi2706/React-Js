import './App.css'


function App(){
 const name =" gnp"
 const num = 16;
 const lname = "gothi"
 const currentyear = new Date();
 const stylee = {
  color : "red",
  fontSize : " 30px "
}

const displayDate = new Date();
const displayHrs = displayDate.getHours();
const paraStyle = {
  color : " ",
  fontSize : " "
}
let para;
if(displayHrs < 12){
  para = "good morning"
  paraStyle.color ="blue"
  paraStyle.fontSize = "50px"
  
}else if(displayHrs <18){
  para = "good afternoon"
  paraStyle.color = "green"
  paraStyle.fontSize = "30px"
}else{
  para= " good night"
  paraStyle.color ="yellow"
  paraStyle.fontSize = "20px"
}

  return(
    <div>
      <h1 className="heading" contentEditable="true">hello {`${name} ${lname}`}</h1>  {/*templete literals*/}
      <p>my lucky number is {num}</p>
      <ul>
        <li>abc</li>
        <li>xyz</li>
        <li>pqr</li>
      </ul>

      <p style={stylee}>created by {name}</p>
      <p>copyright {currentyear.getFullYear()} </p>

      <p style = {paraStyle}> {para}</p>
    </div>

  )
}
 
export default App;