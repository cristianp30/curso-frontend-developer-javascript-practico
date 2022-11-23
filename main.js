const emailmenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('#productDetail');
const shoppingCardProduct = document.querySelector('#shoppingCardProduct');
const detailProductContainer = document.querySelector('#productDetail');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');


menuHamIcon.addEventListener('click', toggleMobileMenu);
emailmenu.addEventListener('click', toggleDesktopMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu(){
    shoppingCardProduct.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleCarritoMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed ||!isDesktopMenuClosed ) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = detailProductContainer.classList.contains('inactive');
    if (!isProductDetailClosed  ) {
        detailProductContainer.classList.add('inactive');
        
    }
    
    shoppingCardProduct.classList.toggle('inactive');
    
}


function openDetailProductAside(){
    shoppingCardProduct.classList.add('inactive');
    detailProductContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
   productDetailCloseIcon.classList.add('inactive');
}

function toggleMobileMenu(){
    shoppingCardProduct.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
    closeProductDetailAside();
}

/*listade productos por array*/

const productList = [];

productList.push({
    name: 'biker',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'pc',
    price: 620,
    image: 'https://exitocol.vtexassets.com/arquivos/ids/11639638/computador-pc-de-escritorio-torre-gamer-amd-athlon-3000g-ssd-240gb-hdd-1tb-ram-16gb-led-22-full.jpg?v=637786552371100000'
});

productList.push({
    name: 'card',
    price: 420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */

function renderProducts(arr) {
    for ( product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openDetailProductAside);

    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerHTML = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        
        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productFigureImg);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }    
}

renderProducts(productList);