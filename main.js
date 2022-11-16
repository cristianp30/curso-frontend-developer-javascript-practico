const emailmenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const mobileMenu = document.querySelector('.mobile-menu');


menuHamIcon.addEventListener('click', toggleMobileMenu);
emailmenu.addEventListener('click', toggleDesktopMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);

function toggleDesktopMenu(){
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleCarritoMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isMobileMenuClosed ||!isDesktopMenuClosed ) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
    
}

function toggleMobileMenu(){
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

/*listade productos por array*/

const productList = [];

productList.push({
    name: 'biker',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'pc',
    price: 620,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'card',
    price: 420,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});