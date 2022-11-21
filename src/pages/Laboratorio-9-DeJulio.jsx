import React from 'react'
import { CentroRadFormosa } from '../components/galeria/Formosa/CentroRadFormosa'
import { LayoutsGaleria } from '../components/galeria/layoutgaleria/LayoutsGaleria'
import { BannerPortfolio } from '../ui'

export const Laboratorio9DeJulio = () => {
  return (
    <>
    <BannerPortfolio
    descrip={"Nuestras Obras"} />   
    <br />

    <LayoutsGaleria
    children={<CentroRadFormosa tittle="Lab9dejulio" />}
    titulo={"Laboratorio 9 de Julio"}
    subtitulo={"Laboratorio 9 de Julio"}
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
