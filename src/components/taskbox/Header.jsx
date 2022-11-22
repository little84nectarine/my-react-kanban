import React from 'react'

export default function Header({handleClick}) {
  return (
    <div className='header'>
        <div className='headerLogo'>All Tasks</div>
        <div className='removeButton' onClick={handleClick}>Remove this Event</div>
    </div>
  )
}
