let stockProductos = [
    {
        id: "remera-01",
        nombre: "Remera Copa - 'Fenómeno'",
        img1: "remera-ronaldo.jpg",
        img2: "remera-ronaldo.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remera"
        },
        precio: 1000,
        oferta: true,
        destacado: true,
    },
    {
        id: "remera-02",
        nombre: "Remera Copa - 'Messías'",
        img: "remera-ronaldo.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remera"
        },
        precio: 1000,
        oferta: true,
        destacado: true,
    },
    {
        id: "remera-03",
        nombre: "Remera Copa - 'Diego ''82'",
        img: "remera-ronaldo.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remera"
        },
        precio: 1000,
        oferta: true,
        destacado: true,
    },
    {
        id: "remera-04",
        nombre: "Remera Copa - 'Diego ''82'",
        img: "remera-ronaldo.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remera"
        },
        precio: 1000,
        oferta: true,
        destacado: true,
    }
]

window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar")
    let img = document.querySelector(".navbar-img")
    let navbarIcon = document.querySelector(".navbar-icon")
    let cartCount = document.querySelector("#cart-count")
    let scrollPos = window.scrollY

    if (scrollPos > 1) {
        navbar.style.top = "0"
        navbar.style.backgroundColor = "var(--blue)"
        navbar.style.transition = "background-color 0.3s ease-in-out";
        img.src = "./assets/imgs/logos/logo-copa.png"
        cartCount.style.backgroundColor = "var(--red)"
    }
    else {
        navbar.style.top = "40px"
        navbar.style.transition = "background-color 0.3s ease-in-out";
        navbar.style.backgroundColor = "var(--red)"
        img.src = "./assets/imgs/logos/logo-copa-white.png"
        cartCount.style.backgroundColor = "var(--blue)"
    }
});  


// SPLIDE JS
const splideOffers = new Splide( '.splide-offers', {
    perPage: '4',
    perMove: '1',
    gap: '20px',
    breakpoints: {
        1100: {
            perPage: 3,
        },

        800: {
            perPage: 2,
        },
        576: {
            perPage: 1,
        }
    },
    pagination: false
});

const splideHero = new Splide( '.splide-hero', {
    type: 'loop',
    perPage: '1',
    perMove: '1',
    autoplay: true,
    interval: 2500,
    pauseOnHover: false,
    arrows: false, 
    type  : 'fade',
    rewind: true,
});

const splideLocation = new Splide( '.splide-location', {
    perPage: '1',
    perMove: '1',
    autoplay: true,
    interval: 3000,
    pauseOnHover: false,
    type  : 'fade',
    rewind: true,
});




splideHero.mount();
splideLocation.mount();
splideOffers.mount();