const API_URL = "https://deisishop.pw.deisi.ulusofona.pt";
let todosOsProdutos = []; // Guarda a lista completa para podermos filtrar

document.addEventListener("DOMContentLoaded", () => {
    carregarCategorias();
    carregarProdutos();

    // Evento quando o utilizador muda a opção no <select>
    document.getElementById("filter-category").addEventListener("change", (e) => {
        filtrarPorCategoria(e.target.value);
    });
});

// 1. Vai buscar as categorias ao endpoint GET /categories
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

// 2. Vai buscar todos os produtos ao endpoint GET /products
function carregarProdutos() {
    fetch(`${API_URL}/products`)
        .then(res => res.json())
        .then(produtos => {
            todosOsProdutos = produtos; // Guarda a cópia original
            desenharProdutos(todosOsProdutos);
        })
        .catch(err => console.error("Erro ao carregar produtos:", err));
}

// 3. Filtra a lista de produtos com base na categoria selecionada
function filtrarPorCategoria(categoriaSelecionada) {
    if (categoriaSelecionada === "todas") {
        desenharProdutos(todosOsProdutos);
    } else {
        const produtosFiltrados = todosOsProdutos.filter(
            p => p.category === categoriaSelecionada
        );
        desenharProdutos(produtosFiltrados);
    }
}

// 4. Desenha os cartões dos produtos no HTML
function desenharProdutos(lista) {
    const container = document.querySelector(".products-container") || document.body;
    container.innerHTML = ""; // Limpa os produtos anteriores

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
