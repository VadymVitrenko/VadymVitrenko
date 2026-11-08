// No teu main.js:
const API_URL = "https://deisishop.pw.deisi.ulusofona.pt/products"; // Confirma o link exato da API da loja

fetch(API_URL)
    .then(response => response.json())
    .then(produtos => {
        console.log("Produtos recebidos da API:", produtos);

        // Aqui chamas a função que desenha os produtos no teu site HTML
        // (por exemplo: mostrarProdutos(produtos);)
    })
    .catch(error => {
        console.error("Erro ao carregar os produtos:", error);
    });
