import { useState, useEffect } from "react"
import { Draggable } from "react-beautiful-dnd";

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

    return (
        <Draggable draggableId={props.operation.key} index={props.index}>
            {provided => (
                <div className="border"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <p>
                        {message}{resultado}
                    </p>
                </div>
            )}

        </Draggable>
    )
}
export default ResultDND