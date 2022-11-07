const emailmenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')


emailmenu.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}