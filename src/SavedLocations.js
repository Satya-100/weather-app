import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SavedLocations = ({ onSelectLocation }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchSavedLocations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/locations');
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching saved locations', error);
      }
    };

    fetchSavedLocations();
  }, []);

  const handleDelete = async (locationId) => {
    try {
      await axios.delete('http://localhost:5000/locations/delete', { data: { locationId } });
      setLocations(locations.filter((loc) => loc._id !== locationId));
    } catch (error) {
      console.error('Error deleting location', error);
    }
  };

  return (
    <div className="saved-locations">
      {locations.map((location) => (
        <div key={location._id} className="location-card" onClick={() => onSelectLocation(location.name)}>
          <p>{location.name}</p>
          <button onClick={() => handleDelete(location._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default SavedLocations;
