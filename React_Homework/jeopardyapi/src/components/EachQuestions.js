import React from 'react'
import { useState } from 'react';

function EachQuestions(props) {
 
  const handleToggle = () => setActive(!isActive)
  let [isActive, setActive] = useState(false);
  return (
    <div className='box1'>
        <button className="btn" onClick={handleToggle}>Click to Reveal Answer</button>
        {isActive ? <span> {props.data.answer}</span>: null}
       { console.log(props.data)}
    </div>
  )
}

export default EachQuestions
