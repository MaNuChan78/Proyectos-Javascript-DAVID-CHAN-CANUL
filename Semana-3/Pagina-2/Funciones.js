function esPar(numero) {
    if (numero % 2 === 0)
        return true;
    else
        return false;
}

function esImpar(numero) {
    if (numero % 2 !== 0)
        return true;
    else
        return false;
}

function esPrimo(numero) {
    let esprimo = true;
    let divisor = 2;
    if (numero < 2) {
        return false;
    } else {
        while (esprimo && divisor < numero) {
            if (numero % divisor === 0) {
                esprimo = false;
            }
            divisor++;
        }
        return esprimo;
    }
}