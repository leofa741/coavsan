import React from 'react'
import { CentroRadFormosa } from '../Formosa/CentroRadFormosa'

export const LayoutsGaleria = ({children}) => {
  return (
 <>
 <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="position-relative me-lg-4">
                        {/* <img className="img-fluid w-100" src="./src/assets/img/centroradiologicoformosa/1.jpeg" alt=""/> */}

<CentroRadFormosa />

                     
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <p className="fw-medium text-uppercase text-primary mb-2">Why Choosing Us!</p>
                    <h1 className="display-5 mb-4">Few Reasons Why People Choosing Us!</h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                        eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                    </p>
                    <div className="row gy-4">
                        <div className="col-12">
                            <div className="d-flex">
                                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <div className="ms-4">
                                    <h4>Experienced Workers</h4>
                                    <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                                        dolore erat amet</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex">
                                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <div className="ms-4">
                                    <h4>Reliable Industrial Services</h4>
                                    <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                                        dolore erat amet</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex">
                                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <div className="ms-4">
                                    <h4>24/7 Customer Support</h4>
                                    <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                                        dolore erat amet</span>
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
