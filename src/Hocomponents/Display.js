import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>{this.props.id}</td>
                            <td>{this.props.name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Display;