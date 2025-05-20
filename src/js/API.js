// Define um termo de busca padrão (não utilizado diretamente no fluxo principal)
const termoBusca = "crypto OR bitcoin";

// Seleciona o container onde os resultados da API serão exibidos
const resultadoContainer = document.querySelector("#resultados");

/**
 * Função assíncrona que faz uma requisição à NewsAPI com o termo de busca fornecido.
 * Exibe os títulos e links dos artigos retornados no container de resultados.
 * @param {string} termoBusca - Termo a ser pesquisado na API de notícias.
 */
async function requisitandoAPI(termoBusca) {
  // Monta a URL da requisição com o termo de busca
  const URL = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
    termoBusca
  )}`;

  // Faz a requisição HTTP GET para a API
  const resp = await fetch(URL, {
    method: "GET",
    headers: {
      "X-Api-Key": "b55ba3c963cc4938a2866fa62cc655ef", // Chave de acesso à API
    },
  });

  // Se a resposta for bem-sucedida (status 200)
  if (resp.status === 200) {
    const dados = await resp.json();

    // Limpa resultados anteriores
    const resultadoContainer = document.querySelector("#resultados");
    resultadoContainer.innerHTML = "";

    // Para cada artigo retornado, cria um elemento exibindo título e link
    dados.articles.forEach((artigo) => {
      const titulo = artigo.title;
      const link = artigo.url;

      const elemento = document.createElement("div");
      elemento.innerHTML = `<p><strong>${titulo}</strong><br><a href="${link}" target="_blank">${link}</a></p>`;
      resultadoContainer.appendChild(elemento);
    });
  } else {
    // Exibe erro no console caso a requisição falhe
    console.error("Erro na requisição:", resp.status, resp.statusText);
  }
}

// Seleciona o botão de verificação
const btn = document.querySelector("#verificar");

// Adiciona evento de clique ao botão para buscar notícias com o termo digitado
btn.addEventListener("click", () => {
  const busca = document.querySelector("#busca").value;

  if (busca) {
    requisitandoAPI(busca);
  } else {
    console.warn("Por favor, insira um termo de busca.");
  }
});

/**
 * Função para atualizar o histórico de buscas na tela e no localStorage.
 * (Não utilizada no fluxo principal deste arquivo)
 * @param {string} busca - Termo buscado.
 * @param {string} resultado - Resultado associado ao termo.
 */
function updatingDisplay(busca, resultado) {
  const ul = document.getElementById("historico");
  const li = document.createElement("li");
  li.textContent = `"${busca}" - ${resultado}`;
  ul.appendChild(li);
  localStorage.setItem("historico", JSON.stringify(ul.innerHTML));
}
