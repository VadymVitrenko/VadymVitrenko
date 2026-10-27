// A. Estado e variáveis com referência de elementos do DOM
const containerProdutos = document.querySelector('#lista-produtos');

// B. Funções utilitárias
function criarProduto(produto) {
  // 1. Cria o elemento principal <article>
  const article = document.createElement('article');
  article.classList.add('produto-card');

  // 2. Cria a imagem
  const img = document.createElement('img');
  img.src = produto.image;
  img.alt = produto.title;

  // 3. Cria o título
  const titulo = document.createElement('h2');
  titulo.textContent = produto.title;

  // 4. Cria o preço
  const preco = document.createElement('p');
  preco.classList.add('preco');
  preco.textContent = `${produto.price} €`;

  // 5. Cria a descrição
  const descricao = document.createElement('p');
  descricao.classList.add('descricao');
  descricao.textContent = produto.description;

  // 6. Junta todos os elementos dentro do <article>
  article.append(img, titulo, preco, descricao);

  // 7. Retorna o <article> completo
  return article;
}

// C. Event handlers
function renderizarProdutos(lista) {
  // Limpa o contentor antes de desenhar
  containerProdutos.innerHTML = '';

  // Percorre cada produto da lista
  lista.forEach(produto => {
    // 1. Mostra na consola (como pedido no passo 2)
    console.log(produto.title);

    // 2. Constrói o elemento <article>
    const card = criarProduto(produto);

    // 3. Insere o <article> dentro do contentor principal
    containerProdutos.append(card);
  });
}

// D. Event Listeners
// (Fica reservado para futuros botões e cliques)

// E. Inicialização
// Executa a renderização passando a lista "produtos" que veio do produtos.js
renderizarProdutos(produtos);
