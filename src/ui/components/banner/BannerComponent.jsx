import React from 'react'

export const BannerComponent = ({descrip}) => {
  return (
    <section classNameName="section db p120">
    <div className="container  page-header">
        <div className="row">
            <div className="col-md-12">
          
                <div className="tagline-message text-center">
             
                    <h3>{descrip}</h3>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
