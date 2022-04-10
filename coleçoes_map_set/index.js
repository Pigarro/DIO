/** @format */

// popular o Map com nome e papel no sistema
var usuarios = new Map();
usuarios.set('Joao', 'Admin');
usuarios.set('Pedro', 'Dev');
usuarios.set('Eduardo', 'Senior Dev');
usuarios.set('Guilherme', 'Estagiário');
usuarios.set('Marco', 'Admin');
usuarios.set('Julia', 'Dev');
usuarios.set('Arthur', 'Dev Junior');
usuarios.set('Leonardo', 'Dev');
usuarios.set('Neo', 'CEO');
usuarios.set('Roberta', 'Admin');
usuarios.set('Justino', 'Dev');
usuarios.set('Ricardo', 'Gerente');
usuarios.set('Maria Luiza', 'Admin');
usuarios.set('Cleuza', 'RH');

console.log(usuarios);
console.log(usuarios.size);

//cria variável para guardar lista de admins
var lista_admins = [];
// criar função getAdmin com um map
var getAdmin = function (usuarios) {
	// use o for..of para retornar array com os nome dos usuarios admnistradores
	for (let [key, value] of usuarios) {
		if (value == 'Admin') {
			lista_admins.push(key);
			console.log();
		}
	}

	console.log(lista_admins);
	// console.log(lista_admins);
	//exibe na tela a lista
	document.getElementById('lista_adms').innerHTML = lista_admins;
	document.getElementById('call_get_admins').disabled = true;
	document.getElementById('clear_admins').style.display = 'block';

	//Mostra botao 'Limpar'

	document.getElementById('clear_admins').visibility = 'visible';
};

/// Botao para limpar lista de admins exibida
var limparListaAdms = function () {
	document.getElementById('lista_adms').innerHTML = '';
	lista_admins = [];

	var display = document.getElementById('clear_admins').style.display;
	console.log(display);

	if (display == 'none')
		document.getElementById('clear_admins').style.display = 'block';
	else document.getElementById('clear_admins').style.display = 'none';
	document.getElementById('call_get_admins').disabled = false;
};

////

//inserir array
var array1 = [30, 30, 5, 223, 2040, 3054, 5];
// chamar função para retornar set único

var call_set = function () {
	var set1 = new Set(array1);
	console.log(set1);

	// using spreed operator pra tranformar set em array
	var arrayUnico = [...set1];
	console.log(arrayUnico);

	document.getElementById('array_unico').innerHTML = arrayUnico;
};
