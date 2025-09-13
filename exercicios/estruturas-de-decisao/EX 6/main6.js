
let nota = prompt("Por favor, insira a sua nota:");
nota = parseFloat(nota);

if (nota >= 7.0 && nota <= 10.0) {
  alert("A nota está entre 7.0 e 10.0. Aprovado!");
} else {
  alert("A nota não está entre 7.0 e 10.0. Reprovado ou nota inválida.");
}