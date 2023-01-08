import React from 'react'

export const CalendarEventBox = ({event}) => {
    const {title, notes,   user} = event;

  return (
    <> 
    <div className="container">
    <div className="row">
    <div className="col-md-6">
    <div className="card"
    style={{width: '48rem',
    height: '7rem',
    backgroundColor: '#FF5E14',
    borderRadius: '7px',
    marginTop: '5px',
    marginBottom: '5px',
    marginLeft: '5px',
    marginRight: '5px',
    }}
    >
    <div className="card-body">
    <h5 className="card-title"
    style={{color: 'red',
    fontWeight: 'bold',
    fontSize: '14px'}}
    >{title}</h5>
    <p className="card-text"
    style={{color: 'black',
    fontWeight: 'bold',
    fontSize: '13px'}}

    >{notes}</p>
   
    <p className="card-text">{user.name}</p>
    </div>
    </div>
    </div>
    </div>
    </div>

    
    
    </>
   
  )
}
