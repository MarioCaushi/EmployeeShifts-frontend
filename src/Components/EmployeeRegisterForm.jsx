import React from 'react';

function EmployeeRegisterForm() {

    const createButton = (number) => (
        <div className="col-3 m-1 p-2"> {/* Adjusted for three buttons per row */}
            <button type="button" className="btn btn-secondary" style={{
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
                        }} >
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
                        }} >
                            OK
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeRegisterForm;
