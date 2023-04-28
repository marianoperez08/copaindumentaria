let stockProductos = [
    {
        id: "remera-01",
        nombre: "Remera Copa - 'Fenómeno'",
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


// SPLIDE JS
const splideOffers = new Splide( '.splide-offers', {
    perPage: '4',
    perMove: '1',
    gap: '20px',
    breakpoints: {
        992: {
            perPage: 3,
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