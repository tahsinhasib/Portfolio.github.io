//sticky navbar
window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
};



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });