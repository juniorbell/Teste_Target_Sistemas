function isFibonacci(num) {
    let a = 0, b = 1;
    while (b <= num) {
        if (b === num) return `${num} pertence à sequência de Fibonacci.`;
        [a, b] = [b, a + b];
    }
    return `${num} não pertence à sequência de Fibonacci.`;
}


const numero = 21; // Aqui vc pode substituir por qualquer número que desejar
console.log(isFibonacci(numero));