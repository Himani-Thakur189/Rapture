import React, { Component } from 'react';
import Hoc from './Hoc';

class FirstComponent extends Component {
state={
    emp:[
        {
           id:1,
           name:'himani'
        },
        {
            id:1,
           name:'prabh'
        },
        {
            id:1,
           name:'happy'
        }
    ]
}
show=()=>{
    this.state.emp.map()
}

    render() {
        return (
            <div>
                in FirstComponent
            </div>
        );
    }
}

export default FirstComponent;