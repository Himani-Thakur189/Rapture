import React from 'react';
import '../components.css'


const Label = ({ text, sign }) => {
    return (
        <div>
            <label className='label'>{text}<span className='sign'>{sign}</span></label>
        </div>
    );
};

export default Label;