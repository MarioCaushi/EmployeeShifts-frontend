import React, { useState,useEffect } from 'react';
import axios from "axios";

function EmployeeEditForm() {

    const [employee, setEmployee] = useState(null);

    // State for messages
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    //State for re-fetching
    const [isEdited, setIsEdited] = useState(false);

    //State for combinations of shifts
    const [position, setPosition] = useState([]);
    const [shiftTypes, setShiftTypes] = useState([]);
    const [shiftDays, setShiftDays] = useState([]);
    const [shiftTimes, setShiftTimes] = useState([]);

    const [selectedPosition, setSelectedPosition] = useState("");
    const [selectedTypes, setSelectedTypes] = useState("");
    const [selectedDays, setSelectedDays] = useState("");
    const [selectedTimes, setSelectedTimes] = useState("");

    const [employeeId, setEmployeeId] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [birthday, setBirthday] = useState("");

    const [calculatePay, setCalculatePay] = useState(0.0)

    //Fetching the necessary data from the backend
    useEffect(() => {
        const employeeId = JSON.parse(localStorage.getItem("employeeId"));

        if (!employeeId) {
            console.error("No employee ID found in localStorage.");
            setIsError(true);
            setMessage("No Employee Found!");
            return;
        }

        axios.get(`api/Employee/get-employee-by-id/${employeeId}`)
            .then(response => {

                setIsError(false);
                setMessage("");

                axios.get(`api/Shift/get-shift-by-id/${response.data.shiftId}`)
                    .then(shiftResponse => {

                        const data = {
                            EmployeeId: response.data.employeeId,
                            Name: response.data.name,
                            LastName: response.data.lastName,
                            Birthday: response.data.birthday,
                            Email: response.data.email,
                            PhoneNumber: response.data.phoneNumber,
                            Address: response.data.address,
                            Position: response.data.position,
                            ShiftType: shiftResponse.data.shiftType,
                            ShiftDays: shiftResponse.data.shiftDays,
                            ShiftHours: shiftResponse.data.shiftHours,
                            PayPerHour: response.data.payPerHour,
                        };

                        setEmployeeId(response.data.employeeId);
                        setName(response.data.name);
                        setLastName(response.data.lastName);
                        setBirthday(response.data.birthday);
                        setEmail(response.data.email);
                        setPhone(response.data.phoneNumber);
                        setAddress(response.data.address);
                        setSelectedPosition(response.data.position);
                        setSelectedTypes(shiftResponse.data.shiftType);
                        setSelectedDays(shiftResponse.data.shiftDays);
                        setSelectedTimes(shiftResponse.data.shiftHours);

                        console.log(data);
                        
                        setEmployee(data);
                        setIsError(false);
                        setMessage("");

                        axios.get(`api/Shift/get-shift-options`)
                        .then((responseOptions) => {
                            // Handle the response
                            console.log(responseOptions.data);
            
                            setPosition(responseOptions.data["Employee Positions"]);
                            setShiftTypes(responseOptions.data["Shift Types"]);
                            setShiftDays(responseOptions.data["Shift Days"]);
                            setShiftTimes(responseOptions.data["Shift Times"]);
            
                            // Log the response data 
                            console.log('Employee Positions:', responseOptions.data["Employee Positions"]);
                            console.log('Shift Types:', responseOptions.data["Shift Types"]);
                            console.log('Shift Days:', responseOptions.data["Shift Days"]);
                            console.log('Shift Times:', responseOptions.data["Shift Times"]);
            
                            setIsError(false);
                            setMessage("");
                        })
                        .catch((error) => {
                            // Handle errors
                            console.error(error);
                            setIsError(true);
                            setMessage("Unexpected error");
                        });
                    })
                    .catch(error => {
                        console.error("Error fetching shift data:", error);
                        setIsError(true);
                        setMessage("Unexpected error");
                    });
            })
            .catch(error => {
                setIsError(true);
                setMessage("Unexpected error");
            });
    }, [isEdited]);


    //Function to handle the reset button
    const handleResetButton = () => {

        setName(employee.Name);
        setLastName(employee.LastName);
        setBirthday(employee.Birthday);
        setEmail(employee.Email);
        setPhone(employee.PhoneNumber);
        setAddress(employee.Address);
        setSelectedPosition(employee.Position);
        setSelectedTypes(employee.ShiftType);
        setSelectedDays(employee.ShiftDays);
        setSelectedTimes(employee.ShiftHours);
    }


    //Handle Changes Functions
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

    //Function to calculate Pay Per Hour
      const handleCalculatePay = () => {
            if (selectedPosition === "" || selectedTypes === "") {
                setCalculatePay(0.0);
            } else {
                if (selectedPosition == "Developer" && selectedTypes == "Part Time") {
                    setCalculatePay(20.0);
                    setIsError(false);
                    setMessage("");
                } else if (selectedPosition == "Developer" && selectedTypes == "Full Time") {
                    setCalculatePay(40.0);
                    setIsError(false);
                    setMessage("");
                } else if (selectedPosition == "Team Lead" && selectedTypes == "Part Time") {
                    setCalculatePay(25.0);
                    setIsError(false);
                    setMessage("");
                } else if (selectedPosition == "Team Lead" && selectedTypes == "Full Time") {
                    setCalculatePay(50.0);
                    setIsError(false);
                    setMessage("");
                } else if (selectedPosition == "Designer" && selectedTypes == "Part Time") {
                    setCalculatePay(15.0);
                    setIsError(false);
                    setMessage("");
                } else if (selectedPosition == "Designer" && selectedTypes === "Full Time") {
                    setCalculatePay(30.0);
                    setIsError(false);
                    setMessage("");
                } else {
                    setCalculatePay(0.0);
                    setIsError(true);
                    setMessage("Not a supported combination");
                }
            }
        };
    
        // Trigger pay calculation whenever selectedPosition or selectedTypes changes
        useEffect(() => {
            handleCalculatePay();
        }, [selectedPosition, selectedTypes]);

        //Function for Birthday Formatting
        function formatBirthday(date) {
            if (!date) return '';  
        
            const d = new Date(date);
            const year = d.getFullYear();  
            const month = (d.getMonth() + 1).toString().padStart(2, '0'); 
            const day = d.getDate().toString().padStart(2, '0');  
        
            return `${year}-${month}-${day}`;  
        };

        const handleSaveChanges = (event) => {
            event.preventDefault();

            const editEmployee = {
                EmployeeId: employeeId ,
                Name: name,
                LastName: lastName,
                Birthday: birthday,
                Email: email,
                PhoneNumber: phone,
                Address: address,
                Position: selectedPosition,
                ShiftType: selectedTypes,
                ShiftDays: selectedDays,
                ShiftHours: selectedTimes,
                PayPerHour: calculatePay
            };
        
            // Check if edited data is the same as original data
            const isSame = Object.keys(editEmployee).every(key => editEmployee[key] === (employee[key] || ''));
        
            if (isSame) {
                setMessage("Nothing is changed");
                return; // Stop the function if no changes are detected
            }
        
            // Validate that no fields are empty
            const hasEmptyFields = Object.values(editEmployee).some(value => value === "");
            if (hasEmptyFields) {
                setIsError(true);
                setMessage("Fields must be non-empty");
                return;
            }

            editEmployee.Birthday = formatBirthday(editEmployee.Birthday);

            axios.put(`api/Employee/edit-employee-info`, editEmployee)
            .then(response => {
                setIsError(false);
                setMessage("Employee updated successfully!");

                setInterval(() => {
                    handleToggleIsEdited();
                }, 3000);
            })
            .catch(error => {
                console.error("Failed to update employee:", error);
                setIsError(true);
                setMessage("Failed to update employee.");
            });
        };

        const handleToggleIsEdited = () => {
            setIsEdited(prev => !prev); 
        };
        

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-dark text-white">Edit Employee - {employeeId}</div>
                            <div className="card-body">
                                <form onSubmit={handleSaveChanges}>
                                    {/* Name and Last Name */}
                                    <div className="mb-3 row">
                                        <div className="col-md-6 ">
                                            <label htmlFor="name" className="form-label">First Name</label>
                                            <input type="text" className="form-control" id="name" name="name" value={name} onChange={handleChangeName} />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="lastName" className="form-label">Last Name</label>
                                            <input type="text" className="form-control" id="lastName" name="lastName" value={lastName} onChange={handleChangeLastName} />
                                        </div>
                                    </div>

                                    {/* Email and Phone Number */}
                                    <div className="mb-3 row">
                                        <div className="col-md-6">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleChangeEmail} />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                            <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" value={phone} onChange={handleChangePhone} />
                                        </div>
                                    </div>

                                    {/* Address and Birthday */}
                                    <div className="mb-3 row">
                                        <div className="col-md-6">
                                            <label htmlFor="address" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="address" name="address" value={address} onChange={handleChangeAddress} />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="birthday" className="form-label">Birthday</label>
                                            <input type="date" className="form-control" id="birthday" name="birthday" value={birthday} onChange={handleChangeBirthday} />
                                        </div>
                                    </div>

                                    {/* Position, Shift Type, Shift Days, Shift Hours */}
                                    <div className="mb-3 row">
                                        <div className="col-md-3">
                                            <label htmlFor="position" className="form-label">Position</label>
                                            <select className="form-control" id="position" name="position" value={selectedPosition} onChange={handleChangePosition}>
                                                <option value="">Select</option>
                                                {position.map(pos => (
                                                    <option key={pos} value={pos}>{pos}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="shiftType" className="form-label">Shift Type</label>
                                            <select className="form-control" id="shiftType" name="shiftType" value={selectedTypes} onChange={handleChangeTypes}>
                                                <option value="">Select</option>
                                                {shiftTypes.map(type => (
                                                    <option key={type} value={type}>{type}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="shiftDays" className="form-label">Shift Days</label>
                                            <select className="form-control" id="shiftDays" name="shiftDays" value={selectedDays} onChange={handleChangeDays}>
                                                <option value="">Select</option>
                                                {shiftDays.map(day => (
                                                    <option key={day} value={day}>{day}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="shiftHours" className="form-label">Shift Hours</label>
                                            <select className="form-control" id="shiftHours" name="shiftHours" value={selectedTimes} onChange={handleChangeTimes}>
                                                <option value="">Select</option>
                                                {shiftTimes.map(hours => (
                                                    <option key={hours} value={hours}>{hours}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Pay Per Hour */}
                                    <div className="mb-3">
                                        <label className="form-label">Pay Per Hour</label>
                                        <div className="alert alert-info" role="alert">
                                            <strong>${calculatePay.toFixed(2)}</strong> per Hour
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="d-grid  d-md-flex justify-content-md-center">
                                        <button type="submit" className="btn btn-success mr-3">Save Changes</button>
                                        <button type="button" className="btn btn-outline-info mr-3" onClick={() => window.history.back()}> Go Back</button>
                                        <button type="button" className="btn btn-warning" onClick={handleResetButton}>Reset</button>
                                    </div>

                                    {/* Message Display */}
                                    {message && (
                                        <div className={`alert ${isError ? 'alert-danger' : 'alert-success'} mt-3`} role="alert">
                                            {message}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmployeeEditForm;
