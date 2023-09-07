// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const ProductCategory = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // Fetch data from the JSON file
    fetch('shopdetails.json') // Replace with the correct path to your JSON file
      .then((response) => response.json())
      .then((data) => setOptions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select Product Category</option>
        {options.map((option) => (
          <option key={option.id} value={option.p_category}>
            {option.p_category}
          </option>
        ))}
      </select>
    
    </div>
  );
};

export default ProductCategory;
