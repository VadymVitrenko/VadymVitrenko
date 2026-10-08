// --- 1. PASSAR O RATO (Elemento 1) ---
// Ativa o negrito quando o rato entra no elemento
function passarRato() {
    const elemento = document.getElementById("elemento-passar");
    elemento.style.fontWeight = "bold";
}

// Remove o negrito quando o rato sai do elemento
function tirarRato() {
    const elemento = document.getElementById("elemento-passar");
    elemento.style.fontWeight = "normal";
}


// --- 2. PINTA-ME! (Elemento 2) ---
// Altera a cor do texto dinamicamente com base na cor passada por parâmetro
function mudarCorTexto(cor) {
    const texto = document.getElementById("texto-pinta");
    texto.style.color = cor;
}


// --- 3. EXPERIMENTA ESCREVER... ALTERNÂNCIA DE 4 CORES (Elemento 3) ---
let indiceCor = 0;
// Lista circular com as 4 cores pretendidas
const coresfundo = ["#b4dbdc", "#ffcccc", "#ccffcc", "#ffffcc"];

function alternarCoresFundo() {
    const input = document.getElementById("campo-escrita");

    // Aplica a cor atual do índice
    input.style.backgroundColor = coresfundo[indiceCor];

    // Atualiza o índice para a próxima cor (volta a 0 após o 3)
    indiceCor = (indiceCor + 1) % coresfundo.length;
}


// --- 4. ESCOLHA UMA COR EM INGLÊS (Elemento 4) ---
// Captura o valor do input e aplica-o como cor de fundo
function submeterCor() {
    const inputCor = document.getElementById("campo-cor");
    const corSelecionada = inputCor.value.trim();

    if (corSelecionada !== "") {
        // Altera a cor de fundo do próprio input ou do elemento pretendido
        inputCor.style.backgroundColor = corSelecionada;
    }
}


// --- 5. CONTA! (Elemento 5) ---
// Converte o valor atual para número e incrementa +1
function incrementarContador() {
    const contador = document.getElementById("valor-contador");
    let valorAtual = parseInt(contador.innerText, 10);

    contador.innerText = valorAtual + 1;
}
