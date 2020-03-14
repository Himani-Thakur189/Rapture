import '../components.css';
import React from 'react';

const Input = ({ name, type, handleChange, placeholder }) => {
    return (
        <div>
            <input
                className="InputTags"
                name={name}
                type={type}
                onChange={(e) => handleChange(e, name)}
                autoComplete="off"
                placeholder={placeholder}
            >

            </input>
        </div>
    );
};

export default Input;