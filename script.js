let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active'); //open search form
    shoppingCart.classList.remove('active'); // Close shopping cart if open
    loginForm.classList.remove('active'); //close login form when scrolling
    navbar.classList.remove('active'); //close menu when scrolling
};

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active'); //open shopping cart
    searchForm.classList.remove('active'); // Close search form if open
    loginForm.classList.remove('active'); //close login form when scrolling
    navbar.classList.remove('active'); //close menu when scrolling
};


let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active'); //open login form
    searchForm.classList.remove('active'); // Close search form if open
    shoppingCart.classList.remove('active'); //close shopping cart when scrolling
    navbar.classList.remove('active'); //close menu when scrolling
};

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active'); //open login form
    loginForm.classList.remove('active'); // Close login form if open
    shoppingCart.classList.remove('active'); //close shopping cart when scrolling
    searchForm.classList.remove('active'); //close search form when scrolling
};

window.onscroll = () => {
    searchForm.classList.remove('active'); //close search form when scrolling
    shoppingCart.classList.remove('active'); //close shopping cart when scrolling
    loginForm.classList.remove('active'); //close login form when scrolling
    navbar.classList.remove('active'); //close menu when scrolling

}

// Swiper
    var swiper = new Swiper(".product-slider", {
      loop: true,
      spaceBetween: 20,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1020: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });


    var swiper = new Swiper(".review-slider", {
      loop: true,
      spaceBetween: 10,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1020: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });