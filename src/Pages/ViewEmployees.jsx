import React from 'react'
import ManagerNavBar from '../Components/ManagerNavBar';
import EmployeeCard from '../Components/EmployeeCard';
import { useState, useEffect } from 'react';
import axios from "axios";

function ViewEmployees() {

    const [employees, setEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    const [search, setSearch] = useState("");

    const [triggerFetching, setTriggerFetching] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {

        const managerId = JSON.parse(localStorage.getItem("managerid"));

        axios.get(`api/Manager/get-employees-by-manager-id/${managerId}`)
            .then(response => {

                console.log(response.data);

                setEmployees(response.data);
                setFilteredEmployees(response.data);
                setErrorMessage("");
            })
            .catch(error => {

                if (error.status == 404) {
                    setErrorMessage("No employees currently");
                }

                console.log("An error happened", error);

                setErrorMessage("Unexpected error happened");
            });

    }, [triggerFetching]);

    const handleSearch = (event) => {

        const searchValue = event.target.value;
        setSearch(searchValue);

        if (!searchValue) {
            setFilteredEmployees(employees);
        } else {
            const filtered = employees.filter(employee => {
                return (
                    employee.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                    employee.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
                    employee.position.toLowerCase().includes(searchValue.toLowerCase()) ||
                    employee.status.toLowerCase().includes(searchValue.toLowerCase()) ||
                    employee.type.toLowerCase().includes(searchValue.toLowerCase()) ||
                    employee.employeeId.toString() === searchValue
                );
            });
            setFilteredEmployees(filtered);
        }
    };

    const toggleTriggerFetching = () => {

        if(triggerFetching == false)
        {
            setTriggerFetching(true);
        }
        else
        {
            setTriggerFetching(false);
        }
    };

    const handleDeleteButton = (id) => {

        if(window.confirm("Are you sure?")){
            axios.delete(`api/Employee/delete-employee/${id}`)
            .then(response => {
    
                console.log(response);
                toggleTriggerFetching();
    
            })
            .catch(error => {
                console.log("An error happened", error);
            });
        }

        };



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
                            value={search}
                            onChange={handleSearch}
                        />
                        <button
                            className="btn btn-outline-success ms-2 rounded-pill ml-2"
                            onClick={() => {
                                setSearch("");
                                setFilteredEmployees(employees); 
                            }}>
                            Clear
                        </button>


                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-12">
                    {errorMessage && (
                        <div className="alert alert-danger text-center">{errorMessage}</div>
                    )}
                </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center">
                {filteredEmployees.map((employee) => (
                    <EmployeeCard 
                        key={employee.employeeId} 
                        employee={employee} 
                        handleDeleteButton={() => handleDeleteButton(employee.employeeId)}
                    />
                ))}
            </div>

        </>
    );
}

export default ViewEmployees ;
