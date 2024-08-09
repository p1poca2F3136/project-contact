document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name');
    let clickCount = 0;

    nameElement.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 3) {
            // Divide o texto em letras e cria elementos span para cada letra
            const text = nameElement.innerText;
            nameElement.innerHTML = '';
            text.split('').forEach(char => {
                const span = document.createElement('span');
                span.classList.add('letter');
                span.innerText = char;
                nameElement.appendChild(span);
            });

            // Adiciona a classe de animação para as letras
            const letters = nameElement.querySelectorAll('.letter');
            letters.forEach((letter, index) => {
                letter.style.left = `${letter.getBoundingClientRect().left - nameElement.getBoundingClientRect().left}px`;
                letter.style.top = `${letter.getBoundingClientRect().top - nameElement.getBoundingClientRect().top}px`;
                letter.classList.add('falling');
            });

            // Garante que as letras não voltem ao estado original
            nameElement.removeEventListener('click', arguments.callee);
        }
    });
});