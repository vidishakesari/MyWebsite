import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
     const navigate=useNavigate();
    const [state,setstate]=useState({

        FullName:"",
        Phone:"",
        email:"",
        address:"",
        city:"",
       

    });
     const WriteText = (event) =>{

        const name=event.target.name;
        const value=event.target.value;

        setstate((previous)=>{
            return{
                ...previous,
                [name]:value,
            }
        })
     }

     const onSubmit = (event) => {
          
        event.preventDefault();
        alert('Form Submit');
        return navigate("/");
     }
       
     

    return(
        <>
         <div className="my-5">
         <h2 className="text-center  text-danger">WelCome to Contact Page</h2>
        </div>
         <div className="container mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
     
  
    <form  onSubmit={onSubmit} class="row g-3">
  

  <div class="col-md-6  col-10">
    <label for="validationCustom02" class="form-label">User Full Name</label>
    <input type="text" class="form-control" id="inputText" name="FullName" value={state.FullName} onChange={WriteText} required/>
  </div>

  <div class="col-md-6 col-10">
    <label for="validationCustom02" class="form-label">phone</label>
    <input type="text" class="form-control" id="inputPhone" placeholder="Phone No" name="Phone" value={state.Phone} onChange={WriteText} required/>
  </div>
   
  <div class="col-md-6 col-10">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" name="email" value={state.email} onChange={WriteText} required/>
  </div>
  
  <div class="col-md-6 col-10">
    <label for="inputAddress" class="form-label">Address</label>
    <textarea type="text" class="form-control" id="inputAddress" placeholder="Address" name="address" value={state.address} onChange={WriteText} required></textarea>
  </div>
  
  

  <div class="col-md-4 col-10">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select" name="city"  onChange={WriteText} required>
      <option value={state.city}>Choose...</option>
      <option value="Delhi">Delhi</option>
      <option value="Allahabad">Allahabad</option>
      <option value="Noida">Noida</option>
    </select>
  </div>
  
  <div class="col-6 col-10">
    <button type="onSubmit" class="btn btn-primary" >Sign in</button>
  </div>
</form>

            
            </div>
          </div> 
       </div>

       
        
        </>
    )
}
export default Contact;