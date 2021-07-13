import React, { Component } from 'react';
import './App.css';

class ClearButton extends Component {
    clear = (e) => {
        console.log([e.target.name]);
        this.props.onClick([e.target.name])
    }
    render() {
        return (
            <button name={this.props.name} onClick={this.clear}>
                Clear
            </button>
        )
    }
}
export default ClearButton