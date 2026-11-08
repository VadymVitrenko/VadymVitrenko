const API_URL = "https://deisishop.pw.deisi.ulusofona.pt";
let todosOsProdutos = [];

document.addEventListener("DOMContentLoaded", () => {
    carregarCategorias();
    carregarProdutos();

    document.getElementById("filter-category").addEventListener("change", atualizarProdutos);
    document.getElementById("sort-price").addEventListener("change", atualizarProdutos);
    document.getElementById("search-product").addEventListener("input", atualizarProdutos);
});

function carregarCategorias() {
    fetch(`${API_URL}/categories`)
        .then(res => res.json())
        .then(data => {
            const categorias = Array.isArray(data) ? data : (data.categories || []);
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

function carregarProdutos() {
    fetch(`${API_URL}/products`)
        .then(res => res.json())
        .then(data => {
            todosOsProdutos = Array.isArray(data) ? data : (data.products || data.results || []);
            desenharProdutos(todosOsProdutos);
        })
        .catch(err => console.error("Erro ao carregar produtos:", err));
}

function atualizarProdutos() {
    const categoriaSelecionada = document.getElementById("filter-category").value;
    const ordenacaoSelecionada = document.getElementById("sort-price").value;
    const termoPesquisa = document.getElementById("search-product").value.toLowerCase();

    let resultado = [...todosOsProdutos];

    if (categoriaSelecionada !== "todas") {
        resultado = resultado.filter(p => p.category === categoriaSelecionada);
    }

    if (termoPesquisa.trim() !== "") {
        resultado = resultado.filter(p => p.title.toLowerCase().includes(termoPesquisa));
    }

    if (ordenacaoSelecionada === "crescente") {
        resultado.sort((a, b) => a.price - b.price);
    } else if (ordenacaoSelecionada === "decrescente") {
        resultado.sort((a, b) => b.price - a.price);
    }

    desenharProdutos(resultado);
}

function desenharProdutos(lista) {
    const container = document.getElementById("lista-produtos");
    container.innerHTML = "";

    if (lista.length === 0) {
        container.innerHTML = "<p>Nenhum produto encontrado.</p>";
        return;
    }

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
