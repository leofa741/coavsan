import React from 'react'
import {  BannerPortfolio} from '../../ui'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import { ContenidoPortfolio } from './ContenidoPortfolio';
export const PortFolioComponent = () => {
  
  return (
    <>
<br /><br /><br />
 <BannerPortfolio descrip="Nuestras Obras"  />
 <ContenidoPortfolio  />
    </>
  )
}
