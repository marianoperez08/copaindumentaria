let stockProductos = [
    {
        // Remeras
        id: "remera-01",
        nombre: "Remera - 'Fenómeno'",
        img: "remera-ronaldo.jpg",
        img2: "remera-ronaldo-2.jpg",
        colores: {
            gris: true,
            blanco: false,
            celeste: false,
            negro: false,
            rojo: false,
            azul: false
        },
        categoria: {
            nombre: "Remeras",
            id: "remera"
        },
        precio: 7500,
        oferta: true,
        destacado: true,
        cantidad: 1
    },
    {
        id: "remera-02",
        nombre: "Remera - 'Messías'",
        img: "remera-messias.jpg",
        img2: "remera-messias-2.jpg",
        colores: {
            gris: true,
            blanco: false,
            celeste: false,
            negro: true,
            rojo: false,
            azul: false
        },
        categoria: {
            nombre: "Remeras",
            id: "remera"
        },
        precio: 7500,
        oferta: true,
        destacado: true,
        cantidad: 1
    },
    {
        id: "remera-03",
        nombre: "Remera - 'Diego ''82'",
        img: "remera-diego82.jpg",
        img2: "remera-diego82-2.jpg",
        colores: {
            gris: false,
            blanco: true,
            celeste: false,
            negro: false,
            rojo: false,
            azul: false
        },
        categoria: {
            nombre: "Remeras",
            id: "remera"
        },
        precio: 7500,
        oferta: true,
        destacado: true,
        cantidad: 1
    },
    {
        id: "remera-04",
        nombre: "Remera - 'Johan, el Creador'",
        img: "remera-johan.jpg",
        img2: "remera-johan-2.jpg",
        colores: {
            gris: true,
            blanco: true,
            celeste: false,
            negro: true,
            rojo: false,
            azul: false
        },
        categoria: {
            nombre: "Remeras",
            id: "remera"
        },
        precio: 7500,
        oferta: true,
        destacado: true,
        cantidad: 1
    },
    {
        //NECESER

        id: "neceser-01",
        nombre: "neceser forza",
        img: "neceser-forza.jpg",
        colores: {
            gris: false,
            blanco: true,
            celeste: false,
            negro: true,
            rojo: false,
            azul: false,
            rosa: false
        },
        categoria: {
            nombre: "necesers",
            id: "neceser"
        },
        precio: 9999,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "neceser-02",
        nombre: "neceser butto liso",
        img: "neceser-butto-liso.jpg",
        colores: {
            gris: false,
            blanco: false,
            celeste: false,
            negro: true,
            rojo: false,
            azul: false,
            rosa: false
        },
        categoria: {
            nombre: "necesers",
            id: "neceser"
        },
        precio: 9999,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "neceser-03",
        nombre: "neceser butto futbol",
        img: "neceser-butto-futbol.jpg",
        colores: {
            gris: false,
            blanco: false,
            celeste: false,
            negro: true,
            rojo: false,
            azul: false,
            rosa: false
        },
        categoria: {
            nombre: "necesers",
            id: "neceser"
        },
        precio: 9999,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "neceser-04",
        nombre: "neceser kubo zr",
        img: "neceser-kubo-zr.jpg",
        colores: {
            gris: false,
            blanco: false,
            celeste: false,
            negro: true,
            rojo: false,
            azul: false,
            rosa: false
        },
        categoria: {
            nombre: "necesers",
            id: "neceser"
        },
        precio: 9999,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "neceser-05",
        nombre: "neceser drigo liso",
        img: "neceser-drigo-liso.jpg",
        colores: {
            gris: false,
            blanco: false,
            celeste: false,
            negro: true,
            rojo: false,
            azul: false,
            rosa: false
        },
        categoria: {
            nombre: "necesers",
            id: "neceser"
        },
        precio: 9999,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "neceser-06",
        nombre: "neceser tachas",
        img: "neceser-tachas",
        colores: {
            gris: false,
            blanco: false,
            celeste: false,
            negro: true,
            rojo: false,
            azul: false,
            rosa: false
        },
        categoria: {
            nombre: "necesers",
            id: "neceser"
        },
        precio: 9999,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "neceser-07",
        nombre: "neceser platinum",
        img: "neceser-platinum.jpg",
        colores: {
            gris: false,
            blanco: false,
            celeste: false,
            negro: true,
            rojo: false,
            azul: false,
            rosa: false
        },
        categoria: {
            nombre: "necesers",
            id: "neceser"
        },
        precio: 9000,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "neceser-08",
        nombre: "neceser metal",
        img: "necesar-metal.jpg",
        colores: {
            gris: false,
            blanco: false,
            celeste: false,
            negro: true,
            rojo: false,
            azul: false,
            rosa: false
        },
        categoria: {
            nombre: "necesers",
            id: "neceser"
        },
        precio: 9999,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "neceser-09",
        nombre: "neceser gajos",
        img: "neceser-gajos.jpg",
        img2: "neceser-gajos-2.jpg",
        colores: {
            gris: false,
            blanco: true,
            celeste: false,
            negro: true,
            rojo: false,
            azul: false,
            rosa: false
        },
        categoria: {
            nombre: "necesers",
            id: "neceser"
        },
        precio: 9500,
        oferta: true,
        destacado: true,
        cantidad: 1
    },
    {
        id: "neceser-10",
        nombre: "neceser kubo",
        img: "neceser-kubo.jpg",
        colores: {
            marron: true,
            gris: false,
            blanco: false,
            celeste: false,
            negro: true,
            rojo: false,
            azul: false,
            rosa: false
        },
        categoria: {
            nombre: "necesers",
            id: "neceser"
        },
        precio: 9000,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "neceser-11",
        nombre: "neceser zr",
        img: "neceser-zr.jpg",
        colores: {
            gris: false,
            blanco: false,
            celeste: false,
            negro: true,
            rojo: false,
            azul: false,
            rosa: false
        },
        categoria: {
            nombre: "necesers",
            id: "neceser"
        },
        precio: 9999,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "neceser-12",
        nombre: "neceser black",
        img: "neceser-black.jpg",
        colores: {
            gris: false,
            blanco: false,
            celeste: false,
            negro: true,
            rojo: false,
            azul: false,
            rosa: false
        },
        categoria: {
            nombre: "necesers",
            id: "neceser"
        },
        precio: 9999,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    // Mochila
    {
        id: "mochila-01",
        nombre: "bolso cilindro",
        img: "bolso-cilindro.jpg",
        colores: {
            gris: false,
            blanco: false,
            celeste: false,
            negro: true,
            rojo: false,
            azul: false,
            rosa: false
        },
        categoria: {
            nombre: "mochilas",
            id: "mochila"
        },
        precio: 15000,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "mochila-02",
        nombre: "mochila kubo",
        img: "mochila-kubo.jpg",
        colores: {
            gris: false,
            blanco: false,
            celeste: false,
            negro: true,
            rojo: false,
            azul: false,
            rosa: false
        },
        categoria: {
            nombre: "mochilas",
            id: "mochila"
        },
        precio: 15600,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "mochila-03",
        nombre: "mochila line",
        img: "mochila-line.jpg",
        img2: "mochila-line-2.jpg",
        colores: {
            gris: false,
            blanco: false,
            celeste: false,
            negro: true,
            rojo: false,
            azul: false,
            rosa: false
        },
        categoria: {
            nombre: "mochilas",
            id: "mochila"
        },
        precio: 15500,
        oferta: true,
        destacado: true,
        cantidad: 1
    },
    {
        id: "mochila-04",
        nombre: "mochila xl",
        img: "mochila-xl.jpg",
        colores: {
            gris: false,
            blanco: false,
            celeste: false,
            negro: true,
            rojo: false,
            azul: false,
            rosa: false
        },
        categoria: {
            nombre: "mochilas",
            id: "mochila"
        },
        precio: 15600,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    // Medias
    {
        id: "medias-01",
        nombre: "medias antideslizantes (calcio)",
        img: "medias-antideslizantes.jpg",
        img2: "medias-antideslizantes-2.jpg",
        colores: {
            blanco: true,
            celeste: true,
            negro: true,
            rojo: true,
            azul: false
        },
        categoria: {
            nombre: "medias",
            id: "media"
        },
        precio: 4200,
        oferta: true,
        destacado: true,
        cantidad: 1
    },
    {
        id: "medias-02",
        nombre: "medias pantorilleras",
        img: "medias-pantorrilleras.jpg",
        colores: {
            blanco: true,
            celeste: true,
            negro: true,
            rojo: true,
            azul: true
        },
        categoria: {
            nombre: "medias",
            id: "media"
        },
        precio: 3200,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "medias-03",
        nombre: "cinta cohesiva",
        img: "cinta-cohesiva.jpg",
        colores: {
            blanco: true,
            celeste: false,
            negro: true,
            rojo: true,
            azul: false
        },
        categoria: {
            nombre: "medias",
            id: "media"
        },
        precio: 1300,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "medias-04",
        nombre: "combo antideslizante + pantorillera + cinta",
        img: "combo-mediasx3.jpg",
        colores: {
            blanco: true,
            celeste: false,
            negro: true,
            rojo: true,
            azul: false
        },
        categoria: {
            nombre: "medias",
            id: "media"
        },
        precio: 8400,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    //Billeteras
    {
        id: "billetera-01",
        nombre: "billetera gajos",
        img: "billetera-gajos.jpg",
        categoria: {
            nombre: "billeteras",
            id: "billetera"
        },
        precio: 8000,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "billetera-02",
        nombre: "billetera black",
        img: "billetera-black.jpg",
        categoria: {
            nombre: "billeteras",
            id: "billetera"
        },
        precio: 7800,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    // Mate
    {
        id: "mate-01",
        nombre: "matera gajos negra",
        img: "matera-gajos-black.jpg",
        categoria: {
            nombre: "mates",
            id: "mate"
        },
        precio: 13900,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "mate-01",
        nombre: "matera gajos negra",
        img: "matera-gajos-black.jpg",
        categoria: {
            nombre: "mates",
            id: "mate"
        },
        precio: 13900,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "mate-02",
        nombre: "matera cilindrada",
        img: "matera-cilindrada.jpg",
        categoria: {
            nombre: "mates",
            id: "mate"
        },
        precio: 13900,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "mate-03",
        nombre: "canasta matera",
        img: "canasta-matera-futbol.jpg",
        categoria: {
            nombre: "mates",
            id: "mate"
        },
        precio: 15000,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    // BOTINEROS
    {
        id: "botinero-01",
        nombre: "botinero gajos",
        img: "botineros-gajos.jpg",
        colores: {
            negro: true,
            blanco: false
        },
        categoria: {
            nombre: "botineros",
            id: "botinero"
        },
        precio: 12600,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "botinero-02",
        nombre: "botinero butto",
        img: "botineros-butto.jpg",
        colores: {
            negro: true,
            blanco: false
        },
        categoria: {
            nombre: "botineros",
            id: "botinero"
        },
        precio: 13000,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "morral-01",
        nombre: "mini morral",
        img: "mini-morral.jpg",
        img2: "mini-morral-2.jpg",
        colores: {
            negro: true,
            blanco: true
        },
        categoria: {
            nombre: "morrales",
            id: "morral"
        },
        precio: 10300,
        oferta: true,
        destacado: true,
        cantidad: 1
    },
    {
        id: "morral-02",
        nombre: "morralsin",
        img: "morralsin.jpg",
        colores: {
            negro: true,
            blanco: true
        },
        categoria: {
            nombre: "morrales",
            id: "morral"
        },
        precio: 10300,
        oferta: true,
        destacado: false,
        cantidad: 1
    },
    {
        id: "morral-03",
        nombre: "riñora copa",
        img: "riñonera-copa.jpg",
        colores: {
            negro: true,
            blanco: false
        },
        categoria: {
            nombre: "morrales",
            id: "morral"
        },
        precio: 9000,
        oferta: true,
        destacado: false,
        cantidad: 1
    }, 
]

// Scroll
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar")
    let img = document.querySelector(".navbar-img")
    let cartCount = document.querySelector("#cart-count")
    let dropDown = document.querySelector(".dropdown-menu")
    let dropDownMenu1 = document.querySelector(".dropdown-menu-1")
    let dropDownMenu2 = document.querySelector(".dropdown-menu-2")
    let scrollPos = window.scrollY

    if (scrollPos > 1) {
        navbar.style.position = "fixed"
        navbar.style.backgroundColor = "var(--blue)"
        dropDown.style.backgroundColor = "var(--blue)"
        dropDownMenu1.style.backgroundColor = "var(--blue)"
        dropDownMenu2.style.backgroundColor = "var(--blue)"
        navbar.style.transition = "background-color 0.3s ease-in-out"
        dropDown.style.transition = "background-color 0.3s ease-in-out"
        dropDownMenu1.style.transition = "background-color 0.3s ease-in-out"
        dropDownMenu2.style.transition = "background-color 0.3s ease-in-out"
        img.src = "./assets/imgs/logos/logo-copa.png"
        img.style.transition = "background-color 0.3s ease-in-out"
        cartCount.style.backgroundColor = "var(--red)"
    }
    else {
        navbar.style.backgroundColor = "var(--red)"
        dropDown.style.backgroundColor = "var(--red)"
        dropDownMenu1.style.backgroundColor = "var(--red)"
        dropDownMenu2.style.backgroundColor = "var(--red)"
        navbar.style.transition = "background-color 0.3s ease-in-out"
        dropDown.style.transition = "background-color 0.3s ease-in-out"
        dropDownMenu1.style.transition = "background-color 0.3s ease-in-out"
        dropDownMenu2.style.transition = "background-color 0.3s ease-in-out"
        img.style.transition = "background-color 0.3s ease-in-out"
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


// Añadir productos al home
const containerProducts = document.querySelector('.products-container')
stockProductos.forEach((producto) => {
    const {id, nombre, img, img2, precio, destacado} = producto
    if (destacado) {
        containerProducts.innerHTML +=
        `<div class="product" id="${id}">
        <div class="product-img">
            <img class="img" src="./assets/imgs/products/${img}" alt="">
            <img class="img product-img-hover" src="./assets/imgs/products/${img2}" alt="">
        </div>
        <div class="product-info">
            <div class="product-info-text">
                <span class="product-name">${nombre}</span>
                <span class="product-price">$${precio}</span>
                <div class="product-pay">
                <i class="fa-regular fa-credit-card product-pay-icon"></i>
                <span class="product-pay-text">6 cuotas sin interés</span>
            </div>
            </div>
            <div class="product-buttons">
                <a href="#" class="button-buy button">comprar</a>
                <a href="#" class="button-view button"><i class="fa-regular fa-eye eye-icon "></i>ver</a> 
            </div>   
        </div>
    </div>
        `
    }
    
})
