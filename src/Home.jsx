import React from "react";
import { NavLink } from "react-router-dom";
//import { NavLink } from "react-router-dom";
import site from '../src/Image/image (5).jpg';
import Comman from "./Comman";

const Home = () => {

    return(
        <>
         <Comman  name="Your Bussines Will Grow Up" btnhome="Get Sterted" visit="/Service" imgsrc={site}/>
        </>
    )
}
export default Home;
