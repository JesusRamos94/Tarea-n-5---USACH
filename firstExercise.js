// 1. Mostrar en consola la secuencia de Fibonacci:
// a. Entre los números 0 y 1000.
// b. Números pares entre 0 y 1000.
// c. Números impares entre 0 y 1000.

const sequenceFibonacci = (number) => {
    const fibonacci = [0, 1];
    for (let i = 2; i < number; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }

    console.log("Fibonacci =>", fibonacci);
    console.log("Pares =>", fibonacci.filter(e => e % 2 === 0));
    console.log("Impares =>", fibonacci.filter(e => e % 3 === 0));

};

sequenceFibonacci(17);