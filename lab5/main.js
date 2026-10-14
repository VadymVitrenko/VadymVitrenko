// ========================================================
// 1. PASSA POR AQUI! (mouseover / mouseleave)
// ========================================================
const elPassar = document.querySelector("#elemento-passar");
if (elPassar) {
  elPassar.addEventListener("mouseover", () => {
    elPassar.style.color = "green";
  });
  elPassar.addEventListener("mouseleave", () => {
    elPassar.style.color = "black";
  });
}

// ========================================================
// 2. PINTA-ME! (botões com dataset.color)
// ========================================================
document.querySelectorAll("button.color").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.style.backgroundColor = btn.dataset.color;
  });
});

// ========================================================
// 3. EXPERIMENTA ESCREVER... (muda cor do input)
// ========================================================
const campoEscrita = document.querySelector("#campo-escrita");
if (campoEscrita) {
  campoEscrita.addEventListener("input", () => {
    campoEscrita.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  });
}

// ========================================================
// 4. ESCOLHA UMA COR (com select e THIS)
// ========================================================
const selectCor = document.querySelector("#select-cor");
if (selectCor) {
  selectCor.addEventListener("change", function () {
    document.body.style.backgroundColor = this.value;
  });
}

// ========================================================
// 5. CONTA SIMPLES (exercício inicial do lab)
// ========================================================
let contadorSimples = 33;
const incrementarSimples = () => {
  contadorSimples++;
  const visor = document.querySelector("#valor-contador");
  if (visor) visor.textContent = contadorSimples;
};

const btnConta = document.querySelector("#btn-conta");
if (btnConta) {
  btnConta.addEventListener("click", incrementarSimples);
}

// ========================================================
// 6. SELECT FLEX (muda flex-direction com THIS)
// ========================================================
const selectFlex = document.querySelector("#select-flex");
const containerFlex = document.querySelector("#container-flex");

if (selectFlex && containerFlex) {
  selectFlex.addEventListener("change", function () {
    let direcao = this.value;
    if (direcao === "line") direcao = "column";
    if (direcao === "line-reverse") direcao = "column-reverse";
    containerFlex.style.flexDirection = direcao;
  });
}

// ========================================================
// 7. FORMULÁRIO ONSUBMIT (e.preventDefault)
// ========================================================
const form = document.querySelector("form");
if (form) {
  form.onsubmit = (e) => {
    e.preventDefault();
    const nome = document.querySelector("#nome")?.value || "";
    const idade = document.querySelector("#idade")?.value || "";
    const mensagem = document.querySelector("#mensagem");
    if (mensagem) {
      mensagem.textContent = `Olá, o ${nome} tem ${idade}!`;
    }
  };
}

// ========================================================
// 8. CONTADOR COM LOCAL STORAGE (3 partes da aula)
// ========================================================
// 1. Variáveis
const visorLS = document.querySelector("#contador-ls");
const btnInc = document.querySelector("#btn-inc");
const btnDec = document.querySelector("#btn-dec");
const btnRes = document.querySelector("#btn-res");

if (!localStorage.getItem("contadorLS")) {
  localStorage.setItem("contadorLS", 0);
}

let valorLS = parseInt(localStorage.getItem("contadorLS"));
if (visorLS) visorLS.textContent = valorLS;

// 2. Event Handlers
const somarLS = () => {
  valorLS++;
  localStorage.setItem("contadorLS", valorLS);
  if (visorLS) visorLS.textContent = valorLS;
};

const subtrairLS = () => {
  valorLS--;
  localStorage.setItem("contadorLS", valorLS);
  if (visorLS) visorLS.textContent = valorLS;
};

const resetarLS = () => {
  valorLS = 0;
  localStorage.setItem("contadorLS", valorLS);
  if (visorLS) visorLS.textContent = valorLS;
};

// 3. Event Listeners
if (btnInc) btnInc.addEventListener("click", somarLS);
if (btnDec) btnDec.addEventListener("click", subtrairLS);
if (btnRes) btnRes.addEventListener("click", resetarLS);

let contadorTempo = 0;
const visorTempo = document.querySelector("#valor-temporizador");

const count = () => {
  contadorTempo++;
  if (visorTempo) {
    visorTempo.textContent = contadorTempo;
  }
};

// Executa a função count a cada 1000 milissegundos (1 segundo)
setInterval(count, 1000);
