import React from "react";
//import { NavLink } from "react-router-dom";
//import website from '../src/Image/images (2).jpg';


const Card = (props) => {

    return(
        <>
        
               
        
                <div className="col-md-4 col-10 mx-auto ">
                <div class="card " >
                  <img src={props.imgsrc} class="card-img-top" alt="pic"/>
                  <div class="card-body">
                   <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.text}</p>
                     <a href={props.link} class="mt-3 btn btn-outline-info btn1">Go somewhere</a>
                   </div>
                </div>
                </div>
               
             
                
            
        </>
    )
}
export default Card;