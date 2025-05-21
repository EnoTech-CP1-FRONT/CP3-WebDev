// Base de dados de notícias
const noticiasPredefinidas = [
    { texto: "A água ferve a 100 graus Celsius ao nível do mar.", status: true },
    { texto: "O ser humano tem 5 sentidos.", status: false },
    { texto: "O Brasil foi campeão da Copa do Mundo em 2002.", status: true },
    { texto: "O Sol gira ao redor da Terra.", status: false },
    { texto: "A vacina previne doenças.", status: true },
    { texto: "O café é originário da África.", status: true },
    { texto: "O açúcar é mais saudável que o mel.", status: false },
    { texto: "A Terra é plana.", status: false },
    { texto: "O leite é fonte de cálcio.", status: true },
    { texto: "O ser humano pode respirar debaixo d’água sem equipamentos.", status: false }
];

const li = document.createElement("li");

document.getElementById("verificar").addEventListener('click', () => {
    const busca = document.getElementById("busca").value.trim();
    const resultado = document.getElementById("resultado");

    // Procura a notícia na base (case insensitive)
    const noticiaEncontrada = noticiasPredefinidas.find(n => n.texto.toLowerCase() === busca.toLowerCase());

    if (noticiaEncontrada) {
        if (noticiaEncontrada.status) {
            resultado.textContent = "Fato Verificado ✅";
        } else {
            resultado.textContent = "Fake News ❌";

        }
    } else {
        resultado.textContent = "Notícia não encontrada na base.";
    }
    updatingDisplay(busca, resultado.textContent)
});

window.addEventListener('DOMContentLoaded', () => {
    const ul = document.getElementById("historico");
    const historicoSalvo = localStorage.getItem("historico");
    if (historicoSalvo) {
        ul.innerHTML = JSON.parse(historicoSalvo);
    }
});

function updatingDisplay(busca, resultado) {
    const ul = document.getElementById("historico");
    const li = document.createElement("li");
    li.textContent = `"${busca}" - ${resultado}`;

    // Define a cor de fundo com base na classe
    if (resultado.includes("Fato Verificado")) {
        li.classList.add("Certo");
        li.style.backgroundColor = "rgb(0, 255, 0)"; // verde
    } else if (resultado.includes("Fake News")) {
        li.classList.add("errado");
        li.style.backgroundColor = "#ff0000"; // vermelho
    }

    ul.appendChild(li);
    localStorage.setItem("historico", JSON.stringify(ul.innerHTML));
}

