import React from 'react'
import '../App.css'


export default function Entry(props) {
  return (
    <div>
       <dl className='dictionary'>
        <div className="term">
                <dt>
                    <span className='emoji' role='img'>{props.emoji}</span>
                    <span>{props.name}</span>
                </dt>
                <dd>
                  {props.description}
                </dd>
            </div>
       </dl>
    
    </div>
  )
}
