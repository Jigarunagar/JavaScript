let productset = [
    {
        id: 1,
        title: "Gits Gulab Jamun : 200 gms",
        mrp: 125,
        price: 95,
        image: "https://cdn.dmart.in/images/products/APR120000354xx10APR24_5_P.jpg",
    },
    {
        id: 2,
        title: "Talod Nylon Khaman Mix Flour : 500 gms",
        mrp: 135,
        price: 115,
        image: "https://cdn.dmart.in/images/products/FEB120000375xx7FEB24_5_P.jpg",
    },
    {
        id: 3,
        title: "MTR Gulab Jamun Mix : 500 gms",
        mrp: 220,
        price: 159,
        image: "https://cdn.dmart.in/images/products/DEC120001920xx25DEC22_5_P.jpg",
    },
    {
        id: 4,
        title: "Talod Handwa Mix Flour : 500 gms",
        mrp: 125,
        price: 99,
        image: "https://cdn.dmart.in/images/products/FEB120000375xx7FEB24_5_P.jpg",
    },
    {
        id: 5,
        title: "Gits Khaman Dhokla Mix : 500 gms",
        mrp: 150,
        price: 130,
        image: "https://cdn.dmart.in/images/products/JUL120000353xx3JUL24_5_P.jpg",
    },
    {
        id: 6,
        title: "MTR Dosa Mix : 500 gms",
        mrp: 155,
        price: 128,
        image: "https://cdn.dmart.in/images/products/PReadyMixMTR1683xx280521_5_P.jpg",
    },
    {
        id: 7,
        title: "Pillsbury Chocolate Pancake Mix : 80 gm",
        mrp: 59,
        price: 29,
        image: "https://cdn.dmart.in/images/products/DEC120006355xx13DEC23_5_P.jpg",
    },
    {
        id: 8,
        title: "Gits Rabdi Mix : 100 gms",
        mrp: 99,
        price: 78,
        image: "https://cdn.dmart.in/images/products/JUL120001037xx3JUL24_5_P.jpg",
    },
    {
        id: 9,
        title: "Talod Dhokla Mix Flour : 500 gms",
        mrp: 115,
        price: 99,
        image: "https://cdn.dmart.in/images/products/FEB120000373xx5FEB23_5_P.jpg",
    },
    {
        id: 10,
        title: "Gits Dahi Vada : 500 gms",
        mrp: 105,
        price: 169,
        image: "https://cdn.dmart.in/images/products/LREADYMIX500gmGits4xx180621_5_P.jpg",
    },
    {
        id: 11,
        title: "Et-Mi Falooda Mix Rose Flavour : 200 gms",
        mrp: 80,
        price: 40,
        image: "https://cdn.dmart.in/images/products/LREADYMIX200gmEt-M16xx060520211125_5_P.jpg",
    },
    {
        id: 12,
        title: "Talod Idli Mix : 500 gms",
        mrp: 115,
        price: 99,
        image: "https://cdn.dmart.in/images/products/FEB120004073xx5FEB23_5_P.jpg",
    },
];
//////////////////////////
const uiMaker = (productset) => {
    let temp = "";
    for (let i = 0; i < productset.length; i++) {
        temp += `<div class="box">
                  <div class="icons">
                      <a href="" class="fas fa-heart"></a>
                      <a href="" class="fas fa-heart"></a>
                      <a href="" class="fas fa-heart"></a>
                  </div>
                  <img src="${productset[i].image}" alt="">
                  <h5>${productset[i].title}</h5>
                  <div class="stars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                  </div>
                  <div class="pricetag">Price : ₹ ${productset[i].price}<span>₹ ${productset[i].mrp}</span></div>
                  <button class="btnone" onclick="addToCart(${productset[i].id})">Add to Cart</button>
              </div> `;
    }
    document.getElementById("container").innerHTML = temp;
}

uiMaker(productset);
//////////////////////////
const addToCart = (productId) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = productset.find(p => p.id === productId);

    let existingProduct = cart.find(p => p.id === productId);
    if (existingProduct) {
        existingProduct.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
}
/////////////////////////////
document.getElementById("searchBoxset").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = productset.filter(product =>
        product.title.toLowerCase().includes(searchTerm)
    );
    uiMaker(filteredProducts);
    /////////////////////////////
});