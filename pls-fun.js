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

var btnSim = document.getElementById('btn-sim');
if (btnSim) {
    btnSim.addEventListener('click', function () {
        window.location.href = 'thanks.html';
    });
}