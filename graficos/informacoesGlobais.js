const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()

    // Substituindo dados fictícios da Barbie para ilustrar
    const totalBonecasVendidas = 1.0 // Exemplo: 1 bilhão de bonecas Barbie vendidas ao longo dos anos
    const pessoasFamiliarizadasComBarbie = 3.0 // Exemplo: 3 bilhões de pessoas já ouviram falar da Barbie
    const horasInteragindoComBarbie = 0.25 // Exemplo: 15 minutos por dia
    const minutosInteragindoComBarbie = 15 // Convertido para minutos

    const porcentagemFamiliarizadaComBarbie = ((totalBonecasVendidas / pessoasFamiliarizadasComBarbie) * 100).toFixed(2)

    // Criando o parágrafo com as informações
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que ao longo dos anos a Barbie já vendeu <span>${totalBonecasVendidas} bilhões</span> de bonecas, e aproximadamente <span>${pessoasFamiliarizadasComBarbie} bilhões</span> de pessoas conhecem a marca Barbie. Além disso, as pessoas interagem com a Barbie por uma média de <span>${horasInteragindoComBarbie} horas</span> ou <span>${minutosInteragindoComBarbie} minutos</span> por dia.<br>Isso significa que cerca de <span>${porcentagemFamiliarizadaComBarbie}%</span> das pessoas já ouviram falar da Barbie.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()

