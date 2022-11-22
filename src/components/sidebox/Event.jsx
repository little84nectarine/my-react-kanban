import React from 'react'
import './sidebox.css'

export default function Event({ children, currentEvent, setCurrentEvent, events }) {

  const handleClick = () =>{
    let current = events.find((item) =>item.title === children)
    setCurrentEvent(current)
  }
  
  return (
    <div
      onClick={handleClick}
      className={`event ${children === currentEvent.title
        ? 'event-selected' : ''}`}>
      <span className='eventspan'>
        {children}
      </span>
    </div>
  )
}
