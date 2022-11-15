import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'

export const NavBar1 = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-0 pe-5">
        <Link to="/"  className="navbar-brand ps-5 me-0">
            <h1 className="text-white m-0">Industro</h1>
        </Link>

        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">

               <NavLink   className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active':''}` }
                    to="/home"> Home </NavLink>

                    <NavLink  className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active':''}` }
                      to="/portfolio"
                    >  Portfolio </NavLink>

         
                


                <div className="nav-item dropdownn" >
 <a href="#" className="nav-link " data-bs-toggle="dropdown">Pages</a>
  <div className="dropdownn-content bg-light m-0">
  <NavLink  className="nav-link-drop" to="/contables" > <a >Contables</a></NavLink >
  <NavLink  className="nav-link-drop" to="/impositivos" > <a >Impositivos</a></NavLink >
  <NavLink  className="nav-link-drop" to="/societarios" > <a >Societarios</a></NavLink >
  <NavLink  className="nav-link-drop" to="/laborales" > <a >Laborales</a></NavLink >
  <NavLink  className="nav-link-drop" to="/generales" > <a >Generales</a></NavLink >
  </div>
</div>


               <NavLink className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active':''}` }
                     to="/contact" >Contact </NavLink>
            </div>

          
        </div>
    </nav>
    </>
  )
}
