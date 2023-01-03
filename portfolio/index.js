/* Navbar toggle */
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
});


/* Vanta wave animation */
window.addEventListener('DOMContentLoaded', () => {
    VANTA.WAVES({
    el: "#inicio",
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    shininess: 0.00,
    waveHeight: 30.00,
    zoom: 0.65
    })
});