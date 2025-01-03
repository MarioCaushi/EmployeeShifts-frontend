import React, { useState, useEffect } from 'react';
import ManagerNavBar from '../Components/ManagerNavBar';
import InsightsComponent from '../Components/InsightsComponent';
import EventFilter from '../Components/EventFilter';
import axios from "axios";

export default function Insights() {
    // State to track if filters have been applied
    const [filtersApplied, setFiltersApplied] = useState(false);
    // Error state for handling actual errors
    const [error, setError] = useState('');

    const [appliedFilters, setAppliedFilters] = useState(null);

    const [events, setEvents] = useState([]);

    useEffect(() => {

        console.log("Applied Filters Updated:", appliedFilters);
        
        if (appliedFilters) {
            onFiltersApplied();

            const showAll = appliedFilters.showAll;
            console.log(showAll);

            const dataToSend = {
                EmployeeId: !isNaN(parseInt(appliedFilters.EmployeeId)) ? parseInt(appliedFilters.EmployeeId) : null,
                EmployeeFullName: appliedFilters.EmployeeFullName,
                EventTitle: appliedFilters.EventTitle,
                EventDescription: appliedFilters.EventDescription,
                EventDate: appliedFilters.EventDate,
                EventTime: appliedFilters.EventTime,
            };            
        

            console.log("Sending data:", dataToSend);
            axios.post(`api/Event/get-filtered-events/${showAll}`, dataToSend)
            .then(response => {
                console.log("Success:", response.data);
                setEvents(response.data.reverse());
            })
            .catch(error => {
                console.error("Error response:", error.response.data);
                handleFilterError("Some unexpected error fetching the filtered events");
            });
            
        }
    }, [appliedFilters]); 

    const handleAppliedFilters = (data) => {
        if (!data) {
            handleFilterError("Unexpected filter Error");
        } else {
            setAppliedFilters(data); // Set the filters and let useEffect handle the rest
        }
    };

    // Handler to update filter application status
    const onFiltersApplied = () => {
        setFiltersApplied(true);
        setError(''); 
    };

    // Handler for receiving error messages, if any, from the filter component
    const handleFilterError = (errorMessage) => {
        setError(errorMessage);
        setFiltersApplied(false);
        setAppliedFilters(null); 
    };

    return (
        <div>
            <ManagerNavBar/>
            <h2 className='text-center mt-3'>Insights</h2>

            <EventFilter handleAppliedFilters= {handleAppliedFilters}/>

            {error && (
                <div className="alert alert-danger mt-4 text-center" role="alert">
                    Error: {error}
                </div>
            )}

            {!filtersApplied && !error ? (
                <div className="alert alert-info mt-4 text-center" role="alert">
                    Please apply filters first to view insights.
                </div>
            ) : null}

            {filtersApplied && !error ? (
                <div className='container'>  
                    <h4 className='text-center mt-3'>All Events</h4>
                    <InsightsComponent events={events}/>
                </div>
            ) : null}
        </div>
    );
}
