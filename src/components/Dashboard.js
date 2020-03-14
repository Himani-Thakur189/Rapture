import React, { Component } from 'react';
import {Link } from 'react-router-dom';
class Dashboard extends Component {
    render() {
        return (
            <div>

                <h4>Dashboard is here</h4>
                {/* <ul style={{ listStyleType: 'none'}}>
            
               <li style={{display:'inline',marginRight:'20px' }}>
                 <Link to="/signup">SignUp</Link>
               </li>

               <li style={{display:'inline',marginRight:'20px' }}>
                 <Link to="/login">Login</Link>
             </li>
               <li style={{display:'inline',marginRight:'20px' }}>
                 <Link to="/">Home</Link>
               </li>
                
             </ul>
          */}
             <hr />
            </div>
        );
    }
}

export default Dashboard;