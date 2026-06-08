const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('¿Cuál es tu numero favorito? ', (num) => {
    const numero = parseInt(num);
    rl.question('¿Cuál es tu segundo numero favorito? ', (num2) => {
        const numero2 = parseInt(num2);
        console.log(`La suma de tus numeros favoritos es: ${numero + numero2}`);
        rl.close();
    });
});