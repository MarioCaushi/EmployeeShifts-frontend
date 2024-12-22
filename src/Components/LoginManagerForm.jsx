import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; //use it for the redirection part after that page is built


function LoginManagerForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleFetching = (username, password) => {

        fetch(`http://localhost:5149/api/Manager/manager-login-authentication`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Username: username.trim(), Password: password })
        })
        .then(response => {
            if (!response.ok) {
                if (response.status === 401) {
                    return response.text().then(text => {
                        throw new Error(text || "Unauthorized access");
                    });
                } else {
                    return response.text().then(text => {
                        throw new Error(text || "An unexpected error occurred");
                    });
                }
            }
            return response.json();
        })
        .then(data => {
            alert("Successful but next part is yet to be built" );
        })
        .catch(error => {
            setErrorMessage(error.message);
            console.error(error);
        });
        
    }
    
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if (password === "" || username.trim() === "") {

            setErrorMessage("Enter both Username and Password");

            setTimeout(() => {
                setErrorMessage("");
            }, 5000);

        } else {
            handleFetching(username,password);
        }
    }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="col-md-12 col-12 p-4" style={{
                        border: "solid black 1px",
                        borderRadius: "20px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)"
                    }}>
                        <div className="form-floating m-3">
                            <label htmlFor="username-login">Username</label>
                            <input type="text" className="form-control login-input" id="username-login"
                                placeholder="Enter Username"
                                value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div className="form-floating m-3">
                            <label htmlFor="password-login">Password</label>
                            <input type="password" className="form-control login-input" id="password-login"
                                placeholder="Password"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        {errorMessage && (
                            <div className="container text-danger" id="login-evaluation">
                                {errorMessage}
                            </div>
                        )}

                        <div className="d-flex justify-content-center mt-3">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        );
 }


export default LoginManagerForm;
