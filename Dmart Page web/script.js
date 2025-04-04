let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-wrapper img');
const totalSlides = slides.length;

const moveSlide = (direction) => {
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  updateSlide();
}

const updateSlide = () => {
  const offset = -currentIndex * 100;
  document.querySelector('.carousel-wrapper').style.transform = `translateX(${offset}%)`;
}

const autoSlide = () => {
  moveSlide(1);
}

setInterval(autoSlide, 3000);
////////////////////////
let currentIndexone = 0;
const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.cards');
const cardWidth = cards[0].offsetWidth + 20;
const slide = (direction) => {
  const totalCards = cards.length;
  currentIndexone += direction;

  if (currentIndexone < 0) {
    currentIndexone = 0;
  } else if (currentIndexone > totalCards - 1) {
    currentIndexone = totalCards - 1;
  }

  slider.style.transform = `translateX(-${currentIndexone * cardWidth}px)`;
}
////////////////////////////////////
let productShow = [
  {
    id: 1,
    title: "Faces Canada Matte Finish Lipstick - Buff Nude 05 : 4 gms",
    mrp: 325,
    price: 195,
    image: "https://cdn.dmart.in/images/products/FEB140003892xx26FEB24_5_P.jpg",
  },
  {
    id: 2,
    title: "Skin Fx Detoxifying & Hydrating Serum Mask : 20 g",
    mrp: 149,
    price: 74,
    image: "https://cdn.dmart.in/images/products/SEP140005437xx30SEP24_5_P.jpg",
  },
  {
    id: 3,
    title: "Faces Canada HD Matte Lips + Primer - Perfection 01 : 1.4 gms",
    mrp: 849,
    price: 468,
    image: "https://cdn.dmart.in/images/products/FEB140003916xx26FEB24_5_P.jpg",
  },
  {
    id: 4,
    title: "Maybelline New York Creamy Mattes Lipstick - Divine Wine : 3.9 gms",
    mrp: 329,
    price: 231,
    image: "https://cdn.dmart.in/images/products/LSKINREJU3.9gmMayb28xx110621_5_P.jpg",
  },
  {
    id: 5,
    title: "Lakme Forever Matte Liquid Lip Colour - Nude Dream : 5.6 ml",
    mrp: 429,
    price: 364,
    image: "https://cdn.dmart.in/images/products/FEB140003833xx09FEB22_5_P.jpg",
  },
  {
    id: 6,
    title: "Insight HD Concealer - (CR-111) LN 10 : 9 gms",
    mrp: 270,
    price: 189,
    image: "https://cdn.dmart.in/images/products/MAR140004069xx6MAR22_5_P.jpg",
  },
  {
    id: 7,
    title: "Faces Canada 3in1 Matte Foundation - Rose Ivory : 25 ml",
    mrp: 549,
    price: 349,
    image: "https://cdn.dmart.in/images/products/FEB140004323xx14FEB24_5_P.jpg",
  },
  {
    id: 8,
    title: "Faces Canada Creme Finish Lipstick - Plum Peach 06 : 4 gms",
    mrp: 299,
    price: 180,
    image: "https://cdn.dmart.in/images/products/FEB140003900xx26FEB24_5_P.jpg",
  },
  {
    id: 9,
    title: "Maybelline New York Highlighter - Molten Rose Gold : 6.7 gms",
    mrp: 779,
    price: 462,
    image: "https://cdn.dmart.in/images/products/FEB140003740xx03FEB22_5_P.jpg",
  },
  {
    id: 10,
    title: "Insight 24 Hrs Matte Lipstick - I'm Tamed! (17) : 3 gms",
    mrp: 255,
    price: 153,
    image: "https://cdn.dmart.in/images/products/MAR140004064xx6MAR22_5_P.jpg",
  },
  {
    id: 11,
    title: "Skin Fx Brightening & Moisturizing Serum Mask : 20 g",
    mrp: 169,
    price: 84,
    image: "https://cdn.dmart.in/images/products/SEP140005435xx30SEP24_5_P.jpg",
  },
  {
    id: 12,
    title: "Sirona Cottony Soft Rash Free Pads XL : 10 U",
    mrp: 151,
    price: 76,
    image: "https://cdn.dmart.in/images/products/NOV140004407xx13NOV23_5_P.jpg",
  },
];

const uiMaker = (productShow) => {
  let temp = "";
  for (let i = 0; i < productShow.length; i++) {
    temp += `<div class="box">
                <div class="icons">
                    <a href="" class="fas fa-heart"></a>
                    <a href="" class="fas fa-heart"></a>
                    <a href="" class="fas fa-heart"></a>
                </div>
                <img src="${productShow[i].image}" alt="">
                <h5>${productShow[i].title}</h5>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="pricetag">Price : ₹ ${productShow[i].price}<span>₹ ${productShow[i].mrp}</span></div>
                 <button class="btnone" onclick="addToCart(${productShow[i].id})">Add to Cart</button>
            </div> `;
  }
  document.getElementById("container").innerHTML = temp;
}

uiMaker(productShow);
//////////////////////////////////////

document.getElementById("searchBox").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredProducts = productShow.filter(product =>
    product.title.toLowerCase().includes(searchTerm)
  );
  uiMaker(filteredProducts);
});

/////////////////////////////////////////////////
