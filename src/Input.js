import React, { Component } from 'react';
import './App.css';

class Input extends Component {

    changeValue = (e) => {
        if (!isNaN(e.target.value) || e.target.value == '.') {
            this.props.onChange(e.target.value, [e.target.name])
        }
    }
    changeValue2 = (e) => {
        const allowedKey = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', 'Backspace'];
        let i = allowedKey.indexOf(e.key);
        if (i >= 0) {
            this.props.onKeyDown(e.key, [e.target.name])
        }
    }
    render() {
        return (
            <div>
                <input type="text" name={this.props.name} onChange={this.changeValue}
                    value={this.props.valor}>
                </input>

            </div>
        )
    }
}
export default Input