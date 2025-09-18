let numero;
let maiorNumero = 0;
let contador = 0;

do {
  numero = prompt('Insira um número');
  numero - Number(numero);

  if(numero > maiorNumero){
    maiorNumero = numero;
  }


  console.log(contador);
  contador = contador + 1;
  } while (contador < 5 );
console.log ('O Maior Número Inserido:' + maiorNumero);