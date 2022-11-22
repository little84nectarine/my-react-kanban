import React, { useState, useMemo } from 'react'
import './App.css'
import MyButton from './components/button/MyButton'
import EventBar from './components/sidebox/EventBar'
import TaskBox from './components/taskbox/TaskBox'

export default function App() {
  //缓存初始化事件
  const initEvent = useMemo(() => [
    {
      title: 'Add a new event',
      toDo: [{title:'Title',content:'Comtents'}],
      inProgress: [],
      completed: [],
    },
  ], [])

  //事件列表
  const [events, setEvents] = useState(() => {
    return JSON.parse(localStorage.getItem('events'))&&JSON.parse(localStorage.getItem('events'))[0]
      ? JSON.parse(localStorage.getItem('events'))
      : initEvent
  })
  //当前事件
  const [currentEvent, setCurrentEvent] = useState(events[0])

  const addEvent = () => {
    const eventTitle = prompt('Please input the title for new event');
    if(!eventTitle) return;
    const newEvent = {
      title: eventTitle,
      toDo: [],
      inProgress: [],
      completed: [],
    }
    const list = [...events, newEvent];
    setEvents(list)
    setCurrentEvent(newEvent)
    setTimeout(() => {
      localStorage.setItem('events', JSON.stringify(list))
    }, 0);
  }

  return (
    <div className='app'>
      <div className='sidebar-wrapper'>
        <div className='logo'>.kanban</div>
        <MyButton handleClick={addEvent} />
        <div className="eventBar">
          <EventBar
            currentEvent={currentEvent}
            setCurrentEvent={setCurrentEvent}
            setEvents={setEvents}
            events={events}></EventBar>
        </div>
      </div>
      <div className='taskbox-wrapper'>
        <TaskBox
          initEvent={initEvent}
          currentEvent={currentEvent}
          setCurrentEvent={setCurrentEvent}
          setEvents={setEvents}
          events={events}
        ></TaskBox>
      </div>
    </div>
  )
}
