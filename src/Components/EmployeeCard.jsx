import React from 'react';

function EmployeeCard() {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 m-3"> {/* Include margin-bottom for spacing between rows */}
            <div className="d-flex flex-column align-items-center p-3 bg-white border shadow rounded">
                <div className="text-center">
                    <p className="employee-name m-0"><strong>Mario Caushi</strong></p>
                    <p className="employee-position m-0 text-muted">Developer</p>
                </div>
                <div className="employee-info mt-2 text-center">
                    <p className="m-0">Status: Active</p>
                    <p className="m-0">Type: Full Time</p>
                    <p className="m-0"><strong> ID: f</strong></p>
                </div>
                <div className="employee-actions mt-2">
                    <button type="button" className="btn btn-info btn-sm m-1 rounded-2" id="view-f">View Details</button>
                    <button type="button" className="btn btn-warning btn-sm m-1 rounded-2" id="edit-f">Edit</button>
                    <button type="button" className="btn btn-danger btn-sm m-1 rounded-2" id="delete-f">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default EmployeeCard;
