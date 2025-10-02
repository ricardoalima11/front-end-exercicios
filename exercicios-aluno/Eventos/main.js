const botao = document.getElementById('btn-adicionar');
const input = document.querySelector('#novo-item');
const lista = document.querySelector('#nomes-pessoa');

const listaDeItens = document.querySelector('.itens');

function addArtista() {
	if ( item.value == '') {
		alert('Preencha o campo item');
		} else {
			
			// Div (Elemento Mãe)
			let novoItem = document.createElement('div');

			//Elementos Filhos
			novoItem.innerHTML = `
				<h3 class="item">${item.value}</h3>
			 	<p class="pessoa"></p>
				<button class="trarei">Eu Trago!</button>
				
			
			`;


			// Adiciona elemento na página como filho de listaDeItens
			 listaDeItens.appendChild(novoItem);

			 // Adicionar evento ao botão de voluntariar-se
			 const botaoTrazer = listaDeItens.querySelector('.trazer');
			botaoTrazer.onclick
		}
}
 function.trazerItem(evento) {
	let botaoClicado = evento.target;
	let divDoItem = botaoClicado.parentNode;

	let paragrafo = divDoItem.querySelector('.pessoa');

	paragrafo.innerText = pessoa.value

	//console.log('EuTrago!');
 }
//Eventos
botao.onclick = adicionaItem;