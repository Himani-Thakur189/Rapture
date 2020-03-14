import React, { Component } from 'react';

class DemoClass extends Component {

  
    showMessage = () => {
        console.log('props inside class showmessage',this.props.name)
        alert('Followed ' + this.props.name);
    };

    handleClick = () => {
        console.log('class starts')
        console.log('props inside class handleclick',this.props.name)
        setTimeout(this.showMessage, 2000);
    };

    render() {

        return (
            <div>
               
                <button onClick={this.handleClick}>class</button>
            </div>
        );
    }
}

export default DemoClass;