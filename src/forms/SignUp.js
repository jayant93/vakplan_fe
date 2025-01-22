import '../DesignFiles/SignUp.css';
import React, { useState } from 'react';
import vaKPlanImage from '../Images/vakPlanImage.webp'


function SignUp() {

    const formData = useState({
      email :'',
      phoneNumber:'',
      firstName:'',
      middleName:'',
      lastName:''
    });

    const handleChange = (event) => {
      const [id,value] = [event.target.id,event.target.value];
      if(id === "email"){
        formData.email = value;
        console.log("Email :" ,formData.email);
      }
      if(id === "phone_number"){
        formData.phoneNumber = value;
        console.log("Phone Number :" ,formData.phoneNumber);
      }
      if(id === "first_name"){
        formData.firstName = value;
        console.log("First Name :" ,formData.firstName);
      }
      if(id === "middle_name"){
        formData.middleName = value;
        console.log("Middle Name :" ,formData.middleName);
      }
      if(id === "last_name"){
        formData.lastName = value;
        console.log("Last Name :" , formData.lastName);
      }
        
    }

    return (
      <div className="signUpContainer">
        
          {/* Left Column: Description Section */}
        <div className="descriptionSection">
          <div className="tagline">
            <span>Your AI-powered Vacation Planner</span>
            <span>Find the best vacation deals tailored to your budget</span>
          </div>
          <div className="features">
            <div className="feature">
              <h3>✨ Intelligent Suggestions</h3>
              <p>Our AI listens to your preferences and crafts vacation plans that fit your style.</p>
            </div>
            <div className="feature">
              <h3>💸 Budget Optimization</h3>
              <p>Get the most out of your budget with personalized recommendations for destinations and activities.</p>
            </div>
            <div className="feature">
              <h3>🌍 Explore New Destinations</h3>
              <p>Discover exciting places around the world, all while staying within your price range.</p>
            </div>
          </div>
        </div>
        {/* Right Column with Signup Form */}
        <div className="formSection">
          <form className="signUpForm">
            <h2>Create an Account</h2>
            <input id="email" type="text" name="email" placeholder="Email Id" onChange={handleChange}/>
            <input id="phone_number" type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange}/>
            <input id="first_name" type="text" name="firstName" placeholder="First Name" onChange={handleChange}/>
            <input id="middle_name" type="text" name="middleName" placeholder="Middle Name" onChange={handleChange}/>
            <input id="last_name" type="text" name="lastName" placeholder="Last Name" onChange={handleChange}/>
            <div className="signUpButton">
              <button type="submit">Sign Up</button>
            </div>
            <div className="SignInDiv">
              <label>Already a customer?</label>
              <button type="button">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    );
  }


  
  export default SignUp;