import React from 'react'

import { GaleriaImgComponent } from '../components/galeria/galeriaimg/GaleriaImgComponent'
import { LayoutsGaleria } from '../components/galeria/layoutgaleria/LayoutsGaleria'
import { BannerPortfolio } from '../ui'



export const HospitalLagunaBlanca = () => {
  return (
    <>
    <BannerPortfolio
    descrip={"Nuestras Obras"} />   
    <br />

    <LayoutsGaleria
    children={<GaleriaImgComponent tittle="hospital-laguna-blanca" value={100} />}
        
    titulo={"Hospital Laguna Blanca"}
    subtitulo={"Hospital Laguna Blanca"}
    descrip={"instalación de revestimientos en pisos con revestimiento de baldosas vinilicos y revestimientos en paredes con revestimientos de vinilicos y pintura"}
    titulo1={"Pisos"}
    descrip1={"instalación de revestimientos en pisos con revestimiento de baldosas vinilicos"}
    titulo2={"Paredes"}
    descrip2={"revestimientos en paredes con revestimientos de vinilicos y pintura"}
    titulo3={"Pintura"}
    descrip3={"pintura"}
    />      
   </>
  )
}
