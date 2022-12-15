import React from 'react'
import { Link } from 'react-router-dom'

export const CoaVideos = () => {
  return (
    <>
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
          <h1 className="display-3 text-white animated slideInRight">Coa en Acción</h1>
          <nav aria-label="breadcrumb">
              <ol className="breadcrumb animated slideInRight mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Pages</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Videos Coa revestimientos</li>
              </ol>
          </nav>
      </div>
  </div>
  
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container text-center">
          <div className="row justify-content-center">
              <div className="col-lg-6">
                  <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                  <h1 className="display-1">En Construcción</h1>
                  <h1 className="mb-4">Page Not Found</h1>
                  <p className="mb-4">
                    pronto estaremos subiendo videos de nuestros trabajos realizados
                  </p>
                      <Link to="/"><a className="btn btn-primary py-3 px-5" href="">Go Back To Home</a></Link>
              </div>
          </div>
      </div>
  </div>
  
  </>
  )
}
