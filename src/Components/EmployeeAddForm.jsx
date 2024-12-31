import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";

function EmployeeAddForm() {

    const [position, setPosition] = useState([]);
    const [shiftTypes, setShiftTypes] = useState([]);
    const [shiftDays, setShiftDays] = useState([]);
    const [shiftTimes, setShiftTimes] = useState([]);

    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        axios.get(`api/Shift/get-shift-options`)
            .then((response) => {
                // Handle the response
                console.log(response.data);

                setPosition(response.data["Employee Positions"]);
                setShiftTypes(response.data["Shift Types"]);
                setShiftDays(response.data["Shift Days"]);
                setShiftTimes(response.data["Shift Times"]);

                // Log the response data 
                console.log('Employee Positions:', response.data["Employee Positions"]);
                console.log('Shift Types:', response.data["Shift Types"]);
                console.log('Shift Days:', response.data["Shift Days"]);
                console.log('Shift Times:', response.data["Shift Times"]);

                setErrorMessage("");
                setSuccess("");
            })
            .catch((error) => {
                // Handle errors
                console.error(error);
                setErrorMessage("Some unintentional error happened");
                setSuccess('');
            });

    }, []);

    return (
        <div>
            <div className="container my-5">
                <div className="card border border-darker round-2">
                    <h5 className="card-header">Add Employee</h5>
                    <div className="card-body">
                        <form className="container m-2 p-1 mx-auto">
                            {/* Name and Last Name */}
                            <div className="row mb-3">
                                <div className="col-md-6 fw-bold">
                                    <label htmlFor="name-input" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name-input"
                                        placeholder="Enter Name"
                                    />
                                </div>
                                <div className="col-md-6 fw-bold">
                                    <label htmlFor="lastname-input" className="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastname-input"
                                        placeholder="Enter Last Name"
                                    />
                                </div>
                            </div>

                            {/* Email and Phone Number */}
                            <div className="row mb-3">
                                <div className="col-md-6 fw-bold">
                                    <label htmlFor="email-input" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email-input"
                                        placeholder="Enter Email"
                                    />
                                </div>
                                <div className="col-md-6 fw-bold">
                                    <label htmlFor="phone-input" className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone-input"
                                        placeholder="Enter Phone Number"
                                    />
                                </div>
                            </div>

                            {/* Address and Birthday */}
                            <div className="row mb-4">
                                <div className="col-md-6 fw-bold">
                                    <label htmlFor="address-input" className="form-label">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address-input"
                                        placeholder="Enter Address"
                                    />
                                </div>
                                <div className="col-md-6 fw-bold">
                                    <label htmlFor="birthday-input" className="form-label">Birthday</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="birthday-input"
                                    />
                                </div>
                            </div>

                            {/* Position, Shift Type, Shift Days, and Shift Hours */}
                            <div className="row mb-4">
                                {/* Position Dropdown */}
                                <div className="col-md-3 fw-bold">
                                    <label htmlFor="position-select" className="form-label m-1">Position</label>
                                    <select className="form-select" id="position-select">
                                        <option value="">Select:</option>
                                        {position.map((pos, index) => (
                                            <option key={index} value={pos}>
                                                {pos}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Shift Type Dropdown */}
                                <div className="col-md-3 fw-bold">
                                    <label htmlFor="shift-type-select" className="form-label m-1">Shift Type</label>
                                    <select className="form-select" id="shift-type-select">
                                        <option value="">Select:</option>
                                        {shiftTypes.map((type, index) => (
                                            <option key={index} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Shift Days Dropdown */}
                                <div className="col-md-3 fw-bold">
                                    <label htmlFor="shift-days-select" className="form-label m-1">Shift Days</label>
                                    <select className="form-select" id="shift-days-select">
                                        <option value="">Select:</option>
                                        {shiftDays.map((days, index) => (
                                            <option key={index} value={days}>
                                                {days}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Shift Hours Dropdown */}
                                <div className="col-md-3 fw-bold">
                                    <label htmlFor="shift-hours-select" className="form-label m-1">Shift Hours</label>
                                    <select className="form-select" id="shift-hours-select">
                                        <option value="">Select:</option>
                                        {shiftTimes.map((time, index) => (
                                            <option key={index} value={time}>
                                                {time}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Pay Per Hour */}
                            <div className="row mb-2 justify-content-center">
                                <div className="col-md-6 d-flex align-items-center justify-content-center">
                                    <div className="alert alert-info text-center" role="alert">
                                        Calculated Pay Per Hour: <strong id="pay-result">--</strong>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="d-flex justify-content-between mb-2">
                                <button type="submit" className="btn btn-primary mt-2">Add Employee</button>
                                <button type="reset" className="btn btn-outline-danger mt-2">Reset</button>
                            </div>

                            {/* Messages Section */}
                            <div>
                                {success && (
                                    <div className="alert alert-success" role="alert">
                                        {success}
                                    </div>
                                )}
                                {errorMessage && (
                                    <div className="alert alert-danger" role="alert">
                                        {errorMessage}
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EmployeeAddForm
