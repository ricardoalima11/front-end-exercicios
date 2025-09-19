let contador;
let peso;
let pesoTotal = 0;
let media = 0;

for (contador = 1 ; contador <=10 ; contador + 1){
    peso = prompt('Insira o Peso');
    peso = Number (peso);

    pesoTotal = pesoTotal + peso;
}

media = pesoTotal / (contador-1);
console.log('A média dos pesos é ' + media);









