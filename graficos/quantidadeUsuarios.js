import { getCSS, tickConfig } from "./common.js"

async function quantidadeColecoesPorRegiao() {
    // Substituindo o URL para dados fictícios sobre coleções de bonecas Barbie por região
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/colecoes-barbie.json'
    const res = await fetch(url)
    const dados = await res.json()
    
    // Ajustando para as chaves e valores do JSON hipotético
    const nomeDasRegioes = Object.keys(dados)  // Exemplo: "EUA", "Europa", "Ásia", etc.
    const quantidadeDeColecoes = Object.values(dados)  // Exemplo: [10, 8, 12], representando as coleções vendidas em bilhões por região

    const data = [
        {
            x: nomeDasRegioes, 
            y: quantidadeDeColecoes, 
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')  // Cor personalizada da Barbie
            }
        }
    ]

    // Layout com as cores e fontes definidas nas variáveis CSS
    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Coleções de bonecas Barbie vendidas por região',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Região',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Bilhões de coleções vendidas',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }

    // Criando o div para exibir o gráfico e adicionando ao container
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    
    // Gerando o gráfico com Plotly
    Plotly.newPlot(grafico, data, layout)
}

quantidadeColecoesPorRegiao()
