//seleziona icona hamburger tramite assegnazione variabile
const hamburgerMenu = document.getElementById ('hamburger-menu');
//seleziona menu tramite assegnazione variabile
const rightMenu = document.getElementById ('right-menu');
//seleziona icona chiusura menu tramite assegnazione variabile
const closeIcon = document.getElementById ('close-icon');


//aggiungi EventListener al click dell'icona hamburger per aprire menu
hamburgerMenu.addEventListener('click', function () {
    rightMenu.style.display = 'block';
});

closeIcon.addEventListener('click', function () {
    rightMenu.style.display = 'none';
});