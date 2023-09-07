// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ShopDetail.css'

const ShopDetail = (props) => {

    const {name, p_category, thana, districts} = props.shop;

    return (
        <div className='card'>
            <div className='shop'>
                <h3 style={{ textAlign: 'center' }}>{name} </h3>
                <p>Category: <b>  {p_category}  </b></p>
                <p>Upazila: <b> {thana}  </b> </p>
                <p>District: <b> {districts} </b>  </p>
            </div>
            <div className='btn'>
                <button className='bt'>shop now</button>
            </div>

            <div className='what'>
                <h4>What you get:</h4>
                <ul className="list">
                    <li>Task Management</li>
                    <li>Project Planning</li>
                    <li>Team Collaboration</li>
                    <li>Notifications</li>
                </ul>
            </div>
        </div>
      
    );
};

export default ShopDetail;