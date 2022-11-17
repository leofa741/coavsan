import React from 'react'
import { BannerTelefonos } from './BannerTelefonos'

export const BannerComponent = ({descrip}) => {
  return (
    <section classNameName="section ">
    <div className="container-fluid page-header   py-5 mb-5 wow fadeIn">
        <div className="row">
            <div className="col-md-12  text-white">
          
                <div className="text-white ">
             
                    <h3 className="text-white ">{descrip}</h3>
                    <BannerTelefonos />
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
