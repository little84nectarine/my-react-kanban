import React from 'react'
import MyButton from '../button/MyButton'
import Task from './Task'

export default function Column({ provided, snapshot, whichColumn, children, tasks, handleClick, currentEvent, setCurrentEvent, setEvents, events }) {

  // console.log(tasks);
  return (
    <div className='column'>
      <div className='columnTitle'>{children}</div>
      <MyButton handleClick={handleClick} />
      <div className="box"
        {...provided.droppableProps}
        ref={provided.innerRef}
      >
        {
          tasks.map((item, index) => {
            return (
              <Task
                draggableId={item.content}
                index={index}
                currentEvent={currentEvent}
                setCurrentEvent={setCurrentEvent}
                setEvents={setEvents}
                events={events}
                whichColumn={whichColumn}
                title={item.title} content={item.content} key={item.content} />
            )
          })
        }
        {provided.placeholder}
      </div>
    </div>
  )
}
