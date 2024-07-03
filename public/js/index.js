// Função para redirecionar para uma página específica
function redirectToPage(pageUrl) {
    window.location.href = pageUrl;
}

function start() {
    Swal.fire({
        title: "Qual questionário quer começar?",
        icon: "question",
        showDenyButton: true,
        confirmButtonColor: "#E54C21",
        denyButtonColor: "#264DE4",
        confirmButtonText: "HTML",
        denyButtonText: "CSS"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Escolha um nível de HTML",
                showCancelButton: false,
                showConfirmButton: false,
                html: `
                  <button class="questionsButtons" onclick="redirectToPage('questions_html/question1.html')">1</button>
                  <button class="questionsButtons" onclick="redirectToPage('questions_html/question2.html')">2</button>
                  <button class="questionsButtons" onclick="redirectToPage('questions_html/question3.html')">3</button>
                  <button class="questionsButtons" onclick="redirectToPage('questions_html/question4.html')">4</button>
                  <button class="questionsButtons" onclick="redirectToPage('questions_html/question5.html')">5</button>
                `,
            });
        } else if (result.isDenied) {
            Swal.fire({
                title: "Escolha um nível de CSS",
                showCancelButton: false,
                showConfirmButton: false,
                html: `
                  <button class="questionsButtons" onclick="redirectToPage('questions_css/question1.html')">1</button>
                  <button class="questionsButtons" onclick="redirectToPage('questions_css/question1.html')">2</button>
                  <button class="questionsButtons" onclick="redirectToPage('questions_css/question1.html')">3</button>
                  <button class="questionsButtons" onclick="redirectToPage('questions_css/question1.html')">4</button>
                  <button class="questionsButtons" onclick="redirectToPage('questions_css/question1.html')">5</button>
                `,
            });
        }
    });
}
