import { addHours } from 'date-fns'
import React from 'react'
import { useCalendarStore, useUiStore } from '../../hooks'
import './fabaddnew.css'

export const FabAddNew = () => {

    const { onDateModalOpen  }=useUiStore()
    const {
        activeEvent,
        events,
        setDateChange,

    }=useCalendarStore()

    const onChangeDateModalOpen = () => {
        setDateChange({
            title: '',
            notes: '',
            amount: 0,
            start: new Date(),
            end: addHours (new Date(), 2),
            bgColor: '#FF5E14',
            user: {
                _id: '123',
                name: 'Jorge'
            }
        })
        onDateModalOpen()
    }




  return (
    <button className="btn btn-primary fabb"
    onClick={onChangeDateModalOpen}
    >
    

    </button>
  )
}
