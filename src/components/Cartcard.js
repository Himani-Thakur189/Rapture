import React from 'react';
import remove from './images/remove.png';
import later from './images/later.png'
const Cartcard = ({ img, heading, subheading, price, onSaveLater, id }) => {
    return (
        <div className='Card'>
            <div className='cartCard'>
                <img className='cartImg' src={img} height='150px' width='150px'></img>
                <div className='cartHeading'>
                    <p> {heading}</p>
                    <div className='otherInfo'>
                        <p>{subheading}</p>
                        <p>{price}</p>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <button className='cardBtn' onClick={() => onSaveLater(id)}><img className='btnIcon' src={later} width='20px'></img>Save for Later</button>
                <button className='cardBtn'><img className='btnIcon' src={remove} width='20px'></img>Remove Item</button>
            </div>
        </div>

    );
};

export default Cartcard;