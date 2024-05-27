document.addEventListener('DOMContentLoaded', function() {
    const confettiElements = document.querySelectorAll('strong');

    confettiElements.forEach(element => {
        element.addEventListener('mouseover', function(event) {
            const rect = event.target.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            confetti({
                particleCount: 30, // Reduzindo a quantidade de partículas
                spread: 50, // Diminuindo a propagação
                origin: { x: x / window.innerWidth, y: y / window.innerHeight },
                gravity: 0.7, // Ajustando a gravidade para que os confetes caiam mais rápido
                ticks: 100, // Ajustando a duração do efeito
                scalar: 0.5, // Reduzindo o tamanho das partículas
                startVelocity: 20 // Diminuindo a velocidade inicial
            });
        });
    });
});
