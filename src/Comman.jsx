import React from "react";
import { NavLink } from "react-router-dom";



const Comman = (props) => {

    return(
        <>
         <section id="header" className="d-flex align-item-center">
          <div className="container-fluid">
            <div className="row">
             <div className="col-10 mx-auto">
             <div className="row">
                <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 ">
                   <h4 className="colorDark">{props.name} </h4>
                   <h4><strong className="change">WEB DESIGN</strong><strong className="change1">AND</strong><strong className="change2">DEVELOPMENT</strong></h4>
                   <h6 className="my-3">We have a great team of Website developing.</h6>
                   <NavLink to={props.visit} className="mt-3 btn btn-outline-info btn1 ">{props.btnhome}</NavLink>
                </div>

                <div className="col-lg-6 pt-5 pt-lg-5 ml-5 order-2 order-lg-1  header-img">
                   <img src={props.imgsrc} className="animated" alt="website"/>
                </div>
                </div>
                </div>
            </div>
          </div> 
         </section>
        </>
    )
}
export default Comman;