// Funciones o metodos -- son bloques de codigo reutilizables


const numero_1 = 10;
const numero_2 = 20;
const numero_3 = 30;
const numero_4 = 40;

console.log(`Promedio de ${numero_1} y ${numero_2}: ${promedio(numero_1, numero_2)}`);
console.log(`Promedio de ${numero_3} y ${numero_4}: ${promedio(numero_3, numero_4)}`);


function sumar(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function promedio(num1, num2) {
    return sumar(num1, num2) / 2;
}


