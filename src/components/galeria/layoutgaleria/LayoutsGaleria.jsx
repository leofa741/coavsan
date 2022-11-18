import React from 'react'
import { CentroRadFormosa } from '../Formosa/CentroRadFormosa'

export const LayoutsGaleria = ({children,titulo,subtitulo,descrip,titulo1,titulo2,titulo3,descrip1,descrip2,descrip3}) => {
  return (
 <>
 <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="position-relative me-lg-4">
                       

                      {children}
                     
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <p className="fw-medium text-uppercase text-primary mb-2">{titulo}</p>
                    <h1 className="display-5 mb-4">{subtitulo}</h1>
                    <p className="mb-4">
                        {descrip}
                    </p>
                    <div className="row gy-4">
                        <div className="col-12">
                            <div className="d-flex">
                                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <div className="ms-4">
                                    <h4>{titulo1}</h4>
                                    <span>{descrip1}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex">
                                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <div className="ms-4">
                                    <h4>{titulo2}</h4>
                                    <span>{descrip2}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex">
                                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <div className="ms-4">
                                    <h4>{titulo3}</h4>
                                    <span>{descrip3}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
 </>
  )
}
