/* 1x1 */
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let n of numbers) {
    console.log(n);
} */

/* 2x1 */
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let n of numbers) {
    soma = soma + n;
}
console.log(soma); */

/* 3x1 */
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let n of numbers) {
    soma = soma + n;
}
let mediaAritimetica = soma / numbers.length
console.log(mediaAritimetica); */

/* 4x1 */
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let n of numbers) {
    soma = soma + n;
}
let mediaAritimetica = soma / numbers.length
if (mediaAritimetica > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
} */

/* 5x1 */
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = null;
for (let n of numbers) {
    if (maiorNumero <= n) {
        maiorNumero = n
    } else {
        console.log("e menor")
    }
}
console.log(maiorNumero) */

/* 6x1 */
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroDeImpares = [];
for (let n of numbers) {
    if (n % 2 === 1)
    numeroDeImpares.push(n);

}
if (numeroDeImpares.length >= 1) {
    console.log(numeroDeImpares.length)
} else {
    console.log("não há resultados")
} */

/* 7x1 */
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
menorNumero = Math.max(...numbers);
for (let n of numbers) {
    if (n < menorNumero) {
        menorNumero = n
    }
}
console.log(menorNumero) */

/* 8x1 */
let inicioDoArray = 1;
let fimDoArray = 25;
let array = [];
for (let index = inicioDoArray; index <= fimDoArray; index += 1) {
    array.push(index);
}
console.log(array)