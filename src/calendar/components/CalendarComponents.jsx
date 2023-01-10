import React, { useState } from 'react'
import { Calendar} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'


import { CalendarNavBar } from './CalendarNavBar'

import { localizer } from '../helpers/CalendarLocalizer'
import { getMessagesEs } from '../helpers/getMessages'
import { CalendarEventBox } from './CalendarEventBox'
import { CalendarModal } from './CalendarModal'
import { useUiStore ,useCalendarStore} from '../../hooks'
import { FabAddNew } from './FabAddNew'


export const CalendarComponents = () => {
   
    const { onDateModalOpen }=useUiStore()

    const { events, setDateChange } = useCalendarStore()

    
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
        console.log({ onSelectEvent: e});
        setDateChange(e)
        onDateModalOpen()
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
      events={events}
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
            <FabAddNew  />
    
    </>
  )
}
