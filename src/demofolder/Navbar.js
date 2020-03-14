

import React from 'react';

const Navbar =(props)=>{
    

    const showMessage = () => {
        console.log('show ,essafe',props.name)
        alert('Followed ' + props.name);
      };
    
    const handleClick = () => {
          console.log(' handle clck function starts',props.name)
        setTimeout(showMessage, 2000);
      };
    
        return (
            <div>
            <button onClick={handleClick}>function</button>
             </div>
        );
    }


export default Navbar;