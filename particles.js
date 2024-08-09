document.addEventListener('DOMContentLoaded', function () {
    const meteor = document.querySelector('.meteor');

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = Math.random() * 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 10 + 'px';
        particle.style.top = Math.random() * 10 + 'px';
        particle.style.animationDuration = '4s'; // Mais tempo para as partículas caírem
        particle.style.animationDelay = Math.random() * 1 + 's';
        meteor.appendChild(particle);
    }
});