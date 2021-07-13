import { useState, useEffect } from "react"

function Result(props) {
    let [resultadoSuma, setResultadoSuma] = useState(0);
    let [resultadoResta, setResultadoResta] = useState(0);
    let [resultadoMult, setResultadoMult] = useState(0);
    let [resultadoDiv, setResultadoDiv] = useState(0);

    useEffect(() => {
        setResultadoSuma(parseFloat(props.value) + parseFloat(props.value2))
        setResultadoResta(parseFloat(props.value) - parseFloat(props.value2))
        setResultadoMult(parseFloat(props.value) * parseFloat(props.value2))
        setResultadoDiv(parseFloat(props.value) / parseFloat(props.value2))
    }, [props])

    return (
        <div>
            <p>El resultado de la suma es: {resultadoSuma} </p>
            <p>El resultado de la resta es: {resultadoResta} </p>
            <p>El resultado de la multiplicación es: {resultadoMult} </p>
            <p>El resultado de la división es: {resultadoDiv} </p>

        </div>
    )
}
export default Result