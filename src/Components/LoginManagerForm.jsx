import React from 'react';

function LoginManagerForm() {
    return (
        <div>
            <div className="col-md-12 col-12 p-4" style={{
                border: "solid black 1px",
                borderRadius: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)" // Custom shadow
            }}>
                <div className="form-floating m-3" id="username-login-container">
                    {/* Corrected the `for` attribute to `htmlFor` in label */}
                    <label htmlFor="username-login">Username</label>
                    <input type="text" className="form-control login-input" id="username-login" name="username-login" placeholder="Enter Username" />
                </div>

                <div className="form-floating m-3" id="password-login-container">
                    {/* Corrected the class attribute to className */}
                    <label htmlFor="password-login">Password</label>
                    <input type="password" className="form-control login-input" id="password-login" placeholder="Password" />
                </div>

                <div className="container" id="login-evaluation">
                    {/* Placeholder for potentially dynamic HTML content */}
                </div>

                <div id="login-buttons" className="d-flex justify-content-center mt-3">
                    <button id="login-button" type="button" className="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    );
}

export default LoginManagerForm;
