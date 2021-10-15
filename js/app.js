const burger = document.querySelector("nav .burger");
const links = document.querySelector("nav .nav-links");
burger.addEventListener('click', () => {
    links.classList.toggle("open")
})