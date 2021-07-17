import { useState, useEffect } from "react"
import { useDrag } from 'react-dnd'

function ResultDND(props) {
    let [resultado, setResultado] = useState(0);
    let [message, setMessage] = useState("");

    useEffect(() => {
        calcular(props.operation.simbol);
        mensaje(props.operation.operation, props.operation.simbol);
    }, [props])

    let calcular = (operacion) => {
        let a = parseFloat(props.value);
        let b = parseFloat(props.value2);
        switch (operacion) {
            case "+": setResultado(a + b); break;
            case "-": setResultado(a - b); break;
            case "*": setResultado(a * b); break;
            case "/": setResultado((a / b).toFixed(3)); break;
            case "^": setResultado((Math.pow(a, b))); break;
            case "^-2": setResultado((Math.sqrt(a)).toFixed(3)); break;
            case "hyp": setResultado((Math.hypot(a, b)).toFixed(3)); break;
            default: break;
        }
    }
    let mensaje = (opearcion, simbolo) => {
        let a = parseFloat(props.value);
        let b = parseFloat(props.value2);
        let message;
        if (b === 0 && simbolo === "/" || (b < 0 || a < 0) && simbolo === "^-2") {
            message = "Error al calcular la " + opearcion;
            setResultado("");
        }
        else {
            message = "El resultado de la " + opearcion + " de " + a + " y " + b + " es: ";
        };
        setMessage(message);
    }

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "div",
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }));
    return (
        <div className="border">
            <p id="Result" ref={drag} style={{ border: isDragging ? "5px solid red" : "0px" }}>
                {message}{resultado} </p>
        </div>
    )
}
export default ResultDND