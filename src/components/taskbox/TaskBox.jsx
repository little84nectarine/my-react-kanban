import React from 'react'
import './index.css'
import Header from './Header'
import Content from './Content'

export default function TaskBox({initEvent, currentEvent,setCurrentEvent, setEvents,events}) {
  const removeCurrentEvent = () =>{
    let newEvents = [...events]
    let index = newEvents.findIndex(item =>{
      return item.title === currentEvent.title
    })
    newEvents.splice(index, 1)
    if (!newEvents[0]) {
      newEvents = initEvent;
    }
    localStorage.setItem('events', JSON.stringify(newEvents))
    setCurrentEvent(newEvents[0])
    setEvents(newEvents)
  }
  
  return (
    <div className='TaskBoxWrapper'>
      <Header handleClick={removeCurrentEvent } />
      <Content
        currentEvent={currentEvent}
        setCurrentEvent={setCurrentEvent}
        setEvents={setEvents}
        events={events}
      />
    </div>
  )
}
