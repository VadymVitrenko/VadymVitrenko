// 1. Passa por aqui!
const elPassar = document.querySelector("#elemento-passar");
elPassar.addEventListener("mouseover", () => elPassar.style.color = "green");
elPassar.addEventListener("mouseleave", () => elPassar.style.color = "black");

// 2. Pinta-me! (com data-color e arrow function)
document.querySelectorAll("button.color").forEach((button) => {
  button.addEventListener("click", () => {
    document.body.style.backgroundColor = button.dataset.color;
  });
});

// 3. Experimenta escrever...
const campoEscrita = document.querySelector("#campo-escrita");
campoEscrita.addEventListener("input", () => {
  campoEscrita.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
});

// 4. Mudar a cor com select e THIS (como pedido no slide)
document.querySelector("#select-cor").addEventListener("change", function() {
  document.body.style.backgroundColor = this.value;
});

// 5. Conta! (arrow function)
let contador = 33;
const incrementar = () => {
  contador++;
  document.querySelector("#valor-contador").textContent = contador;
};
document.querySelector("#btn-conta").addEventListener("click", incrementar);

// 6. Select flex (muda a direção das 4 bolas com THIS)
document.querySelector("#select-flex").addEventListener("change", function() {
  document.querySelector("#container-flex").style.flexDirection = this.value;
});
