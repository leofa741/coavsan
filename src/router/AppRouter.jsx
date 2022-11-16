import { Route, Routes } from "react-router-dom"
import { Contact, Home, NotFound, Portfolio } from "../pages"
import { CarrouselComponent, Copirrigth, Footer, HeaderComponent, Navbar, NavBar1, TopnavBar } from "../ui"


export const AppRouter = () => {
  return (
   <>



<NavBar1 /> 


{/* <CarrouselComponent /> */}

   <Routes>
    <Route path="/" element={<Home />} title="Home"/>
    <Route path="/home" element={<Home />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />

 
    <Route path="*" element={<NotFound />} />

   </Routes>   

   <Footer />
   <Copirrigth  />
   </>
  )
}
