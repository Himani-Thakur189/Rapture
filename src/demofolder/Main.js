import React, { Component } from 'react';
import Header from './Header'
import DemoClass from './DemoClass';
class Main extends Component {
    state = {
        user: 'happy'
    }
    render() {
        return (
            <div>
                 <label>
                    <b>Choose profile to view: </b>
                    <select
                        value={this.state.user}
                        onChange={e => this.setState({ user: e.target.value })}>
                        <option value="himani">himani</option>
                        <option value="happy">happy</option>
                        <option value="harsh">harsh</option>
                    </select>
                </label>
               <h1>Welcome to {this.state.user} Profile</h1>
               <Header name={this.state.user}/>
               <DemoClass name={this.state.user}/>
            </div>
        );
    }
}

export default Main;