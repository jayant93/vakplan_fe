import React from 'react';
import './App.css';
import SignUp from './forms/SignUp';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="headerContainer">
        <div className="logoSection">
          <h1>vaKPlan</h1>
          <p>Your AI-Powered Vacation Planner</p>
        </div>
        <div className="mountains"></div>
        <div className="navSection">
          <button className="findVacationBtn">Find Your Perfect Vacation</button>
          <button className="signInBtn">Sign In</button>
          <button className="signUpBtn">Sign Up</button>
        </div>
      </header>

      {/* Main Content */}
      <SignUp />

      {/* Footer */}
      <footer className="footer">
        <div className="footerContent">
          <p className="developerInfo">
            Created by <strong>Jayant Kumar</strong> | Designed and developed as part of the <em>vaKPlan</em> project. 
            Visit the <a href="https://www.linkedin.com/in/jayant-kumar-198b05164/" target="_blank" className="LinkedInLink">developer's LinkedIn</a> for more.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;