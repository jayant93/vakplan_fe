import '../DesignFiles/SignUp.css';
import React from 'react';
import vaKPlanImage from '../Images/vakPlanImage.webp'

function SignUp() {
    return (
      <div className="signUpContainer">
        {/* Left Column with Image */}
        <div className="imageSection">
          <img src={vaKPlanImage} alt="vaKPlan Illustration" />
        </div>
  
        {/* Right Column with Signup Form */}
        <div className="formSection">
          <form className="signUpForm">
            <h2>Create an Account</h2>
            <input type="text" name="email" placeholder="Email Id" />
            <input type="text" name="phoneNumber" placeholder="Phone Number" />
            <input type="text" name="firstName" placeholder="First Name" />
            <input type="text" name="middleName" placeholder="Middle Name" />
            <input type="text" name="lastName" placeholder="Last Name" />
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