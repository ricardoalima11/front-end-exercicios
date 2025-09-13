m_experiencia = prompt('Digite os anos de experiência: ');
m_formacao    = prompt('Qual sua formação digite (1) superior, (2) pós, (3) metradao (4) doutorado');

m_pontos = 0; 

m_experiencia = (m_experiencia);
m_formacao = (m_formacao);
if (m_experiencia < 5)
    {
        m_pontos = m_pontos + 10
    };
if (m_experiencia >= 5)
    {
        m_pontos = m_pontos + 20
    };

if (m_formacao == 1)
    {
        m_pontos = m_pontos + 10
    };
if (m_formacao == 2)
    {
        m_pontos = m_pontos + 20
    };
if (m_formacao == 3)
    {
        m_pontos = m_pontos + 30
    };
if (m_formacao == 4)
    {
        m_pontos = m_pontos + 40
    };