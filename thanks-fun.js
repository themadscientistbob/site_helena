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

// uma pequena chuva de corações para comemorar, só nessa página
var reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var palco = document.getElementById('confete');

if (palco && !reduzMovimento) {
    var total = 22;
    for (var i = 0; i < total; i++) {
        criarCoracao(i * 220);
    }
}

function criarCoracao(atraso) {
    setTimeout(function () {
        var coracao = document.createElement('span');
        coracao.className = 'coracao';
        coracao.textContent = '♥';
        coracao.style.left = Math.random() * 100 + 'vw';
        coracao.style.fontSize = (1 + Math.random() * 1.2) + 'rem';
        coracao.style.animationDuration = (4 + Math.random() * 3) + 's';
        palco.appendChild(coracao);

        setTimeout(function () {
            coracao.remove();
        }, 8000);
    }, atraso);
}