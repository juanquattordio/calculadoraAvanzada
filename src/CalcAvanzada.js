import React, { Component } from 'react';
import './App.css';
import ClearButton from './ClearButton';
import Input from './Input';


class CalcAvanzada extends Component {
    state = {
        input1: 0,
        input2: 0,

    }
    render() {
        return (
            <div>
                <ClearButton>Clear</ClearButton>
                <Input value={this.state.input1}></Input>
                <ClearButton>Clear</ClearButton>
                <Input value={this.state.input2}></Input>
            </div>
        )

    }
}

export default CalcAvanzada