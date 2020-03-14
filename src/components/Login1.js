import React, { Component } from 'react';
import Label from './Stateless/Label';
import Input from './Stateless/Input';
import { withRouter } from 'react-router-dom';


const buttonStyle = {
    color: 'black',
    fontWeight: '700',
    backgroundColor: 'cadetblue',
    width: '10%',
    padding: '10px',
    fontSize: '17px',
    borderRadius: '10px 10px 10px 10px',
    marginTop: '15px'
}
const Style = {
    marginTop: '10px',
    marginLeft: '20px',
    color: 'black',
    fontWeight: '700',
    backgroundColor: 'cadetblue',
    borderRadius: '9px 9px 7px 8px',
    padding: "6px 6px 6px 6px"
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: {
                email: '',
                isAuth: '',

            },
            errors: {

            }
        }
    }

    LoginRoute = () => {
        this.props.history.push({
            pathname: '/',
            state: {
                email: this.state.email
            }
        })
    }
    route = () => {
        this.props.history.push('/signup')
    }
    handleChange = (e, name) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        console.log('value', value, name)
        this.setState({ [name]: value }, () => console.log('state', this.state));
    }

    checkFieldValidation = () => {
        let { email } = this.state
        let { password } = this.state
        let { auth } = this.state
        if (!!email && !!password) {
            let data = JSON.parse(localStorage.getItem('data'))
            console.log('data', data)
            if (!!data) {
                console.log('data from ls ', data)
                Object.keys(data).forEach((value) => {
                    if (data[value].email === email && data[value].password === password) {
                        auth.isAuth = true
                        auth.email = email
                        this.setState({ auth })
                        console.log('state is', this.state.auth)
                        return true;
                    }
                })
                if (auth.isAuth === false) {
                    alert('Password or Email is incorrect,[make sure you register]')
                    return false;
                }
                return true;
            }

            alert('Register First')
            return false;
        }
        alert('Enter your username and password,[Empty Fields]')
        return false;
    }

    onLogin = () => {
        let { email } = this.state
        let { password } = this.state
        let { auth } = this.state
        if (this.checkFieldValidation()) {
            console.log('email password from ls', email, password)
            if (auth.isAuth) {
                this.props.history.push({
                    pathname: '/home'
                })
                console.log('is auth', this.state.auth)
                localStorage.setItem('auth', JSON.stringify(this.state.auth))
            }
            else {
                alert('Password or email is incorrect,[ Make sure you register first!]')
            }
        }
    }


    render() {
        let auth = JSON.parse(localStorage.getItem('auth'))
        if (auth) {
            this.props.history.replace('/home')
        }
        return (
            <div>
                <h1 style={{ color: 'cadetblue', paddingTop: '25px' }}>Login</h1>

                <Label text="Email"></Label>
                <Input name="email" type="text" placeholder="Enter email...." handleChange={this.handleChange}></Input>

                <Label text="Password"></Label>
                <Input name="password" type="password" placeholder="Enter password...." handleChange={this.handleChange}></Input>


                <button style={buttonStyle} onClick={this.onLogin}>Login</button>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center', marginTop: '40px', paddingBottom: '20px'
                }}>
                    <div><p>Not Register? Click here</p></div>
                    <div> <button style={Style} onClick={this.route}>Register</button></div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);