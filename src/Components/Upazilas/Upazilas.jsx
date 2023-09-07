// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 

const Upazilas = ({ selectedDistrict }) => {
  const [upazilas, setUpazilas] = useState([]);
  const [selectedUpazila, setSelectedUpazila] = useState('');

  useEffect(() => {
    // Fetch data from the JSON file (replace with the correct path)
    fetch('upazilas.json')
      .then((response) => response.json())
      .then((data) => setUpazilas(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredUpazilas = upazilas.filter((upazila) => upazila.district_id === selectedDistrict);

  useEffect(() => {
    // Reset the selected upazila if it's not available in the filtered options
    if (selectedUpazila && !filteredUpazilas.some((upazila) => upazila.id === selectedUpazila)) {
      setSelectedUpazila('');
    }
  }, [selectedDistrict, upazilas, selectedUpazila]);

  const handleUpazilaChange = (event) => {
    setSelectedUpazila(event.target.value);
  };

  return (
    <div>
      <select value={selectedUpazila} onChange={handleUpazilaChange}>
        <option value="">Select Upazila</option>
        {filteredUpazilas.map((upazila) => (
          <option key={upazila.id} value={upazila.id}>
            {upazila.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Upazilas;
