import React from 'react'

export const BannerComponent = ({title}) => {
  return (
    <section classNameName="section db p120">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
          
                <div className="tagline-message text-center">
                <h1 className="display-3 text-white animated slideInRight">{title}</h1>
                    <h3>Ofrecemos soluciones integrales instalando pisos y revestimientos vinilicos en todo el País.</h3>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
