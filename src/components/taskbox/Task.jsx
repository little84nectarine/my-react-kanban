import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

export default function Task({ draggableId, index, whichColumn, title, content, currentEvent, setCurrentEvent, setEvents, events }) {

  const handelClick = () => {
    let newEvents = [...events]
    let newCurrent = { ...currentEvent }
    let index = newCurrent[whichColumn].findIndex(item => {
      return item.title === title
    })
    let eventIndex = newEvents.findIndex(item => {
      return item.title === currentEvent.title
    })
    newCurrent[whichColumn].splice(index, 1)
    newEvents[eventIndex] = newCurrent;
    localStorage.setItem('events', JSON.stringify(newEvents))
    setCurrentEvent(newCurrent)
    setEvents(newEvents)
  }

  return (
    <Draggable draggableId={draggableId} index={index}>
      {
        (provided, snapshot) => (
          <div className='taskBox'
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <h2 className='taskTitle'>{title}</h2>
            <p className='taskContent'>{content}</p>
            <div onClick={handelClick} className='delete-box'>-</div>
          </div>
        )
      }
    </Draggable>

  )
}
