const burger = document.querySelector("nav .burger");
const links = document.querySelector("nav .nav-links");
const year = document.getElementById('year');

burger.addEventListener('click', () => {
    links.classList.toggle("open")
})
year.textContent = new Date().getFullYear();
var imgArr = ['img/gallery1.jpg', 'img/gallery2.jpg', 'img/gallery3.jpg', 'img/gallery5.jpg', 'img/gallery6.jpg', 'img/gallery7.jpg', 'img/gallery9.jpg', 'img/gallery10.jpg', 'img/gallery11.jpg', 'img/gallery12.jpg', 'img/gallery13.jpg'];


let images = document.querySelector(".images");

imgArr.forEach((e) => {
    var g = document.createElement('img');
    g.src = `${e}`
    images.appendChild(g);
});
