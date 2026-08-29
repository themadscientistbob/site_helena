// revela as seções com um fade suave conforme a rolagem
var revelaveis = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    var observador = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visivel');
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.15 });

    revelaveis.forEach(function (el) { observador.observe(el); });
} else {
    revelaveis.forEach(function (el) { el.classList.add('visivel'); });
}

// o botão "não" foge do cursor (e do dedo, no celular)
var container = document.getElementById('botoes');
var btnNao = document.getElementById('btn-nao');
var btnSim = document.getElementById('btn-sim');
var dica = document.getElementById('dica');

var mensagens = [
    'foi quase',
    'não vai rolar assim tão fácil',
    'só clica no sim logoooo',
    'essa opção nem existe de verdade',
    'tenta de novo?'
];
var tentativas = 0;

function fugir() {
    tentativas++;
    var limites = container.getBoundingClientRect();
    var botao = btnNao.getBoundingClientRect();

    var maxX = Math.max(0, limites.width - botao.width - 8);
    var maxY = Math.max(0, limites.height - botao.height - 8);

    var novoX = Math.random() * maxX;
    var novoY = Math.random() * maxY;

    btnNao.style.position = 'absolute';
    btnNao.style.left = novoX + 'px';
    btnNao.style.top = novoY + 'px';

    if (dica) {
        dica.textContent = mensagens[Math.min(tentativas - 1, mensagens.length - 1)];
    }
}

if (container && btnNao) {
    container.style.position = 'relative';
    btnNao.addEventListener('mouseenter', fugir);
    btnNao.addEventListener('touchstart', function (evento) {
        evento.preventDefault();
        fugir();
    }, { passive: false });

    // se, por acaso, alguém conseguir clicar (ou usar o teclado), ainda tem uma última página
    btnNao.addEventListener('click', function () {
        window.location.href = 'pls.html';
    });
}

if (btnSim) {
    btnSim.addEventListener('click', function () {
        window.location.href = 'thanks.html';
    });
}