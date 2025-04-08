// API

// console.log("one");
// let response = await fetch("https://jsonplaceholder.typicode.com/users");
// let out = await response.json();
// console.log(out);
// console.log("two");


///////////////////////////////

// Handling
// console.log("start");
// const getdata = async()=>{
//   let Aone = await fetch("https://jsonplaceholder.typicode.com/users");
//   let Btwo = await Aone.json();
//   console.log(Btwo);
// }
// getdata();
// console.log("end");
/////

// Handling
// fetch ("https://jsonplaceholder.typicode.com/users")
// .then((req => req.json()))
// .then((data)=> {
//   console.log(data);
// })
// .catch((error)=>{
//   console.log("error");
// })


//////////////////////////////

// Array Handling in JavaScript

// https://fakestoreapi.com/products
// console.log("startone");
// const apiUrl = 'https://fakestoreapi.com/products';
// const getData = async () => {
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };
// getData();

////////////////////////////////////////////

// Array Handling and Ui Call, uimaker

// const apiUrl = 'https://fakestoreapi.com/products';

// const getData = async () => {
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         uiMaker(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// };

// const uiMaker = (products) => {
//     document.getElementById("productList").innerHTML = "";

//     products.map((product, index) => {
//         let title = document.createElement("h1");
//         title.innerHTML = product.title;

//         let price = document.createElement("p");
//         price.innerHTML = "Price: $" + product.price;

//         let img = document.createElement("img");
//         img.src = product.image;
//         img.width = 150;

//         let category = document.createElement("p");
//         category.innerHTML = "Category: " + product.category;

//         let description = document.createElement("p");
//         description.innerHTML = "description" + product.description;

//         let div = document.createElement("div");
//         div.append(img, title, price, category,description);

//         document.getElementById("productList").append(div);
//     });
// };

// getData();

///////////////////////////////////////////////
