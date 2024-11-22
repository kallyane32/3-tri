:root {
    --font: 'Arial', sans-serif; /* Fonte para o texto */
    --primary-color: #ff69b4; /* Cor principal (tom de rosa Barbie) */
    --background-color: #f7c5d4; /* Cor de fundo (rosa claro) */
    --text-color: #000; /* Cor do texto */
}
const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(variavel).trim() // .trim() para remover espaços extras
}

// Exemplo de configuração com o tema Barbie
const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color') // Aqui você pode ajustar para a cor de rosa da Barbie
}

export {getCSS, tickConfig}
