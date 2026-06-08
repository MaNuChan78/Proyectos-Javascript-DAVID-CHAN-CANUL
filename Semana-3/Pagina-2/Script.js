const numero = document.querySelector("#numero");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado");

boton.addEventListener("click", () => {
    const num = parseInt(numero.value);

    if (esPar(num)) {
        if (esPrimo(num)) {
            resultado.textContent = `${num} es un número par y primo.`;
        } else {
            resultado.textContent = `${num} es un número par pero no primo.`;
        }
    } else if (esImpar(num)) {
            if (esPrimo(num)) {
                resultado.textContent = `${num} es un número impar y primo.`;
            } else {
                resultado.textContent = `${num} es un número impar pero no primo.`;
        }
        } 
})