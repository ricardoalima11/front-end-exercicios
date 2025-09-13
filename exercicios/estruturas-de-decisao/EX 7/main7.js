m_idade = prompt('Digite idade miníma: ');
m_renda = prompt('Renda mensal no minímo de R$3.000,00');

if (m_idade >= 21 && m_renda >= 3000)
{
  console.log('Parabéns! Você está apto a realizar um consórcio.');  
}
else {
  console.log('Parabéns! Você está apto a realizar financiamento de veículo.');  
}
else {
    console.log('Infelizmente, você não atende aos requisitos para realizar  financiamento de veículo.');
}