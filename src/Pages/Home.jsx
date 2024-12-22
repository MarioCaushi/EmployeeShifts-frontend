import React from 'react'
import ManagerLoginComponent from "../Components/ManagerLoginComponent";
import EmployeeRegisterComponent from "../Components/EmployeeRegisterComponent";

function Home() {
    return (
        <div>
            <div className="container-fluid d-flex flex-column align-items-center justify-content-center mt-5">
                <h1>Welcome to the EmployeeShifts Web App!</h1>

                {/* Redirecting Container - already centered due to parent styles */}
                <div className="container-fluid d-flex flex-column align-items-center justify-content-center m-4 gap-2">
                    
                    <div className="d-flex flex-column align-items-center justify-content-center gap-2 m-4 mt-4">
                        <ManagerLoginComponent />
                    </div>

                    <div className="d-flex flex-column align-items-center justify-content-center gap-2 m-4">
                        <EmployeeRegisterComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
