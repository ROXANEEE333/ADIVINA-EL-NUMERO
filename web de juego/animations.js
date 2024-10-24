// Función para lanzar partículas cuando el jugador gana
function launchParticles() {
    const container = document.getElementById('particles-container');
    container.innerHTML = ''; // Limpiar cualquier partícula anterior

    for (let i = 0; i < 50; i++) {
        let particle = document.createElement('div');
        particle.classList.add('particle');
        container.appendChild(particle);

        // Posiciones aleatorias
        let x = Math.random() * 100;
        let y = Math.random() * 100;
        particle.style.left = x + 'vw';
        particle.style.top = y + 'vh';

        // Animación
        let size = Math.random() * 10 + 5;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.animationDuration = Math.random() * 2 + 1 + 's';

        // Remover después de la animación
        setTimeout(() => {
            particle.remove();
        }, 3000);
    }
}
