/** @format */

// tipos primitivos

//boolean
var vouF = false;
console.log(vouF);

// number
var numero = 23;
console.log(typeof numero);

// string
var nome = 'Marco';
console.log(nome);

//function
var funcao = function () {};
console.log(typeof funcao);

//como declarar
// var
var variavel; // variável criada, não definida
console.log(variavel);
variavel = 'Fuganti'; // variavel definida
console.log(variavel, typeof variavel);

// let escopo de bloco
let idade = 36;
console.log(idade, typeof idade);

// const não pode ser alterada depois de criada
const pi = 3.14;
console.log(pi, typeof pi);

// escopo
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
	let escopoLocalInterno = 'local';
}
console.log(escopoLocal);

function escopoLocal2() {
	let escopoLocalInterno = 'local';
	console.log(escopoLocalInterno);
}
escopoLocal2();

// console.log(escopoLocalInterno);

// atribuicao
var atributo = 'sim';

// comparacao
var comparacao = '0' == 0;
console.log(comparacao);

//comparacao identica
var comparacaoidentica = '0' === 0;
console.log(comparacaoidentica);

//soma
console.log(1 + 10);

//subtracao
console.log(5 - 1);

//multiplicacao
console.log(2 * 6);

//divisao real
console.log(20 / 3);

//divisao inteira (resto)
console.log(7 % 2);

//potenciacao
console.log(2 ** 10);

//operadores relacionais
console.log(5 > 2);
console.log(5 < 2);
console.log(5 >= 2);
console.log(5 <= 2);

//operadores logicos
var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;

////// vetores (arrays)  e objetos

let array = ['string', 1, true, [1, 2, 3]];
console.log(array);
console.log(array[2]);

array.forEach(function (item, index) {
	console.log(item, index);
});
