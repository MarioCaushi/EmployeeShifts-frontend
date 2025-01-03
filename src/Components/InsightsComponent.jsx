import React from 'react'

function InsightsComponent({events}) {

return (
    <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <div className="overflow-auto shadow-sm p-4 mb-5 rounded-2" style={{ maxHeight: '600px' }}>
                        {events.map(event => (
                            <div key={event.employeeId} className="card mb-3 shadow-sm" style={{ borderRadius: '15px', transition: 'transform 0.3s ease-in-out' }}>
                                <div className="card-body" onMouseEnter={e => e.currentTarget.parentNode.style.transform = 'scale(1.03)'}
                                     onMouseLeave={e => e.currentTarget.parentNode.style.transform = 'none'}>
                                    <h5 className="card-title">{event.eventTitle}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{event.employeeFullName} - {event.employeeId}</h6>
                                    <p className="card-text">{event.eventDescription}</p>
                                    <p className="card-text">
                                        <small className="text-muted">Date: {event.eventDate.substring(0,10)} at {event.eventTime}</small>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InsightsComponent
