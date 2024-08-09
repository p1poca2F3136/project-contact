document.addEventListener('DOMContentLoaded', function () {
    const meteor = document.querySelector('.meteor');

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = Math.random() * 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 10 + 'px';
        particle.style.top = Math.random() * 10 + 'px';
        particle.style.animationDuration = Math.random() * 1 + 0.5 + 's';
        particle.style.animationDelay = Math.random() * 0.5 + 's';
        meteor.appendChild(particle);
    }
});