import React from 'react'
import { Link } from "react-router-dom";

function EmployeeRegisterComponent() {
    return (
        <div>
            {/* Employee work registration container */}
            <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                <img src="/Assets/EmployeeLogin.png" alt="Employee logo" style={{ width: 50 }} className="mb-2" />

                <h4>If you are an Employee:</h4>
                <h5 className="m-2 mb-4">Click Here to register to work!</h5>
                <Link to="/EmployeeLogin">
                    <button type="button" className="btn btn-outline-info">Register to Work</button>
                </Link>
            </div>
        </div>
    )
}

export default EmployeeRegisterComponent
