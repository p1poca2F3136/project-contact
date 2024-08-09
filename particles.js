document.addEventListener('DOMContentLoaded', function () {
    const meteorContainer = document.querySelector('.meteor-container');

    for (let i = 0; i < 50; i++) {  // Aumenta o número de partículas para um rastro maior
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = Math.random() * 6 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 10 + 'px';
        particle.style.top = Math.random() * 10 + 'px';
        particle.style.animationDuration = '4s';  // Partículas caem mais devagar
        particle.style.animationDelay = Math.random() * 2 + 's';
        meteorContainer.appendChild(particle);
    }
});