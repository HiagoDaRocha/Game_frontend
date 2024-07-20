/* addEventListener para o evento DOMContentLoaded para garantir que todos os elementos HTML sejam carregados antes da execução do script */
document.addEventListener('DOMContentLoaded', function() {
    let textarea = document.querySelector('textarea'); // Seleciona o textarea
    let box = document.getElementById('challenge2'); // Seleciona o elemento com ID "challenge2"

    // Adiciona um evento de escuta para o evento 'input' no textarea. Quando o texto é alterado, esse evento é disparado.
    textarea.addEventListener('input', function() {

        // Remove espaço em branco do início e fim do texto do textarea
        let styles = textarea.value.trim();

        // Verifica se o texto contém "ul" ou "#challenge2" seguido de chaves
        let ValidFormat = styles.match(/^\s*(ul|#challenge2)\s*\{\s*([^{}]*;\s*)+\s*}\s*$/);

        // Se o formato do texto é válido, aplica os estilos ao elemento com id "challenge2"
        if (ValidFormat) {
            
            // Extrai o conteúdo entre as chaves
            let cssContent = styles.replace(/^\s*(ul|#challenge2)\s*\{\s*|\s*}\s*$/g, '');

            // Limpa os estilos anteriores
            box.style.cssText = '';

            // Aplica os novos estilos
            box.style.cssText = cssContent;
        }
    });
});
