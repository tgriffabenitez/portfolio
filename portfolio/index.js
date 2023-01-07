/* navbar efect */
const navEl = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if(window.scrollY > 56){
        navEl.classList.add("navbar-scrolled")
    } else {
        navEl.classList.remove("navbar-scrolled");
    }
})

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