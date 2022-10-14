import React from 'react'

function AverageRating(props) {
  return (
    <div  className='item avgrating'>
      <h2>Average Rating</h2>
      <h1>{props.num1}</h1>
    </div>
  )
}

export default AverageRating
