// Aguarde o carregamento do DOM
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const options = document.querySelector('.options');

    menuButton.addEventListener('click', function () {
        options.classList.toggle('active');
    });

    // Seleciona o elemento com a classe "typing-text"
    const textElement = document.querySelector('.typing-text');

    // Texto que você deseja que seja digitado
    const textToType = "Desenvolvedor Full Stack";

    // Inicializa o índice do texto
    let textIndex = 0;

    // Função para adicionar texto à classe "typing-text"
    function type() {
        if (textIndex < textToType.length) {
            textElement.textContent += textToType.charAt(textIndex);
            textIndex++;
            setTimeout(type, 100); // Velocidade de digitação (ajuste conforme necessário)
        }
    }

    // Inicie a animação de digitação
    type();
});
