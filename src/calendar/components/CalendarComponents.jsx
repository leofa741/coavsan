import React from 'react'
import { Calendar} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { Link } from 'react-router-dom'
import { BlogComponet } from './BlogComponet'
import { CalendarNavBar } from './CalendarNavBar'
import { addHours} from 'date-fns'
import { localizer } from '../helpers/CalendarLocalizer'
import { getMessagesEs } from '../helpers/getMessages'


const myEventsList = [
    {
        id: 0,
        title: 'All Day Event very long title',
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
        bgColor: '#fafafa',
        notesColor: 'black',
        user: {
            _id: '123',
            name: 'Carlos'
        }
        
    },
]


export const CalendarComponents = () => {

    const eventStyleGetter = (event, start, end, isSelected) => {
          console.log(event, start, end, isSelected)
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


  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />    
    
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <h1 className="display-3 text-white animated slideInRight">Agenda</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb animated slideInRight mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item " aria-current="page">Calendario</li>
                </ol>
            </nav>
        </div>
    </div>
            
  <CalendarNavBar  />
  <Calendar
      culture='es-ES'
      localizer={localizer}
      events={myEventsList}
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

    />   
    
    </>
  )
}
