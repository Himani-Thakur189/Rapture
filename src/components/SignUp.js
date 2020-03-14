import React, { Component } from 'react';
import Input from './Stateless/Input';
import Label from './Stateless/Label';
import './components.css'

// const buttonStyle = {
//     color: 'black',
//     fontWeight: '700',
//     backgroundColor: 'cadetblue',
//     width: '10%',
//     padding: '10px',
//     fontSize: '17px',
//     borderRadius: '10px 10px 10px 10px',
//     marginBottom: '80px'
// }
class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            arr: {
                fname: '',
                lname: '',
                dob: '',
                email: '',
                password: '',
                cpassword: '',
                gender: ''
            },
            errors: {
                fname: '',
                lname: '',
                dob: '',
                email: '',
                password: '',
                cpassword: '',
                gender: ''
            },
            empty: {
                fname: 'First Name cant be empty [ Required Field ]',
                dob: 'DOB cant be empty [ Required Field ]',
                email: 'Email cant be empty [ Required Field ]',
                password: 'Password cant be empty  [ Required Field ]',
                cpassword: 'Confirm Password cant be empty [ Required Field ]',
                gender: 'Gender cant be empty[ Required Field ]'
            },
            submit: false,
        }

    }

    validateThenRoute = () => {
        this.setState({ submit: true })
        let errors = { ...this.state.errors }
        let empty = { ...this.state.empty }
        let { arr } = this.state

        if (errors.fname.length === 0 && errors.lname.length === 0 && errors.dob.length === 0 && errors.email.length === 0
            && errors.password.length === 0 && errors.cpassword.length === 0 && empty.fname.length === 0 && empty.dob.length === 0 && empty.email.length === 0 && empty.password.length === 0
            && empty.cpassword.length === 0 && empty.gender.length === 0) {
            console.log('valid')
            if (this.uniqueEmail(arr.email)) {
                alert('User Successfully registered')
                this.route();
            }
        }
        else
            console.log('invalid')
        console.log('value', errors.fname.length)
        console.log('value', errors.lname.length, errors.dob.length, errors.email.length, errors.password.length)
        console.log('value', empty.lname, empty.dob, empty.email, empty.password)
    }
    uniqueEmail = (email) => {
        let data = JSON.parse(localStorage.getItem('data'))
        if (data) {
            const comp = data.filter(obj => obj.email === email)
            return comp.length ? alert('Already register user...[choose unique email]') : true
        }
        return true
    }
    route = () => {
        this.props.history.push({
            pathname: '/login'
        })
        let data = JSON.parse(localStorage.getItem('data'))
        if (!!data) {
            this.state.users.push(...data)
        }
        this.state.users.push({ ...this.state.arr })
        localStorage.setItem('data', JSON.stringify(this.state.users))
    }

    handleChange = (e, type) => {
        console.log('event', type)
        let { arr } = this.state
        arr[type] = e.target.value
        this.setState({ arr })
        switch (type) {
            case 'fname':
                this.checkName(arr.fname, type);
                break;
            case 'lname':
                this.checkLname(arr.lname, type);
                break;
            case 'gender':
                this.checkGender(arr.gender, type)
                break;
            case 'dob':
                this.checkDob(arr.dob, type)
                break;
            case 'email':
                this.checkEmail(arr.email, type)
                break;
            case 'password':
                this.checkPassword(arr.password, type)
                break;
            case 'cpassword':
                this.checkConfirmPassword(arr.password, arr.cpassword, type)
                break;
            default: console.log('default here')
        }
    }

    checkDob = (date, type) => {
        let { empty } = this.state
        let { errors } = this.state
        if (!!date) {
            let d = new Date(date)
            if (d.getFullYear() + 10 <= 2020) {
                empty[type] = ''
                errors[type] = ''
                return true
            }
            else {
                empty[type] = ''
                errors[type] = 'User must be 10 years old'
            }
        }
        else {
            errors[type] = ''
            empty[type] = 'DOB cant be empty[ Required Field ]'
        }
    }
    checkLname = (lname, type) => {
        let { errors } = this.state
        let { empty } = this.state
        var result = lname.match(/^[a-zA-Z\s]*$/)
        if (!!lname) {
            if (!!result) {
                if (result.input.length >= 2) {
                    errors[type] = ''
                    empty[type] = ''
                    this.setState({ errors })
                    return true
                }
                else {
                    errors[type] = 'Last Name must contain atleast 2 alphabets'
                }
            }
            else {
                errors[type] = 'Last name only allow alphabets e.g Roy'
                empty[type] = ''
                this.setState({ errors })
            }
        }
        else {
            errors[type] = ''
            this.setState({ errors })
        }

    }
    checkName = (name, type) => {
        let { errors } = this.state
        let { empty } = this.state
        if (!!name) {
            var result = name.match(/^[a-zA-Z\s]*$/)
            if (!!result) {
                console.log('length fname', result.input.length, typeof (result), result.length)
                if (result.input.length >= 2) {
                    empty[type] = ''
                    errors[type] = ''
                    this.setState({ errors })
                    return true
                }
                else {
                    errors[type] = 'First name must contain atleast 2 alphabets'
                    empty[type] = ''
                    this.setState({ errors })
                }

            }
            else {
                errors[type] = 'First Name only contains alphabets e.g Sam'
                empty[type] = ''
                this.setState({ errors }, () => console.log('err', this.state.errors.fname))
            }
        }
        else {
            empty[type] = 'First Name cant be empty[ Required Field ]'
            errors[type] = ''
            this.setState({ errors })
        }
    }
    checkGender = (gender, type) => {
        let { empty } = this.state
        if (!!gender) {
            empty[type] = ''
            return true
        }
        else {
            empty[type] = 'Gender cant be empty [ Required Field ]'
        }

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
        if (!!password) {
            if (re.test(password)) {
                errors[type] = ''
                empty[type] = ''
                this.setState({ errors })
                return true;
            }
            else {
                empty[type] = ''
                errors[type] = 'Password must be atlest one uppercase, one lowercase and of 6 digits'
                this.setState({ errors })
            }
        }
        else {
            empty[type] = 'Password cant be empty[ Required Field ]'
            errors[type] = ''
            this.setState({ errors })
        }
    }
    checkConfirmPassword = (password, cpassword, type) => {
        let { errors } = this.state
        let { empty } = this.state
        if (!!cpassword) {
            if (cpassword === password) {
                empty[type] = ''
                errors[type] = ''
                this.setState({ errors })
                return true;
            }
            else {
                empty[type] = ''
                errors[type] = 'Confirm Password dont match with password'
                this.setState({ errors })
            }
        }
        else {
            empty[type] = 'Confirm password cant be empty[ Required Field ]'
            errors[type] = ''
            this.setState({ errors })
        }

    }

    render() {
        let auth = JSON.parse(localStorage.getItem('auth'))
        if (!!auth) {
            this.props.history.replace('/home')
        }
        return (
            <div className="main">
                <div className="SignUpContainer">
                    <h4 className="headingSignup">Create your Account</h4>
                    <Label
                        text="First Name"
                        sign='*'>
                    </Label>
                    <Input name="fname"
                        type="text"
                        handleChange={this.handleChange}
                        placeholder="First name..."
                    />
                    <p className="errors" >{this.state.errors.fname}</p>
                    {this.state.submit ? <p className="errors">{this.state.empty.fname}</p> : null}

                    <Label text="Last Name" />
                    <Input
                        name="lname"
                        type="text"
                        handleChange={this.handleChange}
                        placeholder="Last name..."
                    />
                    <p className="errors">{this.state.errors.lname}</p>


                    <Label text="Gender" sign='*' />
                    <select
                        id="gender"
                        value={this.state.arr.gender}
                        placeholder={'Select'}
                        onChange={(e) => this.handleChange(e, 'gender')}
                        style={{ width: '58%', height: '36px', marginBottom: '41px', marginTop: '10px' }}>

                        <option>Select an option</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                    <p className="errors">{this.state.errors.gender}</p>
                    {this.state.submit ? <p className="errors">{this.state.empty.gender}</p> : null}


                    <Label
                        text="Date Of Birth"
                        sign='*' />
                    <Input name="dob"
                        type="date"
                        handleChange={this.handleChange}
                        placeholder="Date of birth...."
                    />
                    <p className="errors">{this.state.errors.dob}</p>
                    {this.state.submit ? <p className="errors">{this.state.empty.dob}</p> : null}

                    <Label
                        text="Email"
                        sign='*' />
                    <Input name="email"
                        type="email"
                        handleChange={this.handleChange}
                        placeholder="Email id..."
                    />
                    <p className="errors">{this.state.errors.email}</p>
                    {this.state.submit ? <p className="errors">{this.state.empty.email}</p> : null}

                    <Label
                        text="Password"
                        sign='*' />
                    <Input
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        placeholder="Password..."
                    />
                    <p className="errors">{this.state.errors.password}</p>
                    {this.state.submit ? <p className="errors">{this.state.empty.password}</p> : null}

                    <Label
                        text="Confirm Password"
                        sign='*' />
                    <Input
                        name="cpassword"
                        type="password"
                        handleChange={this.handleChange}
                        placeholder="Confirm your password..."
                    />
                    <p className="errors">{this.state.errors.cpassword}</p>
                    {this.state.submit ? <p className="errors">{this.state.empty.cpassword}</p> : null}

                    {/* <p style={{ color: 'red', textAlign: 'center' }}> at least one number, one lowercase and one uppercase <br /> letter
                  at least six characters</p> */}
                    {/* <Button text="SignUp" onClick={this.route}></Button> */}
                    <button className="buttonStyle" onClick={this.validateThenRoute}>SignUp</button>
                </div>
            </div>
        );
    }
}

export default SignUp;