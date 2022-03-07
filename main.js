//seleziona icona hamburger tramite assegnazione variabile
const hamburgerMenu = document.getElementById ('hamburger-menu');

const rightMenu = document.getElementById ('right-menu');

//aggiungi EventListener al click dell'icona hamburger per aprire menu
hamburgerMenu.addEventListener('click', function () {
    rightMenu.style.display = 'block';
})