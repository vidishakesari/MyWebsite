import React from "react";
import web from '../src/Image/image (1).jpg';
import Comman from "./Comman";

const About = () => {

    return(
        <>
         <Comman  name="Welcome To Know About US" btnhome="About Us" visit="/Contact" imgsrc={web}/>
        </>
    )
}
export default About;
