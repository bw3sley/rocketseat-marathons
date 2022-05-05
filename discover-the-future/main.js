const answerElement = document.querySelector("#answer");

const questionInput = document.querySelector("#question"); 

const askButton = document.querySelector("#ask")

const Answers = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

function DoQuestion() {
    if(!questionInput.value) return alert("Digite sua pergunta!");

    askButton.setAttribute("disabled", true);

    const question = "<div>" + questionInput.value + "</div>";

    const TotalAnswers = Answers.length;
    const RandomNumber = Math.floor(Math.random() * TotalAnswers);

    answerElement.innerHTML = question + Answers[RandomNumber];

    answerElement.style.opacity = 1;

    setTimeout(() => {
        answerElement.style.opacity = 0;
        askButton.removeAttribute("disabled");
    }, 2000)
}