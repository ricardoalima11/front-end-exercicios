
    let rendaFamiliar = prompt("Informe a sua renda familiar mensal (ex: 1500):"));

    
    let mediaAcademica = prompt('Informe a sua média acadêmica (ex: 7.5):');

    let pontosRenda = 0;
    let pontosMedia = 0;

   
    if (rendaFamiliar <= 2000) {
        pontosRenda = 30;
    } else if (rendaFamiliar >= 2001 && rendaFamiliar <= 4000) {
        pontosRenda = 20;
    } else { 
        pontosRenda = 10;
    }

   
    if (mediaAcademica <= 6.9) {
        pontosMedia = 5;
    } else if (mediaAcademica >= 7.0 && mediaAcademica <= 8.4) {
        pontosMedia = 15;
    } else { 
        pontosMedia = 25;
    }

    
    const pontuacaoTotal = pontosRenda + pontosMedia;

    
    alert(`Sua pontuação total para a bolsa de estudos é: ${pontuacaoTotal} pontos`);



calcularPontuacaoBolsa();