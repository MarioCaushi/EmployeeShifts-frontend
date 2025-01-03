import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ManagerNavBar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("managerid");
        navigate('/ManagerLogin', { replace: true });
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse d-flex align-items-center justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/ManagerHome">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ManagerEdit">Edit Personal Info</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ViewEmployees">View Employees</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/EmployeeAdd">Add Employees</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Insights">Insights</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button className="btn btn-outline-danger" onClick={handleLogout}>Log Out</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default ManagerNavBar;
