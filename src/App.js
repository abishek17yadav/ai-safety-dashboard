import React, { useState } from 'react';
import { mockIncidents } from './data/mockData';
import IncidentList from './components/IncidentList';
import IncidentForm from './components/IncidentForm';
import FilterSortControls from './components/FilterSortControls';
import './App.css';

function App() {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');

  const addIncident = (newIncident) => {
    setIncidents([newIncident, ...incidents]);
  };

  const getFilteredIncidents = () => {
    let filtered = incidents;
    if (filter !== 'All') {
      filtered = incidents.filter((incident) => incident.severity === filter);
    }
    if (sortOrder === 'newest') {
      filtered.sort((a, b) => new Date(b.reported_at) - new Date(a.reported_at));
    } else {
      filtered.sort((a, b) => new Date(a.reported_at) - new Date(b.reported_at));
    }
    return filtered;
  };

  return (
    <div className="App">
      <h1>AI Safety Incident Dashboard</h1>
      <FilterSortControls 
        filter={filter} 
        setFilter={setFilter} 
        sortOrder={sortOrder} 
        setSortOrder={setSortOrder} 
      />
      <IncidentForm addIncident={addIncident} />
      <IncidentList incidents={getFilteredIncidents()} />
    </div>
  );
}

export default App;
