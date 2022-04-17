/** @format */
// atalhos para DOM
var p_array_dobro = document.getElementById('array_dobro');
var p_array_original_map = document.getElementById('array_original_map');

///
// Map - Dobrar array
var arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
p_array_original_map.innerHTML = arrayNumeros;

function dobraNumero(numero) {
	return numero * 2;
}

var arrayDobro = arrayNumeros.map(dobraNumero);

p_array_dobro.innerHTML = arrayDobro;

console.log(arrayNumeros);
console.log(arrayDobro);

////////////////
// Filter - Retorna pares

var p_array_somente_pares = document.getElementById('array_somente_pares');
let somentePares = arrayNumeros.filter((x) => x % 2 === 0);

p_array_somente_pares.innerHTML = somentePares;
console.log(somentePares);

// Reduce - Somar itens da array
let p_reduce_soma = document.getElementById('reduce_soma');

p_reduce_soma.innerHTML = arrayNumeros.reduce(
	(acc, valAtual) => acc + valAtual
);

// Reduce - lisa de preços

let p_reduce_lista = document.getElementById('reduce_lista');

let saldo = 500;

// // forma mais simplificada
// const listaDePrecos = [23, 42, 33, 67];

// p_reduce_lista.innerHTML = listaDePrecos.reduce(
// 	(anterior, atual) => anterior - atual,
// 	saldo
// );

// usando objetos dentro do array

const lista = [
	{
		nome: 'arroz',
		preco: 23,
	},
	{
		nome: 'feijão',
		preco: 8,
	},
	{
		nome: 'macarrão',
		preco: 7,
	},
	{
		nome: 'molho tomate',
		preco: 4,
	},
];

function calculaSaldo(saldo, lista) {
	return lista.reduce(function (prev, current) {
		return prev - current.preco;
	}, saldo);
}

p_reduce_lista.innerHTML = calculaSaldo(saldo, lista);
