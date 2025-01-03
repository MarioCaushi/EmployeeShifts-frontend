import React from 'react'
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import LoginManagerForm from "../Components/LoginManagerForm";
import EmployeeRegisterComponent from '../Components/EmployeeRegisterComponent';

function ManagerLogin() {

    useEffect(() => {
      document.title = "Employee Shifts - ManagerLogin"; // Sets the browser tab title
    }, []);

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center p-3 mt-5">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center gap-2 p-3 m-3 mt-5">

        <div className="col-md-5 col-12 p-4 m-3 d-flex flex-column align-items-center justify-content-center">
          <EmployeeRegisterComponent />
          <Link to="/"> 
          <button type="button" className="btn btn-success mt-3">Home Page</button>
          </Link>
        </div>
        
        <div className="col-md-5 col-12 p-4 m-3">
          <LoginManagerForm />
        </div>

      </div>
    </div>
  )
}

export default ManagerLogin
