import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './components.css'
import ResetPassword from './ResetPassword';
import Details from './Details';
import logo from './images/flowerlogo.png'
import tour2 from './images/tour2.jpg'
import tour3 from './images/tour3.jpg'
import menu from './images/menu.png'
import tour1 from './images/homeWallpaper.jpg'
import iconglobe from './images/iconglobe.png';
import heart from './images/heart.png'


import Items from './Items.js'
class Home extends Component {
    state = {
        email: '',
        show: false,
        arr: {},
        isOpen: false,
        add: 'Add to Cart',
        click: false,

    }
    componentDidMount() {
        var auth = JSON.parse(localStorage.getItem('auth'));
        if (!!auth) {
            this.setState({ email: auth.email }, () => {
                let data = JSON.parse(localStorage.getItem('data'))
                data.forEach((value) => {
                    if (value.email === this.state.email) {
                        this.setState({ arr: value }, () => console.log('state final', this.state.arr))
                    }
                })
            })
        }
        else {
            this.props.history.push('/login')
        }

    }
    onAdd = () => {
        this.setState({ click: true })
    }


    onLogOut = () => {
        localStorage.removeItem('auth');
        this.props.history.push('/login')
    }

    checkPassword = (password) => {
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        return !!password ? re.test(password) ? true : alert('Password is invalid') : alert('Please enter Password[Required Field]')
    }
    resetPassword = (newPassword) => {
        let { email } = this.state
        if (this.checkPassword(newPassword)) {
            let data = JSON.parse(localStorage.getItem('data'))
            data.forEach((value) => {
                if (value.email === email) {
                    if (value.password === newPassword) {
                        alert('Password cant be same as old one')
                        return
                    }
                    value.password = newPassword
                    localStorage.setItem('data', JSON.stringify(data))
                    alert('Password changed')
                    return true;
                }
            })
        }
    }
    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen }, console.log('toggle clicked', this.state.isOpen))
    }

    render() {
        return (
            <div>
                <div className="topHeader">
                    <div className="navigationBtn">
                        <label>  <img className="menubtn" src={menu} onClick={this.toggle}></img></label>
                    </div>
                    <div className="headerLogo">
                        <img width="17%" src={logo}></img>
                    </div>
                    <div className="logout">
                        <button className="btn" onClick={this.onLogOut}>Logout</button>
                    </div>

                    {this.state.isOpen ? <div id="myNav" className="menuHover">
                        <a className="closebtn" onClick={this.toggle}>&times;</a>
                        <div className="content">
                            <ResetPassword buttonLabel="Reset" resetPassword={this.resetPassword} />
                            <Details buttonLabel="Details" email={this.state.email} details={this.state.arr} />
                        </div>
                    </div> : null}


                    <div className="headingText">
                        <h1>OUTDOOR</h1>
                    </div>
                    <div className="subheadingText">
                        <p>Is Where Life Happens</p>
                    </div>
                </div>


                {/* <button className="btn" onClick={this.FindDetails}>Details</button> */}



                <div className="toursPlanes">
                    <h1>Exciting tours for adventurous people</h1>
                    <div className="divide">
                        <div className="divideText">
                            <h3>You're going to fall in love with nature</h3>
                            <p style={{ lineHeight: '26px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                            </p>

                            <h3 style={{ marginTop: '53px' }}>Live adventurous like you never have before</h3>
                            <p style={{ lineHeight: '26px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                            </p>
                        </div>
                        <div className="dividePhoto">
                            <img className='tour photo1' src={tour1}></img>
                            <img className='tour photo2' src={tour2}></img>
                            <img className='tour photo3' src={tour3}></img>
                        </div>
                    </div>

                </div>

                <div>
                    <div className="features">
                        <div className="sub">
                            <div className="sectionFeatures">
                                <div className="featurebox">
                                    <img src={iconglobe} height="90" width="90"></img>
                                    <h2>Explore</h2>
                                    <p className="textFeature">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                                <div className="featurebox">
                                    <img src={heart}></img>
                                    <h2 style={{ marginTop: '14px' }}>Meet Nature</h2>
                                    <p className="textFeature">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                                <div className="featurebox">
                                    <img src={iconglobe} height="90" width="90"></img>
                                    <h2>Your way</h2>
                                    <p className="textFeature">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                                <div className="featurebox">
                                    <img src={heart}></img>
                                    <h2 style={{ marginTop: '14px' }}>Rapture</h2>
                                    <p className="textFeature">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tourPackages">
                    <div className='tourText'>Exciting Tour Items</div>
                    {/* <div class="grid"> */}
                    <Items />
                    {/* </div> */}
                </div>


                {/* Footer */}
                <footer className="footer">
                    <div>
                        <img width='9%' src={logo}></img>
                    </div>
                    <div className="divideFooter">
                        <div className="footerNav">
                            <ul>
                                <li style={{ textTransform: 'uppercase' }}>Company</li>
                                <li className="list">About</li>
                                <li className="list">Terms</li>
                                <li className="list">Contact</li>
                                <li className="list">Help</li>
                            </ul>
                        </div>
                        <div className="footerInfo">
                            <p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's
                               <a href="#">copyright@02020 </a> standard dummy  textever since the 1500s, when an unknown printer took a galley of type
                                                                                                                                                                                                                                                                                                     and scrambled it tomake a type specimen book.
                                                                                                                                                                                                                                                                                                     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                                                                                                                                                                                                                                                                                                     unchanged.
                            </p>


                        </div>
                    </div>
                </footer>

            </div >

        );
    }
}

export default withRouter(Home);