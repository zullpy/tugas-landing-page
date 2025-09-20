const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let index = 0;

function showSlide() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  slides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(showSlide, 4000);

const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const itemWidth = 320; 
const visibleItems = 3; 
const totalItems = track.children.length;

function moveCarousel() {
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  index++;
  if (index > totalItems - visibleItems) {
    index = 0;
  }
  moveCarousel();
});

prevBtn.addEventListener('click', () => {
  index--;
  if (index < 0) {
    index = totalItems - visibleItems; 
  }
  moveCarousel();
});
