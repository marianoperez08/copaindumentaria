window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar")
    var scrollPos = window.scrollY

    if (scrollPos > 40) {
        navbar.style.top = "0"
        navbar.style.transition = "0.5s ease-in-out";
    }
    else {
        navbar.style.top = "40px"
        navbar.style.transition = "0.5s ease-in-out";
    }
});  