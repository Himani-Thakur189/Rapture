import React, { Component } from 'react';
import Box from './Box.js'
import gloves from './images/gloves.jpeg'
import helmet from './images/helmrt.jpeg'
import camera from './images/camera.jpeg'
import jacket from './images/jacket.jpeg'
import jacket2 from './images/jacket2.jpeg'
import cartIcon from './images/cartIcon.png'
import { withRouter } from 'react-router-dom';
import './components.css'
class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
            details: [
                {
                    id: 1,
                    img: require('./images/tent.jpg'),
                    heading: 'Egab Picnic Camping',
                    subheading: 'Egab Picnic Camping portable waterProof Tent(2 Person)',
                    price: '$100',
                    add: false,
                    later: false
                },
                {
                    id: 2,
                    img: gloves,
                    heading: 'Claz Trekking Gloves',
                    subheading: 'ForClaz Trekking Gloves, WaterProof ,Warm ,(Bikers)',
                    price: '$50',
                    add: false,
                    later: false
                },
                {
                    id: 3,
                    img: helmet,
                    heading: 'Benz Ultra Power',
                    subheading: 'BenZ Ultra Power Helmet, Open Face Helmet (Black Glossy)',
                    price: '$90',
                    add: false,
                    later: false
                },
                {
                    id: 4,
                    img: camera,
                    heading: 'Sony Digital Camera',
                    subheading: 'Sony Alpha Microless Digital Camera with 70mm lens',
                    price: '$200',
                    add: false,
                    later: false
                },
                {
                    id: 5,
                    img: gloves,
                    heading: 'Trekking Gloves',
                    subheading: 'ForClaz Trekking Gloves, WaterProof ,Warm ,(Bikers)',
                    price: '$90',
                    add: false,
                    later: false
                },
                {
                    id: 6,
                    img: require('./images/selfie.jpeg'),
                    heading: 'Powerpak stick',
                    subheading: 'Powerpak Bluetooth extendable selfie Stick, Wireless connectivity',
                    price: '$70',
                    add: false,
                    later: false
                },
                {
                    id: 7,
                    img: jacket2,
                    heading: 'Oswal Jacket',
                    subheading: 'Oswal Man Multipocket Warm jackets (Wind-Proof)',
                    price: '$90',
                    add: false,
                    later: false
                },
                {
                    id: 8,
                    img: require('./images/goggles.jpg'),
                    heading: 'AutoFly Adjustable',
                    subheading: 'AutoFly Adjustable Goggles, UV Protective, Dust Proof',
                    price: '$45',
                    add: false,
                    later: false
                },
                {
                    id: 9,
                    img: jacket,
                    heading: 'Moutain Hardwear',
                    subheading: 'Moutain Hardwear Absolute zero Dry parks Q',
                    price: '$80',
                    add: false,
                    later: false
                },
                {
                    id: 10,
                    img: jacket2,
                    heading: 'Denims Hardwear',
                    subheading: 'Moutain Hardwear Absolute zero Dry parks Q',
                    price: '$90',
                    add: false,
                    later: false
                }
            ],
            Alert: false,
            confirm: false,
            message: '',
            count: 0
        }
    }
    //alert of 1s on add or remove items
    alert = () => {
        this.setState({ confirm: true })
        setTimeout(() => {
            this.setState({ confirm: false })
        }, 1000);
    }
    // on Add items in cart
    onAdd = (index) => {
        console.log('onadd', index)
        this.state.details.map((value, key) => key === index ? value.add = true : null)
        this.setState({ count: this.state.count + 1 })
        this.setState({ message: 'Item added in Cart' })
        this.alert();
    }
    //on Remove items from cart
    onRemove = (index) => {
        console.log('onadd', index)
        this.state.details.map((value, key) => key === index ? value.add = false : null)
        this.setState({ message: 'Item removed from Cart' })
        this.setState({ count: this.state.count - 1 })
        this.alert();
    }
    //Router to Cart Page
    Showcart = () => {
        console.log('show')
        this.props.history.push({
            pathname: '/showCart',
            state: {
                details: this.state.details
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.count ? <div className='count'> {this.state.count}</div> : null}
                <img className='cart' src={cartIcon} onClick={this.Showcart}></img>
                {this.state.confirm ? <div className='message'>{this.state.message}</div> : null}
                <div className="grid">
                    {this.state.details.map((value, index) => {
                        return <Box key={index} index={index} img={value.img} heading={value.heading} subheading={value.subheading} onRemove={this.onRemove} price={value.price} add={value.add} onAdd={this.onAdd}></Box>
                    })}
                </div>

            </div>
        );
    }
}

export default withRouter(Items);