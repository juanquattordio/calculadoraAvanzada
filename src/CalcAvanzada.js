import React, { Component } from 'react';
import './App.css';
import ClearButton from './ClearButton';
import Input from './Input';
import Result from './Result';
import ResultDND from './ResultDND';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

let OperacionesList = [
    { key: "1", simbol: "+", operation: "suma" },
    { key: "2", simbol: "-", operation: "resta" },
    { key: "3", simbol: "*", operation: "multiplicación" },
    { key: "4", simbol: "/", operation: "división" },
    { key: "5", simbol: "^", operation: "potencia" },
    { key: "6", simbol: "^-2", operation: "raiz cuadrada" },
    { key: "7", simbol: "hyp", operation: "hipotenusa" },
]

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

    changeValue = (value, name) => {
        this.setState({
            [name]: value,
        })
    }


    onDragEnd = result => {
        // para reordenar la lista
    };

    render() {
        return (
            <div>
                <div>
                    <ClearButton name="input1" onClick={this.clear}></ClearButton>
                    <Input name="input1" onChange={this.changeValue} onKeyDown={this.changeValue2}
                        valor={this.state.input1}></Input>
                </div>
                <div>
                    <ClearButton name="input2" onClick={this.clear}></ClearButton>
                    <Input name="input2" onChange={this.changeValue} onKeyDown={this.changeValue2}
                        valor={this.state.input2}></Input>
                </div>
                {/* <Result value={this.state.input1} value2={this.state.input2}></Result> */}
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="resultadosDroppeable1">
                        {provided => (
                            <div ref={provided.innerRef}
                                {...provided.droppableProps}>
                                {OperacionesList.map((op, index) => <ResultDND value={this.state.input1} value2={this.state.input2} operation={op} key={op.key} index={index}></ResultDND>)}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        )

    }
}

export default CalcAvanzada