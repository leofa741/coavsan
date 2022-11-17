import React from 'react'

export const BannerPortfolio = ({descrip}) => {
  return (
    <section classNameName="section ">
    <div className="container-fluid page-header-portfolio   py-5 mb-5 wow fadeIn">
        <div className="row">
            <div className="col-md-12  text-white">
          
                <div className="text-white ">
             
                    <h3 className="text-white ">{descrip}</h3>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
