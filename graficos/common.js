:root {
    --font: 'Arial', sans-serif; /* Fonte para o texto */
    --primary-color: #ff69b4; /* Cor principal (tom de rosa Barbie) */
    --background-color: #f7c5d4; /* Cor de fundo (rosa escuro) */
    --text-color: #000; /* Cor do texto */
}
// Função para pegar as variáveis CSS corretamente do :root
const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.documentElement); // Acessa o :root (não o body)
    return bodyStyles.getPropertyValue(variavel).trim(); // .trim() para remover espaços extras
}

// Exemplo de configuração com o tema Barbie
const tickConfig = {
    family: getCSS('--font'),  // Aqui a variável CSS de font é usada
    size: 16,
    color: getCSS('--primary-color')  // Cor principal no tema Barbie
}

export { getCSS, tickConfig }
