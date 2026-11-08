const API_URL = "https://deisishop.pw.deisi.ulusofona.pt";
let todosOsProdutos = []; // Guarda a lista completa da API

document.addEventListener("DOMContentLoaded", () => {
    carregarCategorias();
    carregarProdutos();

    // Eventos para acionar os filtros, ordenação e pesquisa em tempo real
    document.getElementById("filter-category").addEventListener("change", atualizarProdutos);
    document.getElementById("sort-price").addEventListener("change", atualizarProdutos);
    document.getElementById("search-product").addEventListener("input", atualizarProdutos);
});

// 1. Vai buscar as categorias à API
function carregarCategorias() {
    fetch(`${API_URL}/categories`)
        .then(res => res.json())
        .then(categorias => {
            const select = document.getElementById("filter-category");
            categorias.forEach(categoria => {
                const option = document.createElement("option");
                option.value = categoria;
                option.textContent = categoria;
                select.appendChild(option);
            });
        })
        .catch(err => console.error("Erro ao carregar categorias:", err));
}

// 2. Vai buscar todos os produtos à API
function carregarProdutos() {
    fetch(`${API_URL}/products`)
        .then(res => res.json())
        .then(produtos => {
            todosOsProdutos = produtos;
            desenharProdutos(todosOsProdutos);
        })
        .catch(err => console.error("Erro ao carregar produtos:", err));
}

// 3. Função central que aplica Categoria, Ordenação e Pesquisa ao mesmo tempo
function atualizarProdutos() {
    const categoriaSelecionada = document.getElementById("filter-category").value;
    const ordenacaoSelecionada = document.getElementById("sort-price").value;
    const termoPesquisa = document.getElementById("search-product").value.toLowerCase();

    // Começa com todos os produtos
    let resultado = [...todosOsProdutos];

    // Filtrar por categoria
    if (categoriaSelecionada !== "todas") {
        resultado = resultado.filter(p => p.category === categoriaSelecionada);
    }

    // Filtrar por texto de pesquisa (nome)[cite: 8]
    if (termoPesquisa.trim() !== "") {
        resultado = resultado.filter(p => p.title.toLowerCase().includes(termoPesquisa));
    }

    // Ordenar por preço (Crescente / Decrescente)[cite: 7]
    if (ordenacaoSelecionada === "crescente") {
        resultado.sort((a, b) => a.price - b.price);
    } else if (ordenacaoSelecionada === "decrescente") {
        resultado.sort((a, b) => b.price - a.price);
    }

    // Desenha o resultado final no HTML
    desenharProdutos(resultado);
}

// 4. Desenha os produtos na página
function desenharProdutos(lista) {
    const container = document.getElementById("lista-produtos");
    container.innerHTML = ""; // Limpa a lista anterior

    lista.forEach(produto => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${produto.image}" alt="${produto.title}" width="150">
            <h3>${produto.title}</h3>
            <p>${produto.price} €</p>
            <button>Adicionar ao cesto</button>
        `;
        container.appendChild(card);
    });
}
