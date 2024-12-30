import { useState } from "react";
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 


function EmployeeRegisterForm() {
    const [employeeID, setEmployeeID] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    //Function to show the values of the buttons in the input
    const handleButtonClick = (number) => {
        setEmployeeID(employeeID + number);
        setErrorMessage("");
    }

    //Function to also allow the input field to be edited via keyboard
    const handleChange = (event) => {
        setEmployeeID(event.target.value);
        setErrorMessage("");

    }

    const handleOkButton = () => {

        if (employeeID.length !== 8) {
            setErrorMessage("EmployeeID must be of length 8")
        }
        else {
            setErrorMessage("");

            axios.get(`api/Employee/get-employee-by-id/${parseInt(employeeID)}`)
                .then(response => {
                    // handle success

                    //Create an object with the response data
                    const Employee = {
                        "EmployeeID": response.data.employeeId,
                        "Name": response.data.name,
                        "LastName": response.data.lastName,
                        "Position": response.data.position,
                        "Status": response.data.status,
                    };

                    console.log(Employee);

                    //Save the object in localStorage for later use
                    localStorage.setItem("employee-login", JSON.stringify(Employee));

                    window.open(`/Employee`, '_blank');

                    setEmployeeID("");
                })
                .catch(error => {
                    // handle error
                    setErrorMessage("The employee with this ID was not found, try another one!");
                });
        }

    }

    const createButton = (number) => (
        <div className="col-3 m-1 p-2">
            <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick(number)}
                style={{
                    width: "90px",
                    height: "70px",
                    borderRadius: "10px",
                    fontSize: "25pt"
                }}>
                {number}
            </button>
        </div>
    );

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">

                <div className="form-group col-md-10 col-11">
                    <label htmlFor='employee-register' className="form-label"><b>Employee ID</b></label>
                    <input type="number" className="form-control"
                        placeholder="Write or Click the buttons"
                        name="employee-register"
                        id="employee-register"
                        value={employeeID}
                        onChange={handleChange}
                        style={{
                            fontSize: "15pt",
                            fontWeight: "bold",
                        }} />
                </div>

                <div className="col-md-12">
                    <div className="row justify-content-center">
                        {createButton(1)}
                        {createButton(2)}
                        {createButton(3)}
                    </div>
                    <div className="row justify-content-center">
                        {createButton(4)}
                        {createButton(5)}
                        {createButton(6)}
                    </div>
                    <div className="row justify-content-center">
                        {createButton(7)}
                        {createButton(8)}
                        {createButton(9)}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-3 m-1 p-2">
                            <button type="button" className="btn btn-outline-danger text-center" style={{
                                width: "90px",
                                height: "70px",
                                borderRadius: "10px",
                                fontSize: "20pt"
                            }} onClick={() => setEmployeeID('')}>
                                Clear
                            </button>
                        </div>
                        {createButton(0)}
                        <div className="col-3 m-1 p-2">
                            <button type="button" className="btn btn-outline-success text-center" style={{
                                width: "90px",
                                height: "70px",
                                borderRadius: "10px",
                                fontSize: "20pt"
                            }} onClick={() => handleOkButton()}>
                                OK
                            </button>
                        </div>
                    </div>
                </div>
                {errorMessage && (
                    <div className="container text-danger" id="login-evaluation">
                        {errorMessage}
                    </div>
                )}
            </div>
        </div>
    );
}

export default EmployeeRegisterForm;
