const botao = document.getElementById('botao-principal');
const input = document.getElementById('itens');
const lista = document.getElementById('nomes');
const contador = document.getElementById('contador');

// Variáveis auxiliares
let numeroDeItens

botao.addEventListener('click', addArtista);
botao.addEventListener('click', exibirValorDoCampo);

function addArtista() {
	// Criar e adiciona novo elemento na lista
	let artista = input.value;
	input.value = ''; // Limpar campo de input
	input.focus();

    function exibirValorDoCampo() {
	input.value;    

	let itemDaLista = document.createElement('li');
	itemDaLista.innerText = artista;

	lista.appendChild(itemDaLista);

	// Incrementa contador
	numeroDeItens= numeroDeItens+ 1;
	contador.innerText = `${numeroDeItens} artistas`;
}