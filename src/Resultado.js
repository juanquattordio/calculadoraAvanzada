import React, { Component } from 'react';
import './App.css';

class Resultado extends Component {
    render() {
        return (
            <div>
                Resultado: {this.props.value}
            </div>
        )
    }
}
export default Resultado