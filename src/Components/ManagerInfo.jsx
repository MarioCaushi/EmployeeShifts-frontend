import React from 'react'

function ManagerInfo({manager}) {
  return (
    <div>
       <div className="container my-5 ">
            <div className="card border border-darker round-2">
                <h5 className="card-header">Manager Information</h5>
                <div className="card-body">
                    <h5 className="card-title">{manager.Name} {manager.LastName}</h5>
                    <p className="card-text">
                        <strong>Email:</strong> {manager.Email}<br/>
                        <strong>Phone:</strong> {manager.Phone}<br/>
                        <strong>Username:</strong> {manager.Username}<br/>
                        <strong>Address:</strong> {manager.Address}<br/>
                        <strong>Birthday:</strong> {manager.Birthday}<br/>
                        <strong>Account Created:</strong> {manager.AccountCreated}<br/>
                        <strong>Last Updated:</strong> {manager.LastUpdated}
                    </p>
                </div>
                <div className="card-footer text-muted">
                    Manager ID: {manager.ManagerId}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManagerInfo
