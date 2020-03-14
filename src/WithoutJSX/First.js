import React, { Component } from 'react';

class First extends Component {
    render() {
       return React.createElement('button',{style:{backgroundColor:`${this.props.color}`}},`Hello ${this.props.what}`)
    }
}

export default First;