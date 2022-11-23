import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
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

    const reorder = (...parms) =>{
        const currentEvent = parms[0]
        const sourseIndex = parms[1]
        const soursefield = parms[2]
        const desIndex = parms[3]
        const desfield = parms[4]
        // const newCurrent = JSON.parse(JSON.stringify(currentEvent))
        const newCurrent = {...currentEvent}
        // console.log(newCurrent[soursefield].splice(sourseIndex, 1));
        let item = newCurrent[soursefield].splice(sourseIndex, 1)
        newCurrent[desfield].splice(desIndex, 0, ...item)
        return newCurrent
    }
    
    const onDragEnd = (result) => {
        if (!result.destination) {
          return;
        }
        const newCurrent = reorder(currentEvent, result.source.index,result.source.droppableId, result.destination.index,result.destination.droppableId);
        let newEvents = events.map(item => {
            if (item.title === currentEvent.title) {
                return newCurrent
            } else return item;
        })
        localStorage.setItem('events', JSON.stringify(newEvents))
        setCurrentEvent(newCurrent)
        setEvents(newEvents)
        // setList(items);
        // console.log(result.source.droppableId, '---', result.destination.index);
    };

    return (
        <DragDropContext
            onDragEnd={onDragEnd}
        >
            <div className='content'>
                <Droppable droppableId='toDo'>
                    {
                        (provided, snapshot) => (
                            <Column
                                provided={provided}
                                snapshot={snapshot}
                                currentEvent={currentEvent}
                                setCurrentEvent={setCurrentEvent}
                                setEvents={setEvents}
                                events={events}
                                whichColumn={'toDo'}
                                handleClick={add('toDo')} tasks={currentEvent.toDo}
                            >To do</Column>
                        )
                    }
                </Droppable>
                <Droppable droppableId='inProgress'>
                    {
                        (provided, snapshot) => (
                            <Column
                                provided={provided}
                                snapshot={snapshot}
                                currentEvent={currentEvent}
                                setCurrentEvent={setCurrentEvent}
                                setEvents={setEvents}
                                events={events}
                                whichColumn={'inProgress'}
                                handleClick={add('inProgress')} tasks={currentEvent.inProgress}
                            >In progress</Column>
                        )
                    }
                </Droppable>
                <Droppable droppableId='completed'>
                    {
                        (provided, snapshot) => (
                            <Column
                                provided={provided}
                                snapshot={snapshot}
                                currentEvent={currentEvent}
                                setCurrentEvent={setCurrentEvent}
                                setEvents={setEvents}
                                events={events}
                                whichColumn={'completed'}
                                handleClick={add('completed')} tasks={currentEvent.completed}
                            >Completed</Column>
                        )
                    }
                </Droppable>
            </div>
        </DragDropContext>


    )
}
