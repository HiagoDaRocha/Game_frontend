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
                  <button class="questionsButtons" onclick="redirectToPage('./public/questions_html/question1.html')">1</button>
                  <button class="questionsButtons" onclick="redirectToPage('./public/questions_html/question2.html')">2</button>
                  <button class="questionsButtons" onclick="redirectToPage('./public/questions_html/question3.html')">3</button>
                  <button class="questionsButtons" onclick="redirectToPage('./public/questions_html/question4.html')">4</button>
                  <button class="questionsButtons" onclick="redirectToPage('./public/questions_html/question5.html')">5</button>
                `,
            });
        } else if (result.isDenied) {
            Swal.fire({
                title: "Escolha um nível de CSS",
                showCancelButton: false,
                showConfirmButton: false,
                html: `
                  <button class="questionsButtons" onclick="redirectToPage('./public/questions_css/question1.html')">1</button>
                  <button class="questionsButtons" onclick="redirectToPage('./public/questions_css/question2.html')">2</button>
                  <button class="questionsButtons" onclick="redirectToPage('./public/questions_css/question3.html')">3</button>
                  <button class="questionsButtons" onclick="redirectToPage('./public/questions_css/question4.html')">4</button>
                  <button class="questionsButtons" onclick="redirectToPage('./public/questions_css/question5.html')">5</button>
                `,
            });
        }
    });
}

function instructions() {

  let str="Para as fases de html tem que responder corretamente e\n" +
          "rapidamente a questão para tirar 3 estrelas.\n" + 
          "\n" +
          "Para as fases de css tem que responder corretamente a\n" +
          "questão com as seguintes instruções:\n" +
          "\n" +
          "#challenge{código} para a questão 1;\n" +
          "#challenge2{código} para a questão 2;\n" +
          "#challenge3{código} para a questão 3;\n" +
          "#challenge4{código} para a questão 4;\n" +
          "#challenge5{código} para a questão 5.\n";

  Swal.fire({
      title: "Instruções para jogar",
      icon: "info",
      html: '<pre>' + str + '</pre>',
      customClass: {
        popup: 'format-pre'
      },
      confirmButtonText: "Fechar"
  });
}

function credits() {
    Swal.fire({
        title: "Créditos",
        icon: "info",
        confirmButtonText: "Fechar",
        text: "Front-end, design e desenvolvimento: Hiago da Rocha",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    }