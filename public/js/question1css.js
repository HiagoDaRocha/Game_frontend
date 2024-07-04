// Aguarda até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o elemento <textarea> no DOM
    let textarea = document.querySelector('textarea');
    // Seleciona o elemento com id 'challenge' no DOM
    let box = document.getElementById('challenge');

    // Adiciona um evento de escuta para o evento 'input' no <textarea>
    textarea.addEventListener('input', function() {
        // Divide o valor do <textarea> em declarações de estilo separadas pelo caractere ';'
        let styles = textarea.value.split(';');

        // Itera sobre cada declaração de estilo
        styles.forEach(style => {
            // Divide cada declaração de estilo em propriedade e valor, removendo espaços em branco em excesso
            let [property, value] = style.split(':').map(s => s.trim());
            
            // Verifica se tanto a propriedade quanto o valor são válidos
            if (property && value) {
                // Aplica o estilo ao elemento com id 'challenge'
                box.style[property] = value;
            }
        });
    });
});
