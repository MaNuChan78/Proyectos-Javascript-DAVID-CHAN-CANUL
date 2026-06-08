const num1 = document.querySelector("#numero_1");
const num2 = document.querySelector("#numero_2");
const buttonSuma = document.querySelector ("#suma");
const buttonResta = document.querySelector ("#resta");
const buttonMultiplicacion = document.querySelector ("#multiplicacion");
const buttonDivision = document.querySelector ("#division");
const resultado = document.querySelector("#resultado");

buttonSuma.addEventListener("click", () => {
    const res = suma(num1.value, num2.value);
    resultado.textContent = res
    limpiar(num1, num2);
})  

buttonResta.addEventListener("click", () => {
    const res = resta(num1.value, num2.value);
    resultado.textContent = res
    limpiar(num1, num2);
})

buttonMultiplicacion.addEventListener("click", () => {
    const res = multiplicacion(num1.value, num2.value);
    resultado.textContent = res
    limpiar(num1, num2);
})

buttonDivision.addEventListener("click", () => {
    const res = division(num1.value, num2.value);
    resultado.textContent = res
    limpiar(num1, num2);
})