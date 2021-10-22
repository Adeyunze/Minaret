const burger = document.querySelector("nav .burger");
const links = document.querySelector("nav .nav-links");
const year = document.getElementById('year');

burger.addEventListener('click', () => {
    links.classList.toggle("open")
})
year.textContent = new Date().getFullYear();
let imgArr = ['img/gallery1.jpg', 'img/gallery2.jpg', 'img/gallery3.jpg', 'img/gallery5.jpg', 'img/gallery6.jpg', 'img/gallery7.jpg', 'img/gallery9.jpg', 'img/gallery10.jpg', 'img/gallery11.jpg', 'img/gallery12.jpg', 'img/gallery13.jpg'];
let independence = ["img/independence1.jpg", "img/independence2.jpg", "img/independence3.jpg", "img/independence4.jpg", "img/independence5.jpg", "img/independence6.jpg", "img/independence7.jpg", "img/independence8.jpg", "img/independence9.jpg", "img/independence10.jpg", "img/independence11.jpg", "img/independence12.jpg", "img/independence13.jpg", "img/independence14.jpg", "img/independence15.jpg", "img/independence16.jpg", "img/independence17.jpg", "img/independence18.jpg", "img/independence19.jpg", "img/independence20.jpg", "img/independence21.jpg", "img/independence22.jpg", "img/independence23.jpg", "img/independence24.jpg", "img/independence25.jpg", "img/independence26.jpg", "img/independence27.jpg", "img/independence28.jpg", "img/independence29.jpg", "img/independence30.jpg", "img/independence31.jpg"]
console.log(independence.length);
let images = document.querySelector(".images");
let independenceImg = document.querySelector(".independence-images");

imgArr.forEach((e) => {
    var g = document.createElement('img');
    g.src = `${e}`
    images.appendChild(g);
});
independence.forEach((e) => {
    var g = document.createElement('img');
    g.src = `${e}`
    independenceImg.appendChild(g);
});
