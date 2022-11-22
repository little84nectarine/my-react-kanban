import React from 'react'
import './sidebox.css'
import Event from './Event'

export default function EventBar({ events, currentEvent, setCurrentEvent }) {
  return (
    <div className='eventBarWapper'>
      {
        events.map((item) => {
          return (
            <Event key={item.title}
              events={events}
              setCurrentEvent={setCurrentEvent}
              currentEvent={currentEvent}>{item.title}</Event>
          )
        })
      }
    </div>
  )
}
