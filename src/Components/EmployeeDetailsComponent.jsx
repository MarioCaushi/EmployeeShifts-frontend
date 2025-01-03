import React from 'react';

function EmployeeDetailsComponent({ employee, shift }) {

    return (
        <>
            <div className="d-flex justify-content-center mt-3">
                <div className="card border border-dark shadow-sm rounded bg-white" style={{ width: '90%', maxWidth: '800px' }}>
                    <div className="card-header bg-info text-white">
                        <h5 className="mb-0 text-center">
                            {`${employee.name} ${employee.lastName}`} <br />
                            <strong> <small>Employee ID: {employee.employeeId}</small></strong>
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <p><strong>Email:</strong> {employee.email}</p>
                                <p><strong>Phone:</strong> {employee.phoneNumber}</p>
                                <p><strong>Address:</strong> {employee.address}</p>
                                <p><strong>Birthday:</strong> {employee.birthday}</p>
                                <p><strong>Hire Date:</strong> {employee.hireDate}</p>
                            </div>
                            <div className="col-md-6">
                                <p><strong>Position:</strong> {employee.position}</p>
                                <p><strong>Status:</strong> {employee.status}</p>
                                <p><strong>Pay Per Hour:</strong> ${employee.payPerHour.toFixed(2)}</p>
                                <p><strong>Created At:</strong> {employee.createdAt}</p>
                                <p><strong>Updated At:</strong> {employee.updatedAt}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-muted text-center d-flex justify-content-around">
                        <div><strong>Shift Type:</strong> {shift.shiftType}</div>
                        <div><strong>Shift Hours:</strong> {shift.shiftHours}</div>
                        <div><strong>Shift Days:</strong> {shift.shiftDays}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmployeeDetailsComponent;