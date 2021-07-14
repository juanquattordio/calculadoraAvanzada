import React, { Component } from 'react';
import './App.css';

class Input extends Component {

    changeValue = (e) => {
        this.props.onChange(e.target.value, [e.target.name])
    }
    console = (e) => {
        console.log("Key" + e.key + " code " + e.code)
    }
    render() {
        return (
            <div>
                <input type="text" name={this.props.name} onChange={this.changeValue} value={this.props.valor} onKeyDown={this.console}>
                </input>

            </div>
        )
    }
}
export default Input