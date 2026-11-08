// 1. URL da API da loja do DEISI
const API_URL = "https://deisishop.pw.deisi.ulusofona.pt/products";

// 2. Quando a página carregar, vamos buscar os produtos à internet
document.addEventListener("DOMContentLoaded", () => {
    carregarProdutosDaAPI();
});

function carregarProdutosDaAPI() {
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar os produtos: " + response.status);
            }
            return response.json();
        })
        .then(produtos => {
            console.log("Produtos recebidos:", produtos);
            // 3. Chama a função que desenha os produtos no HTML da tua página
            desenharProdutosNaPagina(produtos);
        })
        .catch(error => {
            console.error("Erro:", error);
        });
}

// 4. Função que cria os cartões dos produtos e os mete no HTML
function desenharProdutosNaPagina(produtos) {
    // Procura o elemento onde os produtos vão aparecer (ajusta o seletor se o teu for diferente, ex: ".products-container")
    const container = document.querySelector(".products-container") || document.body;

    // Se o container tiver placeholders estáticos antigos, limpa-os
    // (Opcional, dependendo de como fizeste o teu HTML)

    produtos.forEach(produto => {
        // Podes adaptar este HTML para ficar igual à estrutura que já tens no teu Lab 7
        const card = document.createElement("div");
        card.className = "product-card"; // Nome da classe do teu CSS
        card.innerHTML = `
            <img src="${produto.image}" alt="${produto.title}" width="150">
            <h3>${produto.title}</h3>
            <p>${produto.price} €</p>
            <button onclick="adicionarAoCesto(${produto.id})">Adicionar ao cesto</button>
        `;
        container.appendChild(card);
    });
}
