import React from 'react'

export const BannerContact = ({descrip}) => { 
  return (
    <section className="section ">
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
          <h1 className="display-3 text-white animated slideInRight">Coa en Acción</h1>
          <nav aria-label="breadcrumb">
              <ol className="breadcrumb animated slideInRight mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Pages</a></li>
                  <li className="breadcrumb-item active" aria-current="page">{descrip}</li>
              </ol>
          </nav>
      </div>
  </div>
</section>
  )
}
