import React from 'react'
import { BannerComponent, BannerTelefonos, CarrouselComponent, HeaderComponent } from '../../ui'

export const HomeComponent = () => {
  return (
   <>
<CarrouselComponent />


 <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6">
                    <div class="row gx-3 h-100">
                        <div class="col-6 align-self-start wow fadeInUp" data-wow-delay="0.1s">
                            <img class="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/about-1.jpg?raw=true"/>
                        </div>
                        <div class="col-6 align-self-end wow fadeInDown" data-wow-delay="0.1s">
                            <img class="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/about-2.jpg?raw=true"/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <p class="fw-medium text-uppercase text-primary mb-1">About Us</p>
                    <h1 class="display-5 mb-4">COA Revestimientos Ofrecemos soluciones integrales instalando revestimientos vinilicos</h1>
                    <p class="mb-4">Contamos con Trayectoria en el mercado, especializada en la instalación de pisos y revestimientos para instituciones en general. Abocados a satisfacer las necesidades de nuestros clientes, cumpliendo con elevados estándares de calidad y manteniendo la mejor relación costo-beneficio. Basándonos en la búsqueda permanente de la mejora continua, contamos con un equipo de asesores altamente calificados y dedicados, para así responder a sus requerimientos; brindando la mejor opción y solución a sus proyectos. Los invitamos a recorrer nuestra amplia gama de productos; tengan en cuenta que más que productos, nosotros ofrecemos un servicio.
                    </p>
                    <div class="d-flex align-items-center mb-4">
                        <div class="flex-shrink-0 bg-primary p-4">
                           
                            <h5 class="text-white">Algunos</h5>
                            <h1 class="display-2">de</h1>
                            <h5 class="text-white">Servicios</h5>
                        </div>
                        <div class="ms-4">
                            <p><i class="fa fa-check text-primary me-2"></i>Pisos de pvc</p>
                            <p><i class="fa fa-check text-primary me-2"></i>Pisos de linóleo</p>                           
                            <p><i class="fa fa-check text-primary me-2"></i>Pisos de goma en baldosas</p>
                            <p><i class="fa fa-check text-primary me-2"></i>Pisos de goma</p>
                            <p class="mb-0"><i class="fa fa-check text-primary me-2"></i>Pisos de alfombra en baldosas</p>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>



  <BannerComponent  descrip="Ofrecemos soluciones integrales instalando pisos y revestimientos vinilicos en todo el País."  />

  <div class="container-fluid facts my-5 p-5">
        <div class="row g-5">
            <div class="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.1s">
                <div class="text-center border p-5">
                    <i class="fa fa-certificate fa-3x text-white mb-3"></i>
                    <h1 class="display-2 text-primary mb-0" data-toggle="counter-up">25</h1>
                    <span class="fs-5 fw-semi-bold text-white">Years Experience</span>
                </div>
            </div>
            <div class="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.3s">
                <div class="text-center border p-5">
                    <i class="fa fa-users-cog fa-3x text-white mb-3"></i>
                    <h1 class="display-2 text-primary mb-0" data-toggle="counter-up">135</h1>
                    <span class="fs-5 fw-semi-bold text-white">Team Members</span>
                </div>
            </div>
            <div class="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.5s">
                <div class="text-center border p-5">
                    <i class="fa fa-users fa-3x text-white mb-3"></i>
                    <h1 class="display-2 text-primary mb-0" data-toggle="counter-up">957</h1>
                    <span class="fs-5 fw-semi-bold text-white">Happy Clients</span>
                </div>
            </div>
            <div class="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.7s">
                <div class="text-center border p-5">
                    <i class="fa fa-check-double fa-3x text-white mb-3"></i>
                    <h1 class="display-2 text-primary mb-0" data-toggle="counter-up">1839</h1>
                    <span class="fs-5 fw-semi-bold text-white">Projects Done</span>
                </div>
            </div>
        </div>
    </div>
   
   </>
  )
}
