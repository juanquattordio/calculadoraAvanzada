import React, { Component } from 'react';
import './App.css';

class Input extends Component {

    changeValue = (e) => {
        this.props.onChange(e.target.value, [e.target.name])
    }

    render() {
        return (
            <div>
                <input type="text" name={this.props.name} onChange={this.changeValue}>
                </input>

            </div>
        )
    }
}
export default Input