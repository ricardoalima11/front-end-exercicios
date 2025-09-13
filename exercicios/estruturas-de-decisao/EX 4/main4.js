m_idade = prompt ('Por favor, digite sua idade:');
m_renda = prompt ('Por favor, digite sua renda mensal(em Reais):');
if (m_idade >= 18 && m_renda >= 3016)
{
  console.log('Parabéns! Você está apto a realizar um consórcio.');  
}
else {
    console.log('Infelizmente, você não atende aos requisitos para realizar um consórcio.');
}