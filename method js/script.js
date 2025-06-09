// conditions
// let x = 100;
//  let y = 10;

//  if (x % y == 0) {
//    console.log(`x : ${x} is divisible by y : ${y}`);
//  } else {
//     //  console.log("x :", x, "is not divisible by y : ", y);
//    console.log(`x \n: ${x} is not divisible by y \n: ${y}`);
//  }

// console.log(`x : ${x} y : ${y}` );

//  if (x < y) {
//    console.log(`small ${y}`);
//  }
//  else{
//   console.log(`${x}`);
  
//  }

//  if (x % 2 != 0) {
//    //
//    console.log("odd number");
//  } else {
//    console.log("even number");
//  }
//  console.log(x % 2);

//  console.log(typeof x);

////////////////////////////

//  function  
//  function sum(a, b) {
//     console.log(a + b);
//   }

//   sum(10, 40);
//   sum(100, 30);

/////////////////////////////
// console.log("working js file");
// datatypes

// string  ""`` '' "a"
// number  345
// boolean  true/false

// let a = 10;
// let b = 30;
// b = 50;
// let c = 30;
// // c = 50;
// let sum = a + b + c;

// console.log(10 + true + false);
// console.log(sum);

////////////////////////////////////////////
// =
// let x = 510;
// let y = 510;
// let a = 200;
// let b = 200;
// // = =
// console.log(x == y);
// // ===
// console.log(x === y);
// // /+-* %
// console.log(x % y);
// console.log(x--);
// console.log(x);
// console.log(x);
// // x = x * 4;
// console.log(x);
// // <=   >=  !=
// console.log(x != y);
// // and or , && , ||
// console.log(x == y && a == b);

///////////////////////////////////
// loop 

// let sum = 0;
//  for (let i = 1; i <= 5; i++) {
//    sum += i;
//  }
//  console.log(sum);
 
//  for (let i = 1; i < 10; i += 2) {
//  console.log(i);
//  }
 
//  let i = 1;
//  while (i < 10) {
//    console.log(i);
//    i++;
//  }
 
//  let i = 10;
 
//  do {
//    console.log(i);
//    i++;
//  } while (i < 10);
 
//  reverse loop
//  for (let i = 10; i > 0; i--) {
//    console.log(i);
//  }
 
 // nested loop
 
//  for (let i = 1; i <= 5; i++) {
//    for (let j = i; j <= 3; j++) {
//      console.log(i + j);
//    }
//  }
 
 // // 2 3 4 4 5 9
 // // 2 3 4 4 5 6
 // // 2 3 4 4 5 6 6 4 5
 
//  let sum = 0;
//  for (let i = 0; i < 5; i++) {
//    for (let j = 0; j < 5; j++) {
//      if (i == j) {
//        sum += i + j;
//      }
//    }
//  }
 
//  console.log(-sum);
// //////////////////////////////////
// nested 
// let x = 50;
//  let y = 150;
//  // let z = 30;
 
//  // swapping
//  console.log(`before swap x and y: ${x} and ${y}`);
 
//  let temp = x;
//  x = y;
//  y = temp;
 
//  console.log(`after swap x and y: ${x} and ${y}`);
 
//  if (x > y || x > z) {
//    console.log("x");
//  } else if (y > x || y > z) {
//    console.log("y ");
//  } else if (z > x && z > y) {
//    console.log("z");
//  } else {
//    console.log("equals value");
//  }
 
//  if (x < y && z < y) {
//    console.log("y greater than x and z");
//  } else if (y < x && z < x) {
//    console.log("x greater than y and z ");
//  } else {
//    console.log("z greater than x and y");
//  }
 
//  if (x > y) {
//    console.log("bada hai x");
//  } else if (x < y) {
//    console.log("bada hai y");
//  } else {
//    console.log("equal x and y");
//  }

 ////////////////////

 // let marks = [10, 9, -5, -2, 20, -7];
// let max = marks[0];
// for (let i = 0; i < marks.length; i++) { 
//     if (marks[i]> max) 
//         {
//     max = marks[i];
//     }
//     }
//     console.log(max);

//////////////////////////////////////////
// let arr = [15, 20, 13, 14, 5];
// // console.log(arr);
// // console.log(arr.toString());
// let arr2 = [50, 60, 90];
// let arr3 = [...arr,...arr2];
// console.log(arr3);
// arr.sort((a, b) => a - b).reverse();
// arr.sort((x,y) => x -y)
// console.log(arr.reverse());
// arr.reverse();
// console.log(arr);
// arr.push(6, 7, 8, 9);
// arr.unshift(-1, 0);
// arr.pop();s
// arr.shift();
// arr.splice(0,3);
// console.log(arr);
// let n = arr.length;
// for (let i = n - 1; i >= 0; i--) {
// console.log(arr[i]);
// }
// //function,
// function sub() {}
// const sum = () => {};
// 6, 7

// console.log(10 + true + false);
// alert(sum);
//////////////////////////////////////////////
// let data =
//     [
//         {
//             "id": 1,
//             "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//             "price": 109.95,
//             "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//             "category": "men's clothing",
//             "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//             "rating": {
//                 "rate": 3.9,
//                 "count": 120
//             }
//         },
//         {
//             "id": 2,
//             "title": "Mens Casual Premium Slim Fit T-Shirts ",
//             "price": 22.3,
//             "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//             "category": "men's clothing",
//             "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//             "rating": {
//                 "rate": 4.1,
//                 "count": 259
//             }
//         },
//         {
//             "id": 3,
//             "title": "Mens Cotton Jacket",
//             "price": 55.99,
//             "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//             "category": "men's clothing",
//             "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//             "rating": {
//                 "rate": 4.7,
//                 "count": 500
//             }
//         },
//         {
//             "id": 4,
//             "title": "Mens Casual Slim Fit",
//             "price": 15.99,
//             "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//             "category": "men's clothing",
//             "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//             "rating": {
//                 "rate": 2.1,
//                 "count": 430
//             }
//         },
//         {
//             "id": 5,
//             "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//             "price": 695,
//             "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//             "category": "jewelery",
//             "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//             "rating": {
//                 "rate": 4.6,
//                 "count": 400
//             }
//         },
//         {
//             "id": 6,
//             "title": "Solid Gold Petite Micropave ",
//             "price": 168,
//             "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//             "category": "jewelery",
//             "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//             "rating": {
//                 "rate": 3.9,
//                 "count": 70
//             }
//         },
//         {
//             "id": 7,
//             "title": "White Gold Plated Princess",
//             "price": 9.99,
//             "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//             "category": "jewelery",
//             "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//             "rating": {
//                 "rate": 3,
//                 "count": 400
//             }
//         },
//         {
//             "id": 8,
//             "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
//             "price": 10.99,
//             "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//             "category": "jewelery",
//             "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
//             "rating": {
//                 "rate": 1.9,
//                 "count": 100
//             }
//         },
//         {
//             "id": 9,
//             "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//             "price": 64,
//             "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//             "category": "electronics",
//             "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//             "rating": {
//                 "rate": 3.3,
//                 "count": 203
//             }
//         },
//         {
//             "id": 10,
//             "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
//             "price": 109,
//             "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
//             "category": "electronics",
//             "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
//             "rating": {
//                 "rate": 2.9,
//                 "count": 470
//             }
//         },
//         {
//             "id": 11,
//             "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//             "price": 109,
//             "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//             "category": "electronics",
//             "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
//             "rating": {
//                 "rate": 4.8,
//                 "count": 319
//             }
//         },
//         {
//             "id": 12,
//             "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
//             "price": 114,
//             "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
//             "category": "electronics",
//             "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
//             "rating": {
//                 "rate": 4.8,
//                 "count": 400
//             }
//         },
//         {
//             "id": 13,
//             "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
//             "price": 599,
//             "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
//             "category": "electronics",
//             "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
//             "rating": {
//                 "rate": 2.9,
//                 "count": 250
//             }
//         },
//         {
//             "id": 14,
//             "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//             "price": 999.99,
//             "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//             "category": "electronics",
//             "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
//             "rating": {
//                 "rate": 2.2,
//                 "count": 140
//             }
//         },
//         {
//             "id": 15,
//             "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//             "price": 56.99,
//             "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//             "category": "women's clothing",
//             "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
//             "rating": {
//                 "rate": 2.6,
//                 "count": 235
//             }
//         },
//         {
//             "id": 16,
//             "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//             "price": 29.95,
//             "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
//             "category": "women's clothing",
//             "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
//             "rating": {
//                 "rate": 2.9,
//                 "count": 340
//             }
//         },
//         {
//             "id": 17,
//             "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//             "price": 39.99,
//             "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//             "category": "women's clothing",
//             "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
//             "rating": {
//                 "rate": 3.8,
//                 "count": 679
//             }
//         },
//         {
//             "id": 18,
//             "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
//             "price": 9.85,
//             "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
//             "category": "women's clothing",
//             "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
//             "rating": {
//                 "rate": 4.7,
//                 "count": 130
//             }
//         },
//         {
//             "id": 19,
//             "title": "Opna Women's Short Sleeve Moisture",
//             "price": 7.95,
//             "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//             "category": "women's clothing",
//             "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
//             "rating": {
//                 "rate": 4.5,
//                 "count": 146
//             }
//         },
//         {
//             "id": 20,
//             "title": "DANVOUY Womens T Shirt Casual Cotton Short",
//             "price": 12.99,
//             "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//             "category": "women's clothing",
//             "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
//             "rating": {
//                 "rate": 3.6,
//                 "count": 145
//             }
//         }
//     ]


// data.map((jia)=> {
//     console.log(jia.id,"space",jia.price);
// })
// console.log("break");

// for(let i=0;i<data.length;i++){
//     console.log(data[i].price,"space",data[i].id);

// }


////////////////////////////////////////////////////////
// console.log(Math.floor(5.9)); //
// console.log(Math.round(5.5));
// console.log(Math.random());
// console.log(Math.round(Math.random() * 10000)); 
// console.log(Math.sqrt(49));
// console.log(Math.pow(8, 3));
/////////////////////////////////////////////////////
// Object 
//  let students = [
//    {
//      name: "vishal",
//      number: 453465465,
//      course: "full stack",
//      status: "running",
//    },
//    {
//      name: "vishal",
//      number: 453465465,
//      course: "full stack",
//      status: "running",
//    },
//    {
//      name: "vishal",
//      number: 453465465,
//      course: "full stack",
//      status: "running",
//    },
//  ];

// console.log(typeof students);

//  let student = {
//    name: "vishal",
//    number: 453465465,
//    course: "full stack",
//    status: "running",
//    add: {
//      state: "gujarat",
//      city: "surat",
//      houseNumber: 107,
//    },
//    skills: ["react", "node", "html", "js", "mongodb"],
//    friends: [
//      {
//        name: "ankit",
//        course: "stack",
//        number: 453454654,
//      },
//      {
//        name: "jigar",
//        course: "full stack",
//        number: 453654,
//      },
//      {
//        name: "urvesh", 
//        course: "frontend",
//        number: 345646547,
//      },
//    ],
//  };


// // //  json
//  let n = student.friends.length;
//  for (let i = 0; i < n; i++) {
//    console.log(student.friends[i].course);
//  }

//  console.log(student.skills[2]);
////////////////////////////////////////////////////
// oop 
// class Student {
//     #name;
//     #number;
//     constructor(name, number, grid, course) {
//       this.#name = name;
//       this.#number = number;
//       this.grid = grid;
//       this.course = course;
//     }
//     leave() {
//       console.log("leave", this.name);
//     }

//     printDetails() {
//       console.log(
//         `name: ${this.name}, number: ${this.number}, course:${this.course}`
//       );
//     }

//     getName() {
//       console.log(this.#name);
//     }
//     setName(name) {
//       this.#name = name;
//     }
//     setNumber(number) {
//       this.#number = number;
//     }
//     getNumber() {
//       console.log(this.#number);
//     }
//   }

//   class VipStudent extends Student {
//     constructor(name, number, grid, course, fee) {
//       super(name, number, grid, course);
//       this.fee = fee;
//     }
//   }
//   let std = new Student("ankit", 34554654, 6786, "full stack");
//   let std2 = new Student("sarvesh", 34554654, 6532, "full stack");

//   std.setName("sarvesh");
//   std.getName();

// const sum = (a, b) => {
//     console.log(a + b);
// };
// sum(20,30)
// const sum = (a, b, c) => {};

/////////////////////////////////////////////
//   oop test
//   class Cal {
//     constructor() {}
//     sum(a, b) {
//       console.log(a, b);
//       return a + b;
//     }
//     sum(a, b, c) {
//       return a + b + c;
//     }
//   }

//   class A {
//     constructor() {}

//     hello() {
//       console.log("hello  from  A");
//     }
//   }

//   class B extends A {
//     constructor() {
//       super();
//     }
//     hello() {
//       console.log("hello from B");
//     }
//   }
//   let a = new A();
//   a.hello();
//   let b = new B();
//   b.hello();
// let cal = new Cal();

// let result = cal.sum(10, 20,20);
// console.log(result);

// string 
// let course = "javascript";
//  let n = course.length;

//  console.log(course.includes("java"));

// aeiou

// let count = 0;
// for (let i = 0; i < n; i++) {
//   if (
//     course[i] == "a" ||
//     course[i] == "e" ||
//     course[i] == "i" ||
//     course[i] == "o" ||
//     course[i] == "u"
//   ) {
//   } else {
//     count++;
//   }
// }

// console.log(count, n - count);

// j v s r p
// for (let i = 0; i < n; i ++) {
//   if(i % 2==0){
//   console.log(course[i]);
//   }
// }

// console.log(course[0]);
// console.log(course[1]);
// console.log(course[2]);
// console.log(course[3]);
// console.log(course[4]);


// setInterval(() => {
//     let date = new Date();
//     console.log(
//       date.getFullYear(),
//       date.getMonth(),
//       date.getDate(),
//       date.getHours(),
//       date.getMinutes(),
//       date.getSeconds()
//     );
//   }, 1000);