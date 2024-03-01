import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <div className='card1'>
        {props.children}
        </div>
    </div>
  )
}

export default Card