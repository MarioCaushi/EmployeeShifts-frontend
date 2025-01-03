import React, { useState } from 'react';

function EventFilter({handleAppliedFilters}) {
    const [filters, setFilters] = useState({
        EmployeeId: '',
        EmployeeFullName: '',
        EventTitle: '',
        EventDescription: '',
        EventDate: '',
        EventTime: '',
        showAll: false,
    });

    // Handle changes in input fields
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handleReset = () => {
        setFilters({
            EmployeeId: '',
            EmployeeFullName: '',
            EventTitle: '',
            EventDescription: '',
            EventDate: '',
            EventTime: ''
        });
    };

    const handleCheckboxChange = (event) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            showAll: event.target.checked
        }));
    };

    const sendFilters= () => {
        handleAppliedFilters(filters);
        handleReset();
    };

    return (
        <div className="container mt-3 mb-4">
            <h4>Filter Events</h4>
            <form>
                <div className="mb-3">
                    <label htmlFor="employeeId" className="form-label">EmployeeID</label>
                    <input
                        type="number"
                        className="form-control"
                        id="employeeId"
                        name="EmployeeId"
                        value={filters.EmployeeId}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="employeeFullName" className="form-label">Employee Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="employeeFullName"
                        name="EmployeeFullName"
                        value={filters.EmployeeFullName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="eventTitle" className="form-label">Event Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="eventTitle"
                        name="EventTitle"
                        value={filters.EventTitle}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="eventDescription" className="form-label">Event Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="eventDescription"
                        name="EventDescription"
                        value={filters.EventDescription}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="eventDate" className="form-label">Event Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="eventDate"
                        name="EventDate"
                        value={filters.EventDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="eventTime" className="form-label">Event Time</label>
                    <input
                        type="time"
                        className="form-control"
                        id="eventTime"
                        name="EventTime"
                        value={filters.EventTime}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 d-flex justify-content-center align-items-center">
                    <div className="form-check form-switch me-4">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="showAll"
                            checked={filters.showAll}
                            onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label mr-4" htmlFor="showAll">All</label>
                    </div>

                    <button type="button" className="btn btn-outline-success me-2 mr-4" onClick={sendFilters}> Apply Filters</button>
                    <button type="button" className="btn btn-outline-danger me-2 mr-4" onClick={handleReset}>Reset</button>
                </div>

            </form>
        </div>
    );
}


export default EventFilter;
