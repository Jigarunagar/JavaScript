let products = [];

const apiUrl = 'http://localhost:3000/product';

const getData = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        products = data;
        uiMaker(data);
    } catch (error) {
        console.log("error..");
    }
};

// 
const uiMaker = (data) => {
    document.getElementById("productdata").innerHTML = "";
    data.map((ele) => {
        let title = document.createElement("h3");
        title.innerText = ele.title;

        let price = document.createElement("h3");
        price.innerText = `price : ₹${ele.price}`;

        let Mrp = document.createElement("h4");
        Mrp.innerText = `MRP :₹${ele.mrp}`;

        let image = document.createElement("img");
        image.src = ele.image;

        let category = document.createElement("h4");
        category.innerHTML = `category :${ele.category}`;

        let card = document.createElement("div");
        card.append(image, title, price, Mrp, category);
        document.getElementById("productdata").append(card);
    })
}
getData();

// 
document.getElementById("searchBox").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm));
    uiMaker(filteredProducts);
});

// 
const filterCategory = (category) => {
    if (category === "All") {
        uiMaker(products);
    } else {
        const filtered = products.filter(item => item.category === category);
        uiMaker(filtered);
    }
};
document.getElementById("Ready To Cook").addEventListener("click", () => filterCategory("Ready To Cook"));
document.getElementById("Latest Products").addEventListener("click", () => filterCategory("Latest Products"));
document.getElementById("All").addEventListener("click", () => filterCategory("All"));
// 
const sortProducts = (order) => {
    let temp = [...products];

    if (order === "asc") {
        temp.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
        temp.sort((a, b) => b.price - a.price);
    }
    uiMaker(temp);
};
document.getElementById("sortAsc").addEventListener("click", () => sortProducts("asc"));
document.getElementById("sortDesc").addEventListener("click", () => sortProducts("desc"));
