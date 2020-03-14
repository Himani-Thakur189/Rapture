
import './components.css'
import React, { Component } from 'react';
import Input from './Stateless/Input';
class ResetPassword extends Component {
    state = {
        modal: false,
        newPassword: '',
        error: '',

    }
    toggle = () => {
        this.setState({ modal: !this.state.modal })
    }
    handleChange = (e, name) => {
        this.setState({ newPassword: e.target.value })
        this.setState({ error: 'password must be one uppercase, one lowercase, aand atleastt of 6 character' })
    }
    reset = () => {
        if (this.state.newPassword) {
            this.setState({ error: '' })
            this.props.resetPassword(this.state.newPassword)
        }
    }
    render() {
        return (
            <div>
                <button className="btn" onClick={this.toggle}>{this.props.buttonLabel}</button>
                {this.state.modal ? <div id="myModal" className="modal" >
                    <h2 style={{ marginTop: '10px' }}>Reset Password</h2>
                    <span className="close" onClick={this.toggle}>&times;</span>
                    <div className="modal-content">
                        <Input type="password" name="password" handleChange={this.handleChange} placeholder="Enter new password..." />
                        <button className="btn" style={{ position: 'absolute', top: '31px', right: '24%' }} onClick={this.reset}>Set</button>
                        <p style={{
                            marginTop: '6%',
                            color: 'darkred'
                        }}>{this.state.error}</p>
                    </div>
                </div> : null}
            </div>
        );
    }
}

export default ResetPassword;
