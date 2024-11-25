//Variables
const newsSection = document.querySelector('#news-sc');
const gallerySection = document.querySelector('#gallery-imgs');
const feedbackSection = document.querySelector('#feedback-cards');
const productsSection = document.querySelector('#products');

const btnBars = document.querySelector('#button-bars');
const dropdown = document.querySelector('.dropdown-menu');
const btnClose = document.querySelector('#button-bars i');

const productsContainer = document.querySelector('#products-container');
const btnClearCart = document.querySelector('#clear-cart-btn');
const btnBuyCart = document.querySelector('#buy-cart-btn');
const totalItems = document.querySelector('#total-items');
const total = document.querySelector('#total');


//Eventos
document.addEventListener("DOMContentLoaded", () => {
    createNews(news); 
    createGallery(gallery); 
    createFeedbacks(feedbacks);
    createProducts(products);

    const carritoButtons = document.querySelectorAll('.btnCarrito');
    const cartMenu = document.querySelector('.cart-menu');
    
    carritoButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartMenu.classList.toggle('oculto');
        });
    });
    
});

btnBars.addEventListener('click', () => {
    dropdown.classList.toggle('oculto');
    const isOpen = dropdown.classList.contains('oculto');
    btnClose.classList = isOpen
    ? "fa-solid fa-bars"
    : 'fa-solid fa-x';
});



//Funciones
function createNews(news) {
    news.forEach( datos => {
        const {title, description, image} = datos;
        const newsCard = document.createElement('article');
        newsCard.classList.add('news__card');
        newsCard.innerHTML = `
        <div class='news-c-img'>
            <img class='news-c-img' src='${image}' alt='Imagen de comida'>
        </div>
        <div class='news-text_container'>
            <p class='news__card--title'>${title}</p>
            <p class='news__card--paragraph'>${description}</p>
        </div>
        `;
        newsSection.appendChild(newsCard);
    });
};

function createGallery(gallery) {
    gallery.forEach( datos => {
        const {description, image} = datos;
        const imgGallery = document.createElement('img');
        imgGallery.classList.add('img-gallery');
        imgGallery.src = `${image}`;
        imgGallery.alt = `${description}`;
        gallerySection.appendChild(imgGallery)
    });
};

function createFeedbacks(feedbacks) {
    feedbacks.forEach( datos => {
        const {name, coment, position, image} = datos;
        const feedbackCard = document.createElement('article');
        feedbackCard.classList.add('feedback-card');
        feedbackCard.innerHTML = `
        <div class='feedback-text'>
            <div class='feedback-text'>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <p class='feedcard--paragraph'>${coment}</p>
        </div>
        <div class='feed-card-img'>
            <div class='feed-person-name'>
                <p class='person-name'>${name}</p>
                <p class='person-position'>${position}</p>
            </div>
            <img src='${image}' alt="Decoracion con imagen de spaghetti"'>
        </div>
        `;
        feedbackSection.appendChild(feedbackCard);
    });
};

function createProducts(products) {
    products.forEach( datos => {
        const {id, name, image, details, price} = datos;
        const productCard = document.createElement('div');
        productCard.classList.add('popular-card');
        productCard.innerHTML = `
            <div class="button-favorite">
                <button><i class="fa-solid fa-heart"></i></button>
            </div>
        
            <article class="products--item">
                <img class="popular__img" src="${image}" alt="">
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="popular-name">${name}</p>
                <p class="popular-details">${details}</p>
                <p class="popular-price">$${price}</p>

                <div class="popular-buttons">
                    <button id='${id}' class="btn btn-secundary popular-btn"><i class="fa-solid fa-bag-shopping"></i>Add to Cart</button>
                </div>
            </article>
        `;
        productsSection.appendChild(productCard);
    });
}
class ShoppingCart {
    constructor() {
        this.item = [];
        this.total = 0;
    }

    addItem(id, products) {
        const product = products.find( item => item.id === id);
        const { name, price } = product;
        this.item.push(product);
    }

    getCounts(){
        return this.item.length;
    }

    buyCart() {
        const isCartCleared = confirm("Are you sure you want to purchase all items from your shopping cart?");

        if (isCartCleared){
            alert('Thank you for you purchase :D');
            return;
        }
    }

    clearCart() {
        if (!this.item.length) {
            alert("Your shopping cart is already empty");
            return;
        }

        const isCartCleared = confirm("Are you sure you want to clear all items from your shopping cart?");

        if (isCartCleared){
            this.item = [];
            this.total = 0;
            productsContainer.innerHTML = "";
            totalNumberOfItems.textContent = 0;
        }
    }
}

const cart = new ShoppingCart();

btnClearCart.addEventListener('click', cart.clearCart.bind(cart));
btnBuyCart.addEventListener('click', cart.buyCart.bind(cart));


