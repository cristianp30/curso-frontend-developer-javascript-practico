const emailmenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const mobileMenu = document.querySelector('.mobile-menu');


menuHamIcon.addEventListener('click', toggleMobileMenu);
emailmenu.addEventListener('click', toggleDesktopMenu);
menuCarritoIcon-addEventListener('click', toggleCarritoMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoMenu(){
    aside.classList.toggle('inactive');
}