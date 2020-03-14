import React, { Component } from 'react';
import './components.css'
class Box extends Component {

    constructor(props) {
        super(props);
        this.state = {
            click: false
        }
    }
    toggle = () => {
        this.setState({ click: !this.state.click })
    }
    render() {
        return (
            <div>

                <img className='item1' src={this.props.img} height='100px' width='100px' alt='Image is unavailable'></img>
                <p className='headText'>{this.props.heading}</p>
                <em className='em1'>{this.props.subheading}
                </em>
                <div id='price'>{this.props.price}</div>
                {this.props.add != true ? <button className='addButton' onClick={() => this.props.onAdd(this.props.index)}>Add to Cart</button> :
                    <button className='addButton' onClick={() => this.props.onRemove(this.props.index)}>Remove Item</button>}

            </div>
        );
    }
}

export default Box;