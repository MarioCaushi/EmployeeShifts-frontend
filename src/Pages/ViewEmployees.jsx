import React from 'react'
import ManagerNavBar from '../Components/ManagerNavBar';
import EmployeeCard from '../Components/EmployeeCard';

function ViewEmployees() {
    return (
        <>
            <ManagerNavBar />

            <div className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-md-6 d-flex">
                        <input
                            type="text"
                            className="form-control rounded-pill"
                            placeholder="Search: Name, Position, Status, Type and ID"
                            aria-label="Search"
                        />
                            <button
                                className="btn btn-outline-success ms-2 rounded-pill ml-2">
                                Clear
                            </button>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center">
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />

            </div>

        </>
    );
}

export default ViewEmployees;
