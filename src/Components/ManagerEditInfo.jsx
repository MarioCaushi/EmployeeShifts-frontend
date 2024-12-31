import React, { useState } from 'react';
import axios from "axios";

function ManagerEditInfo({ manager }) {
    // Initialize state variables for each form field using the manager prop
    const [name, setName] = useState(manager.Name);
    const [lastName, setLastName] = useState(manager.LastName);
    const [email, setEmail] = useState(manager.Email);
    const [phoneNumber, setPhoneNumber] = useState(manager.Phone);
    const [username, setUsername] = useState(manager.Username);
    const [password, setPassword] = useState('');  // Passwords should not be pre-populated
    const [address, setAddress] = useState(manager.Address);
    const [birthday, setBirthday] = useState(manager.Birthday);

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    // Handlers for changes on each input field
    const handleNameChange = (event) => setName(event.target.value);
    const handleLastNameChange = (event) => setLastName(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    const handleAddressChange = (event) => setAddress(event.target.value);
    const handleBirthdayChange = (event) => setBirthday(event.target.value);

    function formatDateForDotNet(dateStr) {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 0-based month
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // First, check if any data has changed
        if (
            name.trim().toLowerCase() === manager.Name.trim().toLowerCase() &&
            lastName.trim().toLowerCase() === manager.LastName.trim().toLowerCase() &&
            email.trim().toLowerCase() === manager.Email.trim().toLowerCase() &&
            phoneNumber.trim().toLowerCase() === manager.Phone.trim().toLowerCase() &&
            username.trim().toLowerCase() === manager.Username.trim().toLowerCase() &&
            address.trim().toLowerCase() === manager.Address.trim().toLowerCase() &&
            formatDateForDotNet(birthday) === formatDateForDotNet(manager.Birthday)
        ) {
            setErrorMessage("No changes were made.");
            setSuccessMessage("");
            return;
        }

        if (password && password.trim().toLowerCase() === manager.Password.trim().toLowerCase()) {
            setErrorMessage("Password cannot be the same.");
            setSuccessMessage("");
            return; // Stop the function if the password hasn't changed
        }

        setErrorMessage("");

        // Prepare data for API submission
        const updateData = {
            Name: name,
            LastName: lastName,
            Birthday: birthday === "" ? manager.Birthday : formatDateForDotNet(birthday), // Use existing birthday if not updated
            Email: email,
            PhoneNumber: phoneNumber,
            Username: username,
            Password: password == "" ? manager.Password : password, // Use existing password if not updated
            Address: address,
        };

        axios.put(`api/Manager/edit-manager-info/${manager.ManagerId}`, updateData,)
            .then((response) => {
                if (response.status === 200) {
                    console.log('Update successful:', response.data);
                    setSuccessMessage("Info updated successfully.");
                } else {
                    console.error('Unexpected response:', response);
                    setErrorMessage('Failed to update manager information.');
                    setSuccessMessage("");
                }
            })
            .catch((error) => {
                console.error('Error updating manager information:', error);
                setErrorMessage('An error occurred while updating the manager information. Please try again.');
                setSuccessMessage("");
            });
    };



    const handleDiscard = () => {

        setName(manager.Name);
        setLastName(manager.LastName);
        setEmail(manager.Email);
        setPhoneNumber(manager.Phone);
        setUsername(manager.Username);
        setPassword("");
        setAddress(manager.Address);
        setBirthday(manager.Birthday);

    }

    return (
        <div className="container my-5">
            <div className="card border border-darker round-2">
                <h5 className="card-header">Edit Manager Information</h5>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="container m-2 p-1 mx-auto">
                        <div className="fw-bold mb-2">
                            <label htmlFor="name-input" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name-input"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className="fw-bold mb-2">
                            <label htmlFor="lastname-input" className="form-label">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastname-input"
                                value={lastName}
                                onChange={handleLastNameChange}
                            />
                        </div>
                        <div className="fw-bold mb-2">
                            <label htmlFor="email-input" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email-input"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="fw-bold mb-2">
                            <label htmlFor="phone-input" className="form-label">Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone-input"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                            />
                        </div>
                        <div className="fw-bold mb-2">
                            <label htmlFor="username-input" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username-input"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                        </div>
                        <div className="fw-bold mb-2">
                            <label htmlFor="password-input" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password-input"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <div className="fw-bold mb-2">
                            <label htmlFor="address-input" className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address-input"
                                value={address}
                                onChange={handleAddressChange}
                            />
                        </div>
                        <div className="fw-bold mb-2">
                            <label htmlFor="birthday-input" className="form-label">Birthday</label>
                            <input
                                type="date"
                                className="form-control"
                                id="birthday-input"
                                value={birthday}
                                onChange={handleBirthdayChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <button type="submit" className="btn btn-primary mt-2 mr-2">Save Changes</button> {/* Add margin right */}
                            <button type="button" className="btn btn-outline-danger mt-2" onClick={handleDiscard}>Discard</button>
                        </div>

                        {successMessage && (
                            <div className="alert alert-success" role="alert">
                                {successMessage}
                            </div>
                        )}

                        {errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div>
                        )}

                    </form>
                </div>
                <div className="alert alert-warning mt-3" role="alert" style={{ fontWeight: "bold", color: "#856404", backgroundColor: "#fff3cd", border: "1px solid #ffeeba", borderRadius: "5px", padding: "10px" }}>
                    <i className="bi bi-exclamation-circle-fill" style={{ marginRight: "5px" }}></i>
                    Password needs to be more than 8 characters.
                </div>

                <div className="card-footer text-muted">
                    Manager ID: {manager.ManagerId}
                </div>
            </div>
        </div>
    );
}

export default ManagerEditInfo;
