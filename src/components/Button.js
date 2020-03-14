import React from 'react';

const buttonStyle = {
    color: 'black',
    fontWeight: '700',
    backgroundColor: 'cadetblue',
    width: '10%',
    padding: '10px',
    fontSize: '17px',
    borderRadius: '10px 10px 10px 10px'
}
const Button = ({ text, route }) => {
    return (
        <div>
            <button style={buttonStyle} onClick={route}>{text}</button>
        </div>
    );
};

export default Button;