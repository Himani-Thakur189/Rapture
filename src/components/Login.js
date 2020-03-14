import React, { Component } from 'react';
import Label from './Stateless/Label';
import Input from './Stateless/Input';
import { withRouter } from 'react-router-dom';
import './components.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: {
                email: '',
                isAuth: false,
            },
            errors: {
                email: '',
                password: ''
            },
            empty: {
                email: 'Email cant be empty [Required Field]',
                password: 'Password cant be empty [Required Field]'
            },
            email: '',
            password: '',
            show: false
        }
    }
    route = () => {
        this.props.history.push('/signup')
    }
    handleChange = (e, name) => {
        console.log('value', name)
        this.setState({ [name]: e.target.value }, () => {
            console.log('state', this.state);
            switch (name) {
                case 'email':
                    this.checkEmail(this.state.email, name);
                    break;
                case 'password':
                    this.checkPassword(this.state.password, name);
                    break;
                default: console.log('default')
            }
        })
    }
    checkEmail = (email, type) => {
        let { errors } = this.state
        let { empty } = this.state
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!!email) {
            if (mailformat.test(email)) {
                errors[type] = ''
                empty[type] = ''
                this.setState({ errors })
                return true
            }
            else {
                empty[type] = ''
                errors[type] = 'Email is invalid'
                this.setState({ errors })
            }
        }
        else {
            empty[type] = 'Email cant be empty [ Required Field ]'
            errors[type] = ''
            this.setState({ errors })
        }
    }

    checkPassword = (password, type) => {
        let { errors } = this.state
        let { empty } = this.state
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        console.log('re', re.test(password), password.length)
        if (!!password) {
            if (re.test(password)) {
                console.log('re', re.test(password))
                errors[type] = ''
                empty[type] = ''
                this.setState({ errors })
                return true;
            }
            else {
                empty[type] = ''
                errors[type] = 'Password must be atleast one uppercase, one lowercase and of atleast 6 digits'
                this.setState({ errors })
            }
        }
        else {
            empty[type] = 'Password cant be empty[ Required Field ]'
            errors[type] = ''
            this.setState({ errors })
        }
    }

    checkFieldValidation = (email, password) => {
        console.log('checkfieldvalidaion', email, password)
        let { auth } = this.state
        let data = JSON.parse(localStorage.getItem('data'))
        console.log('data', data)
        if (!!data) {
            console.log('data from ls ', data)
            let result = data.filter((value) => value.email === email && value.password === password)
            console.log('result', result)
            if (result.length) {
                console.log('fil;terrr', true)
                auth.isAuth = true
                auth.email = email
                this.setState({ auth })
                console.log('state is', this.state.auth)
                return true;
            }
            else {
                alert('Password or Email is incorrect,[make sure you register]')
                return false;
            }

        }
    }
    onLogin = () => {
        let { email } = this.state.errors
        let { password } = this.state.errors
        let { auth } = this.state
        this.setState({ show: true })

        if (email.length === 0 && password.length === 0 && this.state.empty.email.length === 0 && this.state.empty.password.length === 0) {
            console.log(this.state.email, this.state.password)
            console.log('inside login valid')
            if (this.checkFieldValidation(this.state.email, this.state.password)) {
                console.log('check filrf', true)
                localStorage.setItem('auth', JSON.stringify(this.state.auth))
                if (auth.isAuth) {
                    console.log('donnneee')
                    this.props.history.push({
                        pathname: '/home'
                    })
                }

            }
        }
    }

    render() {
        let auth = JSON.parse(localStorage.getItem('auth'))
        if (auth) {
            this.props.history.replace('/home')
        }
        return (
            <div className='mainContainer'>
                <div className="container">
                    <h1 className="headingLogin">Login</h1>

                    <Label text="Email"></Label>
                    <Input name="email" type="text" placeholder="Email...." handleChange={this.handleChange}></Input>
                    <p className="errors">{this.state.errors.email}</p>
                    {this.state.show ? <p className="errors">{this.state.empty.email}</p> : null}

                    <Label text="Password"></Label>
                    <Input name="password" type="password" placeholder="Password...." handleChange={this.handleChange}></Input>
                    <p className="errors">{this.state.errors.password}</p>
                    {this.state.show ? <p className="errors">{this.state.empty.password}</p> : null}

                    <button className='buttonStyle' onClick={this.onLogin}>Login</button>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center', marginTop: '40px', paddingBottom: '20px'
                    }}>
                        <div> <a className="styleLink" onClick={this.route}>Not Registered?</a></div>
                        {/* <div> <button className="Style" onClick={this.route}>Register</button></div> */}

                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);