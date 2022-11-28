import React from 'react'

import { GaleriaImgComponent } from '../components/galeria/galeriaimg/GaleriaImgComponent'
import { LayoutsGaleria } from '../components/galeria/layoutgaleria/LayoutsGaleria'
import { BannerPortfolio } from '../ui'



export const JesusMariaCdba = () => {
  return (
    <>
    <BannerPortfolio
    descrip={"Nuestras Obras"} />   
    <br />

    <LayoutsGaleria
    children={<GaleriaImgComponent tittle="ObraJesúsMaríacordoba" value={100} />}
 
    
    titulo={" Jesus Maria Cdba"}
    subtitulo={"Jesus Maria Cdba"}
    descrip={"instalación de revestimientos en pisos con revestimiento  eclipse de tarket y revestimientos en paredes con revestimientos de vinilicos y pintura"}
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
