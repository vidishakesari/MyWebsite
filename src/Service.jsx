import React from "react";
//import website from '../src/Image/images (2).jpg';
import Card from "./Card";
import MyData from './MyData';
const Service = () => {

    return(
        <>
        <div className="my-5">
         <h2 className="text-center text-decoration-underline">Our Service</h2>
        </div>
         <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row gy-4">


              {MyData.map((val,index)=>{

                return(
                  <Card
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    link={val.link}
                    text={val.text}
                  />
                )
              })} 
             
             
             
             
             </div>
              </div>
              </div>
              </div>
            </>
    )
}
export default Service;