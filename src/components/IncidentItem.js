import React, { useState } from 'react';

function IncidentItem({ incident }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="incident-card">
      <h3>{incident.title}</h3>
      <p><strong>Severity:</strong> {incident.severity}</p>
      <p><strong>Reported At:</strong> {new Date(incident.reported_at).toLocaleString()}</p>
      <button className="view-btn" onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "View Details"}
      </button>
      {showDetails && <p className="description">{incident.description}</p>}
    </div>
  );
}

export default IncidentItem;
