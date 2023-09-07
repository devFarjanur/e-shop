// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ShopDetail from '../ShopDetail/ShopDetail';
import './ShopDetails.css'

const ShopDetails = () => {

    const [shops, setShop] = useState([]);
    
    useEffect(() => {
        fetch('shopdetails.json')
        .then(res => res.json())
        .then(data => setShop(data));
    }, []);


    return (
        <div className='shop-section'>
            {
                shops.map( shop => <ShopDetail shop={shop} ></ShopDetail> )
            }
        </div>
    );
};

export default ShopDetails;