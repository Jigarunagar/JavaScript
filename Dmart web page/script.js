let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-wrapper img');
const totalSlides = slides.length;

function moveSlide(direction) {
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  updateSlide();
}

function updateSlide() {
  const offset = -currentIndex * 100;
  document.querySelector('.carousel-wrapper').style.transform = `translateX(${offset}%)`;
}

function autoSlide() {
  moveSlide(1);
}

setInterval(autoSlide, 3000);
////////////////////////
let currentIndexone = 0;
        const slider = document.querySelector('.slider');
        const cards = document.querySelectorAll('.cards');
        const cardWidth = cards[0].offsetWidth + 20;

        function slide(direction) {
            const totalCards = cards.length;
            currentIndexone += direction;

            if (currentIndexone < 0) {
                currentIndexone = 0;
            } else if (currentIndexone > totalCards - 1) {
                currentIndexone = totalCards - 1;
            }

            slider.style.transform = `translateX(-${currentIndexone * cardWidth}px)`;
        }