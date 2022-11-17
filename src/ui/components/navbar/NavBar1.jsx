
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
                    <span>Follow Us:</span>
                    <a className="btn btn-link text-light" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-link text-light" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-link text-light" href=""><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-link text-light" href=""><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="col-lg-6 text-end">
                <div className="h-100 topbar-right d-inline-flex align-items-center text-white py-2 px-5">
                    <span className="fs-5 fw-bold me-2"><i className="fa fa-phone-alt me-2"></i>Call Us:</span>
                    <span className="fs-5 fw-bold">+012 345 6789</span>
                </div>
            </div>
        </div>
    </div>
   

     <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-0 pe-5">
        <Link to="/"  className="navbar-brand ps-5 me-0">
            <h1 className="text-white m-9">C</h1><br />
            <h2 className="text-white ">oa</h2>
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
                <NavLink  className="nav-link" to="/" >   <button className="btn dropdown-toggle"  data-bs-toggle="collapse" data-bs-target="#navbarCollapse"   >
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
