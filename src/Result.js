import { useState, useEffect } from "react"

function Result(props) {
    let [resultadoSuma, setResultadoSuma] = useState(0);
    let [resultadoResta, setResultadoResta] = useState(0);
    let [resultadoMult, setResultadoMult] = useState(0);
    let [resultadoDiv, setResultadoDiv] = useState(0);
    let [resultadoPow, setResultadoPow] = useState(0);
    let [resultadoSqrtA, setResultadoSqrtA] = useState(0);
    let [resultadoSqrtB, setResultadoSqrtB] = useState(0);
    let [resultadoHyp, setResultadoHyp] = useState(0);

    useEffect(() => {
        let a = parseFloat(props.value);
        let b = parseFloat(props.value2);
        setResultadoSuma(a + b);
        setResultadoResta(a - b);
        setResultadoMult(a * b);
        setResultadoDiv(a / b);
        setResultadoPow(Math.pow(a, b));
        setResultadoSqrtA(Math.sqrt(a));
        setResultadoSqrtB(Math.sqrt(b));
        setResultadoHyp(Math.hypot(a, b));
    }, [props])

    let a = parseFloat(props.value);
    let b = parseFloat(props.value2);
    return (
        <div>
            <p>El resultado de la suma de {a} y {b} es: {resultadoSuma} </p>
            <p>El resultado de la resta de {a} y {b} es: {resultadoResta} </p>
            <p>El resultado de la multiplicación de {a} y {b} es: {resultadoMult} </p>
            <p>El resultado de la división de {a} y {b} es: {resultadoDiv} </p>
            <p>El resultado de la potencia de {a} elevado a {b} es: {resultadoPow} </p>
            <p>La raíz cuadrada de {a} es: {resultadoSqrtA} </p>
            <p>La raíz cuadrada de {b} es: {resultadoSqrtB} </p>
            <p>La hipotenusa de {a} y {b} es: {resultadoHyp} </p>
        </div>
    )
}
export default Result