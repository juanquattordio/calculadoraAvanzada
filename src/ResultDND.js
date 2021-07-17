import { useState, useEffect } from "react"
import { useDrag } from 'react-dnd'

function ResultDND(props) {
    let [resultado, setResultado] = useState(0);
    let [message, setMessage] = useState("");

    useEffect(() => {
        calcular(props.operation);
    }, [props])

    let calcular = (operacion) => {
        let a = parseFloat(props.value);
        let b = parseFloat(props.value2);
        let message1;
        let message2;
        if (b !== 0) {
            message1 = "Error"
        } else {
            message1 = "El resultado de la " + operacion.operation + " de " + a + " y " + b + " es:";
            message2 = "El resultado de la " + operacion.operation + " de " + a + " es:";
        };
        switch (operacion.simbol) {
            case "+": setResultado(a + b); setMessage(message1); break;
            case "-": setResultado(a - b); setMessage(message1); break;
            case "*": setResultado(a * b); setMessage(message1); break;
            case "/": setResultado(a / b); setMessage(message1); break;
            case "^": setResultado(a / b); setMessage(message1); break;
            case "^-2": setResultado(a / b); setMessage(message1); break;
            default: setResultado(a); setMessage(message2); break;
        }
    }
    let a = parseFloat(props.value);
    let b = parseFloat(props.value2);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "div",
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }));
    return (
        <div className="border">
            <p id="Result" ref={drag} style={{ border: isDragging ? "5px solid red" : "0px" }}>
                {message}  {resultado} </p>
        </div>
    )
}
export default ResultDND