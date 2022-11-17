import React from 'react'

export const HeaderComponent = ({title}) => {
  return (
<>
<div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <h1 className="display-3 text-white animated slideInRight">{title}</h1>
           
        </div> 
    </div>

</>
  )
}
