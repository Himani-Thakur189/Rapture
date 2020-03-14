import React, { Component } from 'react';
import backArrow from './images/backArrow.png';
import Cartcard from './Cartcard'
import later from './images/later.png'
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: '',
            later: []
        }
    }

    componentDidMount = () => {
        const { details } = this.props.location.state
        var updateddetails = details.filter(element => element.add == true);
        this.setState({ details: updateddetails })
    }
    onbackArrow = () => {
        this.props.history.push('/home')
    }
    onSaveLater = (id) => {
        let later = [...this.state.later]
        later.push(id)
        this.setState({ later: later }, () => console.log('later', this.state.later))
    }
    render() {
        console.log('this.', this.state.details)
        return (
            <div >
                <div className='myCart'>
                    My Cart({this.state.details.length})
                    <img src={backArrow} onClick={this.onbackArrow}></img>
                </div>
                <div style={{ padding: '4rem 24vw 4vh 25vw' }}>
                    {this.state.details ? this.state.details.map((el, index) => <Cartcard key={index} id={el.id} img={el.img} heading={el.heading}
                        price={el.price} subheading={el.subheading} onSaveLater={this.onSaveLater} />) : <div style={{ marginTop: '90%' }}>Card is empty</div>}
                </div>
                {this.state.later.length ? <div className='saveLaterTag'>
                    <img src={later} width='20px'></img>
                    <p> You have {this.state.later.length} product(s) saved for later.</p>
                </div> : null}
                <div className='Price'>
                    dhksfgouawefhyoawsugiajuwrifgrtwaes
                </div>
            </div>
        );
    }
}

export default Cart;