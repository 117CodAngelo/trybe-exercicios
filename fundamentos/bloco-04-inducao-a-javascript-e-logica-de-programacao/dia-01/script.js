/* 1x1*/
const ax11 = 10;
const bx11 = 100;
let cx11 = ax11 + bx11;
console.log(cx11)
/* 1x2 */
const ax12 = 10;
const bx12 = 100;
let cx12 = ax12 - bx12;
console.log(cx12)
/* 1x3 */
const ax13 = 10;
const bx13 = 100;
let cx13 = ax13 * bx13;
console.log(cx13)
/* 1x4 */
const ax14 = 10;
const bx14 = 100;
let cx14 = ax14 / bx14;
console.log(cx14)
/* 1x5 */
const ax15 = 100;
const bx15 = 100;
let cx15 = ax15 % bx15;
console.log(cx15)
/* 2x1 */
const ax21 = 10;
const bx21 = 100;
console.log(Math.max(bx21, ax21))
/* 3x1 */
const ax31 = 101;
const bx31 = 100;
const cx31 = 5523
console.log(Math.max(bx31, ax31, cx31))
/* 4x1 */
const ax41 = -1000;
if (ax41 > 0) {
    console.log("positive")
} else if (ax41 < 0) {
    console.log("negative")
} else {
    console.log ("null")
}/* 5x1 */
const ax51 = 61;
const bx51 = 60;
const cx51 = 60;
if (bx51 + cx51 + ax51 === 180) {
    console.log(true);
} else {
    console.log("verifique os angulos")
}
/* 6x1 */
const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};
/* 7x1 */
const grade = 51
if (grade < 0 || grade > 100) {
    console.log('ERRO');
} else if (grade >= 90) {
    console.log('a');
} else if (grade >= 80) {
    console.log('b');
} else if (grade >= 70) {
    console.log('c'); 
} else if (grade >= 60) {
    console.log('d');
} else if (grade >= 50) {
    console.log('e');
} else {
    console.log('f');
}
/* 8x1 */
let a = 10;
let b = 3;
let c = 2;
let = itsParTELLME = false;
if (c % 2 === 0 || a % 2 === 0 || b % 2 === 0) {
    itsParTELLME = true;
} else {
    console.log(itsParTELLME)
}
console.log(itsParTELLME)
/* 9x1 */
let e = 10;
let d = 3;
let payment = 2;
let = itsimpTELLME = false;
if (e % 2 === 1 || d % 2 === 1 || payment % 2 === 1) {
    itsParTELLME = true;
} else {
    console.log(itsimpTELLME)
}
console.log(itsimpTELLME)
/* 11x1 */

let inss
let ir = 0;

const recebido = 3000;

if (recebido <= 1556.94) {
    inss = recebido * 0.08;
} else if (recebido <= 2594.92) {
    inss = recebido * 0.09;
} else if (recebido <= 5189.82) {
    inss = recebido * 0.11;
} else {
    inss = 570.88;
}

const paymentSemInss = recebido - inss;

if (paymentSemInss <= 1903.98) {
    ir = 0;
} else if (paymentSemInss <= 2826.65) {
    ir = (paymentSemInss * 0.075) - 142.80;
} else if (paymentSemInss <= 3751.05) {
    ir = (paymentSemInss * 0.15) - 1345.80;
} else if (paymentSemInss <= 4664.68) {
    ir = (paymentSemInss * 0.225) - 636.13;
} else {
    ir = (paymentSemInss * 0.275) - 869.36;
}
 console.log('salario: ' + (paymentSemInss - ir))
/* 10x1 */
const custoDoProduto = 10;
const imposto = custoDoProduto * 0.20;
const custoTotal = custoDoProduto - imposto
let valorVenda = 20
let lucro = valorVenda - custoTotal
if ( custoDoProduto > 0 && valorVenda > 0) {
    let milUnidades = lucro * 1000
    console.log(milUnidades)
} else {
    console.log('erro')
}

