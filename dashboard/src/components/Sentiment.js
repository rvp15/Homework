import React from 'react'

let arr = [960,122,321]
function Sentiment() {
  return (
    <div  className='item sentiment'>
        <h2>Sentiment Analysis</h2>
      <ul>
        {arr.map((item,i)=>{
            return(<li className='list' key={i}>{item}</li>)
        })}
      </ul>
    </div>
  )
}

export default Sentiment
