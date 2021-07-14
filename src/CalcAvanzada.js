import React, { Component } from 'react';
import './App.css';
import ClearButton from './ClearButton';
import Input from './Input';
import Result from './Result';

class CalcAvanzada extends Component {
    state = {
        input1: 0,
        input2: 0,
    }
    clear = (name) => {
        this.setState({
            [name]: 0,
        })
    }
    changeValue = (value, name) => {
        console.log("Se cambio " + name + " con valor " + value);
        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <div>
                <ClearButton name="input1" onClick={this.clear}></ClearButton>
                <Input name="input1" onChange={this.changeValue} valor={this.state.input1}></Input>

                <ClearButton name="input2" onClick={this.clear}></ClearButton>
                <Input name="input2" onChange={this.changeValue} valor={this.state.input2}></Input>

                <Result value={this.state.input1} value2={this.state.input2}></Result>
            </div>
        )

    }
}

export default CalcAvanzada