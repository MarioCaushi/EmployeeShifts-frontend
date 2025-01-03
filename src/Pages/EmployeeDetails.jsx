import React, { useState, useEffect } from 'react';
import ManagerNavBar from '../Components/ManagerNavBar';
import EmployeeDetailsComponent from '../Components/EmployeeDetailsComponent';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import EmployeeEvents from '../Components/EmployeeEvents';

function EmployeeDetails() {
    const [employee, setEmployee] = useState(null);
    const [shift, setShift] = useState(null);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const navigate = useNavigate(); 

    useEffect(() => {
        const employeeId = JSON.parse(localStorage.getItem("employeeId"));

        if (!employeeId) {
            console.error("No employee ID found in localStorage.");
            setLoading(false);
            return;
        }

        axios.get(`api/Employee/get-employee-by-id/${employeeId}`)
            .then(response => {
                setEmployee(response.data);

                axios.get(`api/Shift/get-shift-by-id/${response.data.shiftId}`)
                    .then(shiftResponse => {
                        setShift(shiftResponse.data);

                        axios.get(`api/Event/get-events-of-employee/${employeeId}`)
                        .then(eventResponse => {
                            setEvents(eventResponse.data);
                            setLoading(false);  
                        })
                        .catch(error => {
                            console.error("Error fetching events data:", error);
                            setLoading(false);
                        });

                    })
                    .catch(error => {
                        console.error("Error fetching shift data:", error);
                        setLoading(false);
                    });
            })
            .catch(error => {
                console.error("Error fetching employee data:", error);
                setLoading(false);
            });
    }, []);

    const handleDeleteButton = (id) => {
        if (window.confirm("Are you sure?")) {
            axios.delete(`api/Employee/delete-employee/${id}`)
                .then(response => {
                    console.log(response)
                    window.history.back();
                })
                .catch(error => {
                    console.log("An error happened", error);
                });
        }
    };

    const handleEdit = (id) => {
        localStorage.setItem("employeeId", JSON.stringify(id));
        navigate('/EmployeeEdit');
    };

    // Ensuring events are reversed just before passing to the component
    const reversedEvents = [...events].reverse();

    return (
        <div>
            <ManagerNavBar />
            <h4 className="text-center mt-3">Employee Details</h4>

            {loading ? (
                <div className="text-center mt-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : employee && shift ? (
                <>
                    <EmployeeDetailsComponent employee={employee} shift={shift} />

                    <div className="d-flex justify-content-center mt-4">
                        <button
                            className="btn btn-warning mx-2"
                            onClick={() => handleEdit(employee.employeeId)}
                        >
                            Edit
                        </button>
                        <button
                            className="btn btn-outline-secondary mx-2"
                            onClick={() => window.history.back()}
                        >
                            Go Back
                        </button>
                        <button
                            className="btn btn-danger mx-2"
                            onClick={() => handleDeleteButton(employee.employeeId)}
                        >
                            Delete
                        </button>
                    </div>
                </>
            ) : (
                <div className="text-center text-danger mt-5">
                    Failed to load employee details.
                </div>
            )}
            <div className='container'>
                <EmployeeEvents events={reversedEvents} loading={loading} />
            </div>
        </div>
    );
}

export default EmployeeDetails;
