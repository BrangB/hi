const slider1 = document.querySelector(".slider1");
const slider2 = document.querySelector(".slider2");
const slider = document.querySelector('.slider');
const home = document.querySelector(".home");
const reservation = document.querySelector(".reservation");
const items = document.querySelector(".items");
const gallery = document.querySelector(".gallery");
const contact = document.querySelector(".contact");


home.addEventListener("click" , () => {
    slider1.style.left = "400px";
    slider2.style.left = "390px";
    slider1.style.width = "30px";
    slider2.style.width = "30px";
})
reservation.addEventListener("click" , () => {
    slider1.style.left = "500px";
    slider2.style.left = "475px";
    slider1.style.width = "55px";
    slider2.style.width = "55px";
})
items.addEventListener("click" , () => {
    slider1.style.left = "610px";
    slider2.style.left = "600px";
    slider1.style.width = "23px";
    slider2.style.width = "23px";
})
gallery.addEventListener("click" , () => {
    slider1.style.left = "690px";
    slider2.style.left = "675px";
    slider1.style.width = "30px";
    slider2.style.width = "30px";
})
contact.addEventListener("click" , () =>{
    slider1.style.left = "790px";
    slider2 .style.left = "775px";
    slider1.style.width = "35px";
    slider2.style.width = "35px";
 } )


 const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
