import React from 'react'
import { Link } from "react-router-dom";
import ManagerLoginComponent from '../Components/ManagerLoginComponent';
import EmployeeRegisterForm from '../Components/EmployeeRegisterForm';

function EmployeeLogin() {
    return (
        <div>
            <div className="container-fluid d-flex align-items-center justify-content-center p-3 mt-5">
                <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center gap-2 p-3 m-3 mt-5">

                    <div className="col-md-5 col-12 p-4 m-3 d-flex flex-column align-items-center justify-content-center">
                        <ManagerLoginComponent />
                        <Link to="/">
                            <button type="button" className="btn btn-info mt-1">Home Page</button>
                        </Link>
                    </div>

                    <div className="col-md-5 col-12 p-4 m-3">
                        <EmployeeRegisterForm/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EmployeeLogin
