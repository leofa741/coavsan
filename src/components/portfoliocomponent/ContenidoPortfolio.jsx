import { maxWidth } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

export const ContenidoPortfolio = () => {
  return (
   <>
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto pb-4 wow fadeInUp" data-wow-delay="0.1s" >
                <p className="fw-medium text-uppercase text-primary mb-2">Portfolio</p>
                <h1 className="display-5 mb-4"> Nuestras Obras</h1>                
            </div>

            <div className="row gy-5 gx-4">

                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item">
                        <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/62.jpeg?raw=true" alt=""/>
                        <div className="service-img">
                            <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/51.jpeg?raw=true" alt=""/>
                        </div>
                        <div className="service-detail">
                            <div className="service-title">
                                <hr className="w-25"/>
                                <h3 className="mb-0">Centro Radiológico Formosa</h3>
                                <hr className="w-25"/>
                            </div>
                            <div className="service-text">
                                <p className="text-white mb-0">Laboratorio Radiologico Formosa</p>
                            </div>
                        </div>
                       <Link to="/radiologoaformosa" className="btn btn-primary">Ver más</Link>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item">
                        <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/project-1.jpg?raw=true" alt=""/>
                        <div className="service-img">
                            <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/project-1.jpg?raw=true" alt=""/>
                        </div>
                        <div className="service-detail">
                            <div className="service-title">
                                <hr className="w-25"/>
                                <h3 className="mb-0">Power & Energy Engineering</h3>
                                <hr className="w-25"/>
                            </div>
                            <div className="service-text">
                                <p className="text-white mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                                    lorem sed diam stet diam sed stet.</p>
                            </div>
                        </div>
                        <a className="btn btn-light" href="">Read More</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item">
                        <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/project-1.jpg?raw=true" alt=""/>
                        <div className="service-img">
                            <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/project-1.jpg?raw=true" alt=""/>
                        </div>
                        <div className="service-detail">
                            <div className="service-title">
                                <hr className="w-25"/>
                                <h3 className="mb-0">Plumbing & Water Treatment</h3>
                                <hr className="w-25"/>
                            </div>
                            <div className="service-text">
                                <p className="text-white mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                                    lorem sed diam stet diam sed stet.</p>
                            </div>
                        </div>
                        <a className="btn btn-light" href="">Read More</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item">
                        <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/project-1.jpg?raw=true" alt=""/>
                        <div className="service-img">
                            <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/project-1.jpg?raw=true" alt=""/>
                        </div>
                        <div className="service-detail">
                            <div className="service-title">
                                <hr className="w-25"/>
                                <h3 className="mb-0">Civil & Gas Engineering</h3>
                                <hr className="w-25"/>
                            </div>
                            <div className="service-text">
                                <p className="text-white mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                                    lorem sed diam stet diam sed stet.</p>
                            </div>
                        </div>
                        <a className="btn btn-light" href="">Read More</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item">
                        <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/project-1.jpg?raw=true" alt=""/>
                        <div className="service-img">
                            <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/project-1.jpg?raw=true" alt=""/>
                        </div>
                        <div className="service-detail">
                            <div className="service-title">
                                <hr className="w-25"/>
                                <h3 className="mb-0">Power & Energy Engineering</h3>
                                <hr className="w-25"/>
                            </div>
                            <div className="service-text">
                                <p className="text-white mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                                    lorem sed diam stet diam sed stet.</p>
                            </div>
                        </div>
                        <a className="btn btn-light" href="">Read More</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item">
                        <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/project-1.jpg?raw=true" alt=""/>
                        <div className="service-img">
                            <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/project-1.jpg?raw=true" alt=""/>
                        </div>
                        <div className="service-detail">
                            <div className="service-title">
                                <hr className="w-25"/>
                                <h3 className="mb-0">Plumbing & Water Treatment</h3>
                                <hr className="w-25"/>
                            </div>
                            <div className="service-text">
                                <p className="text-white mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                                    lorem sed diam stet diam sed stet.</p>
                            </div>
                        </div>
                        <a className="btn btn-light" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}
