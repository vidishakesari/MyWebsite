import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import { Routes,Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const App = () => {

    return(
        <>
        <Navbar/>
        <Routes>
        <Route   path="/" element={<Home/>}/>
        <Route   path="/About" element={<About/>}/>
        <Route   path="/Contact" element={<Contact/>}/>
        <Route   path="/Service" element={<Service/>}/>
        <Route   path="*" element={<Navigate to ="/" />}/>
        
        </Routes>
          
        </>
    )
}
export default App;