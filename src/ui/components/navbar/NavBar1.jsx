import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'

export const NavBar1 = () => {

 const [show, setShow] = useState(false);

    const showMenu = () => {
    if (show) {
        collapseMenu();
        setShow(false);
    } else {
        setShow(true);
    }
    }
    
    const collapseMenu = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
    }


 

  return (
    <>
    <header>


        
  
   
   
     <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-0 pe-5">
        <Link to="/"  className="navbar-brand ps-5 me-0">
            <h1 className="text-white m-0">Industro</h1>
        </Link>

        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">


            <NavLink to="/home" 
                 className={ ({ isActive }) => `nav-link  dropdownn  ${isActive ? 'active ':''}` } >  
            <button className="btn   " data-bs-toggle="collapse" data-bs-target="#navbarCollapse"   >
            Home
            </button>            
                </NavLink>

                <NavLink to="/portfolio"
                 className={ ({ isActive }) => `nav-link dropdownn   ${isActive ? 'active ':''}` } >  
            <button className="btn   " data-bs-toggle="collapse" data-bs-target="#navbarCollapse"   >
            Portfolio
            </button>            
                </NavLink>
         
                


                <div className="nav-item  dropdownn" >
                <NavLink  className="nav-link" to="/" >   <button className="btn   " data-bs-toggle="collapse" data-bs-target="#navbarCollapse"   >
            Pages
            </button> </NavLink >
  <div className="dropdownn-content bg-light m-0">
  <NavLink  className="nav-link-drop" to="/contables" > <a >Contables</a></NavLink >
  <NavLink  className="nav-link-drop" to="/impositivos" > <a >Impositivos</a></NavLink >
  <NavLink  className="nav-link-drop" to="/societarios" > <a >Societarios</a></NavLink >
  <NavLink  className="nav-link-drop" to="/laborales" > <a >Laborales</a></NavLink >
  <NavLink  className="nav-link-drop" to="/generales" > <a >Generales</a></NavLink >
  </div>
</div>


           <NavLink to="/contact"
                 className={ ({ isActive }) => `nav-link  dropdownn  ${isActive ? 'active ':''}` } >  
            <button className="btn   " data-bs-toggle="collapse" data-bs-target="#navbarCollapse"   >
            Contact
            </button>            
                </NavLink>

            </div>

          
        </div>
    </nav>
  
    </header>
    </>
  )
}
