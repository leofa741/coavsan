import React from 'react'

export const CalendarNavBar = () => {
  return (
    <>
    <div className='navbar navbar-dark bg-dark mb-4 px-4' >
    <span  >
      <i className='fas fa-calendar-alt fa-2x' >&nbsp;COA</i>
      
    </span>
    <button className='btn btn-outline-danger'>
      <i className='fas fa-sign-out-alt'></i>
      <span> Logout</span>
    </button>
    

     </div>
    </>
   
  )
}
