
function valor(num1, num2, num3) {

      MaiorNumero = 0;
      num1 = Number(num1);
      num2 = Number(num2);
      num3 = Number(num3);
    
  // Verifica se todos os parâmetros são números.
    if (typeof num1 == 'Number' && typeof num2 == 'Number' && typeof num3 == 'Number') {
    MaiorNumero= num1

    if(num2 > encontrarMaiorNumero) {
    MaiorNumero = num2

}
    if(num3 > encontrarMaiorNumero) {
    MaiorNumero = num3
}
    return MaiorNumero
}
}
// Exemplos de uso:
console.log(MaiorNumero(10, 5, 15)); 
