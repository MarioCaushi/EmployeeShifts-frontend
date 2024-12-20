import React from 'react'
import { Link } from "react-router-dom";


function ManagerLoginComponent() {
  return (
    <>
      {/* Manager login container */}
      <div className="d-flex flex-column align-items-center justify-content-center gap-2 mt-5">
        <img src="/Assets/ManagerLogo.png" alt="Manager logo" style={{ width: 50 }} className="mb-2" />

        <h4>If you are a Manager:</h4>
        <h5 className="mb-4">Click Here!</h5>
        <Link to="/ManagerLogin">
          <button type="button" className="btn btn-outline-success mb-4">Login as Manager</button>
        </Link>

      </div>
    </>
  )
}

export default ManagerLoginComponent
