import React, { Component } from 'react';
import './components.css'
import contact1 from './images/contact1.png'
class Details extends Component {
    state = {
        modal: false,
        details: {},
        buttonLabel: this.props.buttonLabel,
        email: '',
        name: '',
        show: true
    }
    toggle = () => {
        this.setState({ modal: !this.state.modal })
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getderived state from props', props)
        if (state.email !== props.email) {
            return {
                details: props.details
            }
        }
        return null;

    }


    render() {
        const { details } = this.state
        console.log('details in render hiiiii', details)
        return (
            <div>
                <button className="btn" onClick={this.toggle}>{this.props.buttonLabel}</button>
                {this.state.modal ?
                    <div id="myModal" className="detailModal">
                        <span className="close" onClick={this.toggle}>&times;</span>
                        <h1>Details of logged user</h1>
                        <div className="detailContent">
                            <div className="rightSide">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>{details.fname}{' '}{details.lname}</td>
                                        </tr>
                                        <tr>
                                            <td>{details.email}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="leftSide">

                            </div>
                        </div>
                    </div> : null}
            </div>
        );
    }
}

export default Details;