// eslint-disable-next-line no-unused-vars
import React from 'react';
import './SearchSection.css'

import Districts from '../Districts/Districts'

import ProductCategory from '../ProductCategory/ProductCategory';

const SearchSection = () => {
    return (
        <div className='search-section'>

            <div className="heading">
                <h1>Best Shops</h1>
                <h6>Get in on the trend with our curated selection of best-selling styles.</h6>
            </div>

           
            <div className="dropdown-container">
                <Districts></Districts>
                
                <ProductCategory></ProductCategory>
                <button className="search">Search</button>
            </div>

        </div>
    );
};

export default SearchSection;