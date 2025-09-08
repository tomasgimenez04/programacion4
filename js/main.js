document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navegacionMenu = document.querySelector('.navegacion ul');

    if (hamburgerBtn && navegacionMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navegacionMenu.classList.toggle('navegacion-abierta');
        });
    }
});
