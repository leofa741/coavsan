import { LinearProgress, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { customFetch } from '../../database/customfech';
import itemData from '../../database/datadb';
import { BannerComponent } from '../../ui';

export const Contactcontenido = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        
      customFetch(3000,itemData).then((data) => setItems(data));
     }, []);
  
    if (items.length === 0) {
        return (
         <>
 
 <br />
 <BannerComponent  descrip="Ofrecemos soluciones integrales instalando pisos y revestimientos vinilicos en todo el País."  />
 
        
  
       <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      
        <LinearProgress  />
      </Stack>        
          
          </>
        );
        
    }
    
    else{
 
  return (
   <>
   
   <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 justify-content-center mb-5">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="bg-light text-center h-100 p-5">
                        <div className="btn-square bg-white rounded-circle mx-auto mb-4" style={{width: '80px', height: '80px'}}>
                            <i className="fa fa-phone-alt fa-2x text-primary"></i>
                        </div>
                        <h4 className="mb-3">Phone Number</h4>
                        <p className="mb-2">11-3313-8900</p>
                        <p className="mb-2">11-3324-9832</p>
                        <p className="mb-2">11-6235-0978</p>

                        <a className="btn btn-primary px-4" href="tel:+541133318900">Call Now <i
                                className="fa fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="bg-light text-center h-100 p-5">
                        <div className="btn-square bg-white rounded-circle mx-auto mb-4" style={{width: '80px', height: '80px'}}>
                            <i className="fa fa-envelope-open fa-2x text-primary"></i>
                        </div>
                        <h4 className="mb-3">Email Address</h4>
                        <p className="mb-2">cubas_beto@hotmail.com</p>
                     
                        <a className="btn btn-primary px-4" href="mailto:cubas_beto@hotmail.com">Email Now <i
                                className="fa fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="bg-light text-center h-100 p-5">
                        <div className="btn-square bg-white rounded-circle mx-auto mb-4" style={{width: '80px', height: '80px'}}>
                            <i className="fa fa-map-marker-alt fa-2x text-primary"></i>
                        </div>
                        <h4 className="mb-3">Office Address</h4>
                        <p className="mb-2">San Vicente</p>
                        <p className="mb-4">Bs. As. Argentina</p>
                        <a className="btn btn-primary px-4" href="https://goo.gl/maps/RMtXBLfFDny43mSSA" target="_blank">Get Directions <i
                                className="fa fa-arrow-right ms-2"></i></a>
                           
                    </div>
                </div>
            </div>
            <hr 
  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: 1,
    borderColor : '#000000'
  }}
 />
            <div className="row g-5">
                <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="fw-medium text-uppercase text-primary mb-2">Contact Us</p>
                    <h1 className="display-5 mb-4"> Contáctanos para más información  </h1>
                    <p className="mb-4">
                        Si tienes alguna duda o consulta, no dudes en contactarnos. Estaremos encantados de ayudarte.
                        .</p>
                    <div className="row g-4">
                        <div className="col-6">
                            <div className="d-flex">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h6>Call Us</h6>
                                    <span>
11-3313-8900 / 11-3324-9832</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                                    <i className="fa fa-envelope text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h6>Mail Us</h6>
                                    <span>cubas_beto@hotmail.com</span>
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
}