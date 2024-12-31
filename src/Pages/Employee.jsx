import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Employee() {
  const [Message, setMessage] = useState("");

  //  Initialize employee data from localStorage into state
  const [employee, setEmployee] = useState(() => {
    return JSON.parse(localStorage.getItem("employee-login")) || {
      EmployeeID: "",
      Name: "",
      LastName: "",
      Position: "",
      Status: ""
    };
  });

  //  Destructure from the employee state object
  const { EmployeeID, Name, LastName, Position, Status } = employee;

  useEffect(() => {
    document.title = "Employee Shifts - Employee";
  }, []);

  // Logout: remove from localStorage and close tab
  const handleLogoutButton = () => {
    localStorage.removeItem("employee-login");
    window.close();
  };

  // POST the event and toggle status on success
  const handleAddEventButton = () => {

    const now = new Date();

    //  Extract the date in "YYYY-MM-DD" format
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateOnly = `${year}-${month}-${day}`; // e.g. "2024-08-31"

    // Extract the time in "HH:mm:ss" format
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeOnly = `${hours}:${minutes}:${seconds}`; // e.g. "13:05:27"

    // Determine the event title based on current status
    const eventTitle = Status === "Not Active" ? "Came to Work" : "Left Work";

    // Create the object to send to your .NET backend
    const dataToSend = {
      EmployeeId: EmployeeID,
      EmployeeStatus: Status,
      EventTitle: eventTitle,
      EventDate: dateOnly,
      EventTime: timeOnly
    };

    console.log("Data sent to API"+dataToSend);

    //  Send the POST request
    axios.post('api/Event/add-event', dataToSend)
      .then(response => {
        console.log('Success:', response.data);
        if(Status == "Not Active")
        {
          setMessage("Successful! Welcome to Work :)");
        }
        else
        {
          setMessage("Successful! Goodbye :)");
        }

        // Toggle the Status in React state and localStorage
        const newStatus = Status === "Not Active" ? "Active" : "Not Active";
        const updatedEmployee = {
          ...employee,
          Status: newStatus
        };

        // Update state so the UI re-renders
        setEmployee(updatedEmployee);

        // Update localStorage so it persists
        localStorage.setItem("employee-login", JSON.stringify(updatedEmployee));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card border border-2 shadow-sm p-3 mb-5 bg-body rounded-1" style={{ maxWidth: "400px", width: "100%", borderRadius: "15px" }}>
        <div className="card-body">
          <h5 className="card-title text-center mb-4">Employee Details</h5>
          <div className="m-4 mb-5">
            <p className="card-text"><strong>ID:</strong> {EmployeeID}</p>
            <p className="card-text"><strong>Name:</strong> {Name} {LastName}</p>
            <p className="card-text"><strong>Position:</strong> {Position}</p>
            <p className="card-text"><strong>Status:</strong> {Status}</p>
          </div>
          <div className="alert alert-danger text-center mb-4" role="alert">
            <strong>Important:</strong> Exit the page only via the "Logout" button
          </div>
          <div className="container d-flex justify-content-center align-items-center flex-column">
            {Status === "" ? (
              null
            ) : Status === "Not Active" ? (
              <button
                className="btn btn-outline-success mb-4"
                onClick={handleAddEventButton}
              >
                Come to Work
              </button>
            ) : (
              <button
                className="btn btn-outline-success mb-4"
                onClick={handleAddEventButton}
              >
                Leave Work
              </button>
            )}

            {Message && (
              <div className="alert alert-success text-center" role="alert">
                {Message}
              </div>
            )}

            <button
              className="btn btn-outline-danger"
              onClick={handleLogoutButton}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
