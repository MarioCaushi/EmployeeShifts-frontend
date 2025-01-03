import React from 'react';

function EmployeeEvents({ events, loading }) {
  // Inline style for the scrollable container
  const scrollableStyle = {
    maxHeight: '500px', // Adjust this value based on your UI needs
    overflowY: 'auto'   // Enable vertical scrolling
  };

  return (
    <div>
      <h4 className="text-center mt-5 mb-3">Employee Events - {events.length}</h4>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : events.length > 0 ? (
        <div className="row mt-5 mb-3" style={scrollableStyle}>
          {events.map(event => (
            <div key={event.eventId} className="col-12 mb-4">
              <div className="card h-100 rounded">
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">{event.description}</p>
                  <p className="card-text">
                    <small className="text-muted">Date: {new Date(event.eventDate).toLocaleDateString()}</small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Time: {event.eventTime.substring(0, 5)}</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted">No events to display.</p>
      )}
    </div>
  );
}

export default EmployeeEvents;
