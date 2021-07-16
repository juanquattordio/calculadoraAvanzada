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
    // changeValue2 = (value, name) => {
    //     if (value == 'Backspace') {
    //         this.setState({
    //             [name]: this.state.[name].slice(0, -1),
    //         })
    //     }
    //     else {
    //         this.setState({
    //             [name]: this.state.[name] + value,
    //         })
    //     }
    // }

    changeValue = (value, name, e) => {
        this.setState({
            [name]: value,
        })
    }
    onFocus = (name) => {
        if (this.state.input1 === 0) {
            this.setState({
                [name]: "",
            })
        }
    }

    render() {
        return (
            <div>
                <ClearButton name="input1" onClick={this.clear}></ClearButton>
                <Input name="input1" onChange={this.changeValue} onKeyDown={this.changeValue2} onFocus={this.onFocus}
                    valor={this.state.input1}></Input>

                <ClearButton name="input2" onClick={this.clear}></ClearButton>
                <Input name="input2" onChange={this.changeValue} onKeyDown={this.changeValue2} onFocus={this.onFocus}
                    valor={this.state.input2}></Input>

                <Result value={this.state.input1} value2={this.state.input2}></Result>
            </div>
        )

    }
}

export default CalcAvanzada