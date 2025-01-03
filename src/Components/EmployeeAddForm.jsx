import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";

function EmployeeAddForm() {

    const [position, setPosition] = useState([]);
    const [shiftTypes, setShiftTypes] = useState([]);
    const [shiftDays, setShiftDays] = useState([]);
    const [shiftTimes, setShiftTimes] = useState([]);

    const [selectedPosition, setSelectedPosition] = useState("");
    const [selectedTypes, setSelectedTypes] = useState("");
    const [selectedDays, setSelectedDays] = useState("");
    const [selectedTimes, setSelectedTimes] = useState("");

    const [calculatePay, setCalculatePay] = useState(0.0)

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [birthday, setBirthday] = useState("");

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

    //Function to handle shift options and payment calculation

    const handleChangePosition = (event) => {
        setSelectedPosition(event.target.value);
    };

    const handleChangeTypes = (event) => {
        setSelectedTypes(event.target.value);
    };

    const handleChangeDays = (event) => {
        setSelectedDays(event.target.value);
    };

    const handleChangeTimes = (event) => {
        setSelectedTimes(event.target.value);
    };

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    };

    const handleChangeAddress = (event) => {
        setAddress(event.target.value);
    };

    const handleChangeBirthday = (event) => {
        setBirthday(event.target.value);
    };


    const handleCalculatePay = () => {
        if (selectedPosition === "" || selectedTypes === "") {
            setCalculatePay(0.0);
        } else {
            if (selectedPosition == "Developer" && selectedTypes == "Part Time") {
                setCalculatePay(20.0);
            } else if (selectedPosition == "Developer" && selectedTypes == "Full Time") {
                setCalculatePay(40.0);
            } else if (selectedPosition == "Team Lead" && selectedTypes == "Part Time") {
                setCalculatePay(25.0);
            } else if (selectedPosition == "Team Lead" && selectedTypes == "Full Time") {
                setCalculatePay(50.0);
            } else if (selectedPosition == "Designer" && selectedTypes == "Part Time") {
                setCalculatePay(15.0);
            } else if (selectedPosition == "Designer" && selectedTypes === "Full Time") {
                setCalculatePay(30.0);
            } else {
                setCalculatePay(0.0);
                setErrorMessage("Not a supported combination therefore Pay per Hour is 0.0");
            }
        }
    };

    // Trigger pay calculation whenever selectedPosition or selectedTypes changes
    useEffect(() => {
        handleCalculatePay();
    }, [selectedPosition, selectedTypes]);

    function formatBirthday(date) {
        if (!date) return '';  
    
        const d = new Date(date);
        const year = d.getFullYear();  
        const month = (d.getMonth() + 1).toString().padStart(2, '0'); 
        const day = d.getDate().toString().padStart(2, '0');  
    
        return `${year}-${month}-${day}`;  
    }
    

    const handleResetButton = () => {

        setSelectedPosition("");
        setSelectedTypes("");
        setSelectedDays("");
        setSelectedTimes("");

        setName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setBirthday("");

        setCalculatePay(0.0);

        setErrorMessage("");
        setSuccess("");
    };

    const handleAddEmployeeButton = (event) => {

        event.preventDefault();

        if (!name || !lastName || !email || !phone || !address || !birthday ||
            selectedPosition === "" || selectedTypes === "" || selectedDays === "" || selectedTimes === "") {
            setErrorMessage("Please fill in all fields before submitting.");
            return;  
        }

        setErrorMessage("");  

        const dataToSend = {
            Name: name,
            LastName: lastName,
            Birthday: formatBirthday(birthday),  // Make sure the format matches the backend expectation (e.g., 'YYYY-MM-DD')
            Email: email,
            PhoneNumber: phone,
            Address: address,
            Position: selectedPosition,
            ShiftType: selectedTypes,
            ShiftDays: selectedDays,
            ShiftHours: selectedTimes,
            PayPerHour: calculatePay, 
            ManagerId: JSON.parse(localStorage.getItem("managerid")),
        };

        axios.post('api/Employee/add-employee', dataToSend)
        .then(response => {
                console.log("Employee added successfully:", response.data); 
                handleResetButton();
                setSuccess("Employee added successfully!");
        })
        .catch(error => {
            console.error("Failed to add employee:", error);
            setErrorMessage("Failed to add employee. Please try again.");
        });

    };
    


    return (
        <div>
            <div className="container my-5">
                <div className="card border border-darker round-2">
                    <h5 className="card-header">Add Employee</h5>
                    <div className="card-body">
                        <form className="container m-2 p-1 mx-auto" onSubmit={handleAddEmployeeButton}>
                            {/* Name and Last Name */}
                            <div className="row mb-3">
                                <div className="col-md-6 fw-bold">
                                    <label htmlFor="name-input" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name-input"
                                        placeholder="Enter Name"
                                        value={name} 
                                        onChange={handleChangeName} 
                                    />
                                </div>
                                <div className="col-md-6 fw-bold">
                                    <label htmlFor="lastname-input" className="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastname-input"
                                        placeholder="Enter Last Name"
                                        value={lastName} 
                                        onChange={handleChangeLastName} 
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
                                        value={email} 
                                        onChange={handleChangeEmail} 
                                    />
                                </div>
                                <div className="col-md-6 fw-bold">
                                    <label htmlFor="phone-input" className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone-input"
                                        placeholder="Enter Phone Number"
                                        value={phone} 
                                        onChange={handleChangePhone} 
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
                                        value={address} 
                                        onChange={handleChangeAddress} 
                                    />
                                </div>
                                <div className="col-md-6 fw-bold">
                                    <label htmlFor="birthday-input" className="form-label">Birthday</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="birthday-input"
                                        value={birthday} 
                                        onChange={handleChangeBirthday} 
                                    />
                                </div>
                            </div>


                            {/* Position, Shift Type, Shift Days, and Shift Hours */}
                            <div className="row mb-4">
                                {/* Position Dropdown */}
                                <div className="col-md-3 fw-bold">
                                    <label htmlFor="position-select" className="form-label m-1">Position</label>
                                    <select className="form-select"
                                        id="position-select"
                                        value={selectedPosition}
                                        onChange={handleChangePosition}>
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
                                    <select className="form-select"
                                        id="shift-type-select"
                                        value={selectedTypes}
                                        onChange={handleChangeTypes}>
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
                                    <select className="form-select"
                                        id="shift-days-select"
                                        value={selectedDays}
                                        onChange={handleChangeDays}>
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
                                    <select className="form-select"
                                        id="shift-hours-select"
                                        value={selectedTimes}
                                        onChange={handleChangeTimes}>
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
                                        Calculated Pay Per Hour: <strong id="pay-result">{calculatePay === 0.0 && !errorMessage ? `--` : `${calculatePay}`}</strong>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="d-flex justify-content-between mb-2">
                                <button type="submit" className="btn btn-primary mt-2">Add Employee</button>
                                <button type="button" className="btn btn-outline-danger mt-2" onClick={handleResetButton}>Reset</button>
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
