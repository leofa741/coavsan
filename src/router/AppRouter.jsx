import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import { Contact, Home, Laboratorio9DeJulio, NotFound, Portfolio, RadiologiaFormosa } from "../pages"
import {Copirrigth, Footer, HeaderComponent, Navbar, NavBar1, TopnavBar } from "../ui"


export const AppRouter = () => {
  return (
   <>   
   <HashRouter>
    <NavBar1/> 

    <Routes>
    <Route path="/" element={<Home />} title="Home"/>
    <Route path="/home" element={<Home />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/radiologoaformosa" element={<RadiologiaFormosa />} />
    <Route path="/laboratorio9dejulio" element={<Laboratorio9DeJulio />} />
    <Route path="/contact" element={<Contact />} /> 
    <Route path="*" element={<NotFound />} />
    </Routes>   

    <Footer />
    <Copirrigth  />
    </HashRouter>
   </>
  )
}
