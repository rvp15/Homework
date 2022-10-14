import React from 'react'
import EmptyComp from './EmptyComp';

function Website(props) {
  return (
    <div  className='item website' >
      <h2>Website Visitors</h2>
      <h1>{props.num3}</h1>
      <EmptyComp/>
    </div>
  )
}

export default Website
