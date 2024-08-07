let startTime;
let timerInterval;

document.addEventListener('DOMContentLoaded', (event) => {

    startTimer();
});

function startTimer() {
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const currentTime = new Date();
    const timeTaken = Math.floor((currentTime - startTime) / 1000);
    document.getElementById('timer').textContent = `Tempo: ${timeTaken}s`;
}

function resetTimer() {
    clearInterval(timerInterval); 
    document.getElementById('timer').textContent = `Tempo: 0s`;
    startTimer();
}

document.getElementById('my_form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne um formulario de submissão
    clearInterval(timerInterval); 

    const endTime = new Date(); // Captura o tempo de duração do formulário
    const timeTaken = (endTime - startTime) / 1000; // Calcula o tempo de duração do formulário
    let stars = 0; // Inicializa o número de estrelas

    // Verifica o tempo de duração do formulário e determina o número de estrelas
    if (timeTaken <= 40) {
        stars = 3;
    } else if (timeTaken <= 50) {
        stars = 2;
    } else {
        stars = 1;
    }

    // Verifica se a resposta do primeiro questionário está correta
    const correctAnswer = document.getElementById('question5radio1');
    if (correctAnswer.checked) {
        displayStars(stars);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Resposta incorreta. Tente novamente!',
        }).then(() => {
            resetTimer(); // Reseta o cronômetro
        });
    }
});

// Função para mostrar as estrelas na tela
function displayStars(stars) {
    // Limpa o conteúdo anterior das estrelas
    let starsHtml = '';
    
    // Cria um for para adicionar as estrelas ao HTML
    for (let i = 0; i < stars; i++) {
        starsHtml += '⭐';
    }

    Swal.fire({
        title: 'Parabéns!',
        html: `Você ganhou ${stars} estrela(s)!<br>${starsHtml}`,
        icon: 'success',
    }).then(() => {
        resetTimer(); // Reseta o cronômetro
    });
}