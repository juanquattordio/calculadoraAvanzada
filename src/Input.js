import React, { Component } from 'react';
import './App.css';

class Input extends Component {
    render() {
        return (
            <input placeholder={this.props.value}>

            </input>

        )
    }
}
export default Input