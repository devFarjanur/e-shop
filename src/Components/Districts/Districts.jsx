// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Upazilas from '../Upazilas/Upazilas';
import './Districts.css'

const Districts = () => {
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');

  useEffect(() => {
    // Fetch data from the JSON file (replace with the correct path)
    fetch('districts.json')
      .then((response) => response.json())
      .then((data) => setDistricts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  return (
    <div className='heda'>
      <select value={selectedDistrict} onChange={handleDistrictChange}>
        <option value="">Select District</option>
        {districts.map((district) => (
          <option key={district.id} value={district.id}>
            {district.name}
          </option>
        ))}
      </select>

      {/* Pass the selected district as a prop to Upazilas */}
      <Upazilas selectedDistrict={selectedDistrict} />
      
    </div>
  );
};

export default Districts;
