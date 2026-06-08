function suma(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function resta(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiplicacion(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function division(a, b) {
    if (parseFloat(b) === 0) {
        return "Error: División por cero";
    }
    return parseFloat(a) / parseFloat(b);
}   


function limpiar(num1, num2) {
    num1.value = "";
    num2.value = "";
}