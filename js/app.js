function criaVue(elemento,dados,metodos) {
	return new Vue({el:elemento, data:dados, methods:metodos});
}

function reverter(texto) {
	return texto.split('').reverse().join('');
}
