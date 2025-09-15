document.addEventListener('DOMContentLoaded', () => {
    // Botones para expandir sinopsis
    const expandButtons = document.querySelectorAll('.expand-btn');
    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const synopsis = button.previousElementSibling;
            synopsis.classList.toggle('expanded');
            if (synopsis.classList.contains('expanded')) {
                button.textContent = 'Leer menos';
            } else {
                button.textContent = 'Leer más';
            }
        });
    });

    // Navegación suave del timeline
    const timelineLinks = document.querySelectorAll('.timeline-nav a');
    timelineLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animación de entrada para las tarjetas al hacer scroll
    const seasonCards = document.querySelectorAll('.season-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    seasonCards.forEach(card => {
        card.style.animationPlayState = 'paused'; // Pausar la animación inicialmente
        observer.observe(card);
    });
});
