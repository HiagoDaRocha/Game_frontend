let textarea = document.querySelector('textarea');
let box = document.getElementById('challenge');

textarea.addEventListener('input', () => {
    // Separa o valor do textarea em cor e borderRadius
    let values = textarea.value.split(' ');

    // Aplica os estilos
    box.style.backgroundColor = values[0]; // O primeiro valor é a cor
    box.style.borderRadius = values[1]; // O segundo valor é o borderRadius
    
});