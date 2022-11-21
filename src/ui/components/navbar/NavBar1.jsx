
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar1 = () => {

  return (
    <>
    <header>   

        
    <div className="container-fluid bg-dark px-0">
        <div className="row g-0 d-none d-lg-flex">
            <div className="col-lg-6 ps-5 text-start">
                <div className="h-100 d-inline-flex align-items-center text-white">
                    <span>Contáctanos:</span>
                    <span className="btn btn-link text-light" href=""><i className="fa fa-envelope"> cubas_beto@hotmail.com</i></span>
                    <span className="btn btn-link text-light" href=""><i className="fab fa-instagram"></i></span>
                    <span className="btn btn-link text-light" href=""><i className="fab fa-facebook"></i></span>
                  

                  
                </div>
            </div>
            <div className="col-lg-6 text-end">
                <div className="h-100 topbar-right d-inline-flex align-items-center text-white py-2 px-5">
                    <span className="fs-5 fw-bold me-2"><i className="fa fa-phone-alt me-2"></i>Call Us:</span>
                    <span className="fs-5 fw-bold">11-3313-8900  / 11-3324-9832 </span>
                </div>
            </div>
        </div>
    </div>
   

     <nav className="navbar navbar-expand-lg bg-white navbar-light  py-0 pe-5">
        <Link to="/"  className="navbar-brand ps-5 me-0">
            <h1 className="text-white m-9">C</h1><br />
            <h2 className="text-white ">OA</h2>
            <h6 className="text-white ">Revestimientos</h6>
        </Link>

        <button type="button" className="navbar-toggler " data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <MenuIcon   />
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">


            <NavLink to="/home" 
                 className={ ({ isActive }) => `nav-link  dropdownn  ${isActive ? 'active':''}` } >  
            <button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"   >
            Home
            </button>            
                </NavLink>

                <NavLink to="/portfolio"
                 className={ ({ isActive }) => `nav-link dropdownn   ${isActive ? 'active ':''}` } >  
            <button   className="btn"
             data-bs-toggle="collapse" data-bs-target="#navbarCollapse"   >
            Portfolio
            </button>            
                </NavLink>        
                


                <div className="nav-item  dropdownn" >
                <NavLink  className="nav-link" >   <button className="btn dropdown-toggle"    >
            Obras
            </button> </NavLink >
  <div className="dropdownn-content bg-light m-0">
  <NavLink  className="nav-link-drop"   to="/radiologoaformosa" ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"> Formosa</button></NavLink >
  <NavLink  className="nav-link-drop"   to="/laboratorio9dejulio" ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">9 de Julio</button></NavLink >

  </div>
</div>


           <NavLink to="/contact"
                 className={ ({ isActive }) => `nav-link  dropdownn  ${isActive ? 'active ':''}` } >  
            <button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"   >
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
