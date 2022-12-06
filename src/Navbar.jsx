import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {

    return(
        <>
           <div className="container-fluid">
           <div className="row">
            <div className="col-10 mx-auto">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <div className="container-fluid">
            <NavLink className="navbar-brand " to="/"> WEB DESIGN AND DEVELOPMENT </NavLink>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
             </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
           <ul className="navbar-nav  mb-2 mb-lg-0  active ">
             <li className="nav-item">
          <NavLink   className="menu_active nav-link active  " aria-current="page" exact to="/">home</NavLink>
              </li>

        <li className="nav-item">
          <NavLink  className="menu_active nav-link active " aria-current="page" exact to="/About">about</NavLink>
        </li>

        <li className="nav-item">
          <NavLink  className="menu_active nav-link active " aria-current="page" exact to="/Contact">contact</NavLink>
        </li>

        <li className="nav-item">
          <NavLink  className="menu_active nav-link active " aria-current="page" exact to="/Service">services</NavLink>
        </li>
        
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle " to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Signup
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="#">LognIn</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">LognOut</NavLink></li>
            
          </ul>
        </li>
        
      </ul>
      
    </div>
   </div>
  </nav>
  </div>
 </div>
  </div>
        </>
    )
}

export default Navbar;