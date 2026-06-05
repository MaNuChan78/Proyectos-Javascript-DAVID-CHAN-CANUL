//imprimir numeros primos del 1 al 20 *

console.log("Numeros primos del 1 al 20:");

for (let numerosprimos = 2; numerosprimos <= 20; numerosprimos++) 
{
    let esPrimo = true;

    for(let divisor = 2; divisor < numerosprimos; divisor ++)
    {
        if (numerosprimos % divisor === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        console.log(numerosprimos);
    }
}
