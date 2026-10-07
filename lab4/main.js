// main.js

let counter = 0;

// Seleção dos elementos (Boa prática: fora das funções)
const counterDisplay = document.querySelector('#counter-value');
const btnClick = document.querySelector('#btn-click');
const btnDouble = document.querySelector('#btn-double');
const image = document.querySelector('#interactive-img');
const coordsDisplay = document.querySelector('#mouse-coords');

// 1. Evento 'click' -> Altera o TEXTO e altera o ESTILO (cor)
btnClick.addEventListener('click', function() {
    counter++;
    counterDisplay.textContent = counter; // Alteração de conteúdo
    counterDisplay.style.color = '#ff5722'; // Alteração de estilo
});

// 2. Evento 'dblclick' -> Altera o TEXTO e o ESTILO (tamanho e cor)
btnDouble.addEventListener('dblclick', function() {
    counter += 10;
    counterDisplay.textContent = counter;
    counterDisplay.style.color = '#4caf50';
    counterDisplay.style.fontSize = '2em';
});

// 3. Evento 'mouseover' -> Altera o ESTILO (opacidade e borda) quando o rato entra
image.addEventListener('mouseover', function() {
    image.style.opacity = '0.7';
    image.style.border = '2px solid red';
});

// 4. Evento 'mouseout' -> Altera o ESTILO (limpa a opacidade e a borda) quando o rato sai
image.addEventListener('mouseout', function() {
    image.style.opacity = '1.0';
    image.style.border = 'none';
});

// 5. Evento 'mousemove' -> Altera o TEXTO com as coordenadas e altera o ESTILO (fundo)
image.addEventListener('mousemove', function(event) {
    coordsDisplay.textContent = `Coordenadas: X=${event.offsetX}, Y=${event.offsetY}`;
    coordsDisplay.style.backgroundColor = '#ffffcc';
});
