import React, { useState } from 'react'
import { Calendar} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'


import { CalendarNavBar } from './CalendarNavBar'
import { addHours} from 'date-fns'
import { localizer } from '../helpers/CalendarLocalizer'
import { getMessagesEs } from '../helpers/getMessages'
import { CalendarEventBox } from './CalendarEventBox'
import { CalendarModal } from './CalendarModal'
import { useUiStore } from '../../hooks'




const myEventsList = [
    {
        id: 0,
        title: 'Event very long title',
        notes : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        allDay: true,
        start: new Date(2023, 1, 4),
        end: addHours (new Date(2023, 1, 4), 3),
        bgColor: '#fafafa',
        notesColor: 'black',
        user: {
            _id: '123',
            name: 'Carlos'
        }

    },
    {
       id: 1,
        title: 'All Day Event very long title',
        notes : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        allDay: true,
        start: new Date(2023, 1, 1),
        end: addHours (new Date(2023, 1, 1), 2),
        bgColor: '#fafafa',
        notesColor: 'black',
        user: {
            _id: '123',
            name: 'Carlos'
        }
        
    },
    {
        id: 2,
        title: 'All Day Event very long title',
        notes : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        allDay: true,
        start: new Date(2023, 1, 2),
        end: addHours (new Date(2023, 1, 2), 2),
        bgColor: '#FF5E14',
        notesColor: 'black',
        user: {
            _id: '123',
            name: 'Carlos'
        }
        
    },
]


export const CalendarComponents = () => {
   
    const { onDateModalOpen }=useUiStore()

    
    const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month' )

    const eventStyleGetter = (event, start, end, isSelected) => { 
            let style = {
                backgroundColor: '#FF5E14',
                borderRadius: '7px',
                opacity: 0.8,
                color: 'black',
                border: '2px',
                display: 'block'
            };
            return {
                style: style
            };
    }

    const onDoubleClick = (e) => {
      
        onDateModalOpen()
    }

    const onSelectEvent = (e) => {
        console.log({ selectEvent: e});
    }

    const onView = (e) => {
        console.log({ onView: e});
        setLastView(e)
        localStorage.setItem('lastView', e)

    }


  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />     
            
  <CalendarNavBar  />
  <Calendar
      culture='es-ES'
      localizer={localizer}
      events={myEventsList}
      defaultView={lastView}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 600 ,
        margin: '0 auto',
        width: '98%',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
        padding: '10px',
        marginBottom: '20px',       
        }}
        messages={getMessagesEs()}
        eventPropGetter={ eventStyleGetter}
        components={{
            event: CalendarEventBox
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onView}
        selectable={true}
            />   

            <CalendarModal />
    
    </>
  )
}
