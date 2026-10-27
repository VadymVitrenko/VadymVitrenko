// A. Estado e variáveis com referência de elementos do DOM
const containerProdutos = document.querySelector('#lista-produtos');
const containerCesto = document.querySelector('#cesto');

// Garante que a chave 'produtos-selecionados' existe no localStorage
if (!localStorage.getItem('produtos-selecionados')) {
  localStorage.setItem('produtos-selecionados', JSON.stringify([]));
}

// B. Funções utilitárias

// Cria o cartão de produto para a lista da loja
function criarProduto(produto) {
  const article = document.createElement('article');
  article.classList.add('produto-card');

  const img = document.createElement('img');
  img.src = produto.image;
  img.alt = produto.title;

  const titulo = document.createElement('h2');
  titulo.textContent = produto.title;

  const preco = document.createElement('p');
  preco.classList.add('preco');
  preco.textContent = `${produto.price} €`;

  const botao = document.createElement('button');
  botao.textContent = '+ Adicionar ao cesto';

  botao.addEventListener('click', () => {
    const selecionados = JSON.parse(localStorage.getItem('produtos-selecionados')) || [];
    selecionados.push(produto);
    localStorage.setItem('produtos-selecionados', JSON.stringify(selecionados));

    // Atualiza logo a lista do cesto no ecrã ao adicionar
    atualizaCesto();
  });

  article.append(img, titulo, preco, botao);
  return article;
}

// Cria o cartão compacto para cada item dentro do cesto
function criaProdutoCesto(produto) {
  const article = document.createElement('article');
  article.classList.add('cesto-item');

  const img = document.createElement('img');
  img.src = produto.image;
  img.alt = produto.title;

  const titulo = document.createElement('h3');
  titulo.textContent = produto.title;

  const preco = document.createElement('p');
  preco.classList.add('preco');
  preco.textContent = `${produto.price} €`;

  // Botão para remover do cesto
  const botaoRemover = document.createElement('button');
  botaoRemover.classList.add('btn-remover');
  botaoRemover.textContent = '- Remover';

  botaoRemover.addEventListener('click', () => {
    const selecionados = JSON.parse(localStorage.getItem('produtos-selecionados')) || [];

    // Procura o índice do produto na lista (findIndex) e remove-o (splice)
    const index = selecionados.findIndex(p => p.id === produto.id);
    if (index !== -1) {
      selecionados.splice(index, 1);
      localStorage.setItem('produtos-selecionados', JSON.stringify(selecionados));
      atualizaCesto();
    }
  });

  article.append(img, titulo, preco, botaoRemover);
  return article;
}

// C. Event handlers

// Renderiza a montra de produtos
function renderizarProdutos(lista) {
  containerProdutos.innerHTML = '';
  lista.forEach(produto => {
    const card = criarProduto(produto);
    containerProdutos.append(card);
  });
}

// Renderiza o cesto de compras com os itens do localStorage e calcula o total
function atualizaCesto() {
  containerCesto.innerHTML = '';

  const tituloCesto = document.createElement('h2');
  tituloCesto.textContent = 'Cesto de Compras';
  containerCesto.append(tituloCesto);

  const selecionados = JSON.parse(localStorage.getItem('produtos-selecionados')) || [];

  if (selecionados.length === 0) {
    const avisoVazio = document.createElement('p');
    avisoVazio.textContent = 'O cesto está vazio.';
    containerCesto.append(avisoVazio);
    return;
  }

  // Div para agrupar os artigos do cesto
  const listaCesto = document.createElement('div');
  listaCesto.classList.add('cesto-lista');

  let precoTotal = 0;

  selecionados.forEach(produto => {
    precoTotal += Number(produto.price);
    const item = criaProdutoCesto(produto);
    listaCesto.append(item);
  });

  // Elemento do Preço Total
  const totalElemento = document.createElement('div');
  totalElemento.classList.add('cesto-total');
  totalElemento.innerHTML = `<strong>Custo total:</strong> <span>${precoTotal.toFixed(2)} €</span>`;

  containerCesto.append(listaCesto, totalElemento);
}

// D. Event Listeners

// E. Inicialização
renderizarProdutos(produtos);
atualizaCesto();
