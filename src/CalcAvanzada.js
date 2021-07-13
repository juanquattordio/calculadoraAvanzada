import React, { Component } from 'react';
import './App.css';
import ClearButton from './ClearButton';
import Input from './Input';
import Resultado from './Resultado';

class CalcAvanzada extends Component {
    state = {
        input1: 0,
        input2: 0,
        suma: 0,
        resta: 0,
        multiplicacion: 0,
        division: 0,
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
                <Input name="input1" onChange={this.changeValue}></Input>

                <ClearButton name="input2" onClick={this.clear}></ClearButton>
                <Input name="input2" onChange={this.changeValue}></Input>

                <Resultado label="suma" value={this.state.suma}></Resultado>
                <Resultado label="resta" value={this.state.resta}></Resultado>
                <Resultado label="multiplicación" value={this.state.multiplicacion}></Resultado>
                <Resultado label="división" value={this.state.division}></Resultado>
            </div>
        )

    }
}

export default CalcAvanzada