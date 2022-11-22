import React from 'react'
import Column from './Column'

export default function Content({ currentEvent, setCurrentEvent, setEvents, events }) {
    const add = (witchColumn) => {
        return () => {
            const title = prompt('Enter task name:');
            const details = prompt('Enter details:');
            //list是新的todo
            const list = [...currentEvent[witchColumn], {
                title: title,
                content: details,
            }];
            // 更新current
            let newCurrent = { ...currentEvent, [witchColumn]: list }
            let newEvents = events.map(item => {
                if (item.title === currentEvent.title) {
                    return newCurrent
                } else return item;
            })
            localStorage.setItem('events', JSON.stringify(newEvents))
            setCurrentEvent(newCurrent)
            setEvents(newEvents)
        }
    }

    return (
        <div className='content'>
            <Column
                currentEvent={currentEvent}
                setCurrentEvent={setCurrentEvent}
                setEvents={setEvents}
                events={events}
                whichColumn={'toDo'}
                handleClick={add('toDo')} tasks={currentEvent.toDo}>To do</Column>
            <Column
                currentEvent={currentEvent}
                setCurrentEvent={setCurrentEvent}
                setEvents={setEvents}
                events={events}
                whichColumn={'inProgress'}
                handleClick={add('inProgress')} tasks={currentEvent.inProgress}>In progress</Column>
            <Column
                currentEvent={currentEvent}
                setCurrentEvent={setCurrentEvent}
                setEvents={setEvents}
                events={events}
                whichColumn={'completed'}
                handleClick={add('completed')} tasks={currentEvent.completed}>Completed</Column>
        </div>

    )
}
