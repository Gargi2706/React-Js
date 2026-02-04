
import {useState} from 'react'

export default function Hooks() {

    setInterval( UpdateTime  , 1000)
    const timee = new Date().toLocaleTimeString();
   
    const[time , setTime] = useState(timee)

     const [count, setCount] = useState(0);
     const [text, setText] = useState("HELLO")
     const [liked , setLiked] = useState(true)
     const [name , setName] = useState('name')
     const [age , setAge] = useState(20);

     function handleChange(e){
        setText(e.target.value)
        
     }


     function handleLiked(e){
        setLiked(e.target.checked)
     }

     function handleClick() {
    setCount(count + 1);

     }
    function UpdateTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }


  return (
    <div>
     
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>


    <input value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText('HELLO')}>
        Reset
      </button>


      <label>
        <input
          type="checkbox"
          checked={liked}
          onChange={handleLiked}
        />
        I liked this
      </label>
      <p>You {liked ? 'liked' : 'did not like'} this.</p>



      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => setAge(age + 1)}>
        Increment age
      </button>
      <p>Hello, {name}. You are {age}.</p>


      <h1>{time}</h1>
      <button onClick={UpdateTime}>Get Time</button>


    </div>
  )
}
