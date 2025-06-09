
let students = [
    {
        id: 7,
        title: "White Gold Plated Princess",
        price: 9.99,
        description:
            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        rating: {
            rate: 3,
            count: 400,
        },
    }
  ]
const errorDetails = (id, msg) => {
};
const handleDelete = (a) => {
    students.splice(a, 1);
    uiMaker();
};
const uiMaker = () => {
    document.getElementById("studentList").innerHTML = "";
    students.map((ele, i) => {
        let img = document.createElement("img");
        img.src = ele.img;
        let td1 = document.createElement("td");
        td1.append(img);
        let td2 = document.createElement("td");
        td2.innerHTML = ele.name;
        let td3 = document.createElement("td");
        td3.innerHTML = ele.email;
        let td4 = document.createElement("td");
        td4.innerHTML = ele.number;
        let td5 = document.createElement("td");
        td5.innerHTML = ele.course;
        let td6 = document.createElement("td");
        td6.innerHTML = ele.fee;
        let btn = document.createElement("button");
        btn.addEventListener("click", () => handleDelete(i));
        btn.innerHTML = "delete";
        let td7 = document.createElement("td");
        td7.append(btn);
        let tr = document.createElement("tr");
        tr.append(td1, td2, td3, td4, td5, td6, td7);
        document.getElementById("studentList").append(tr);
    });
};
const handleSubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;
    let fee = document.getElementById("fee").value;
    let img = document.getElementById("img").value;
    let number = document.getElementById("number").value;
    if (
        name.length < 2
        // ||
        // email.length < 2 ||
        // course.length < 2 ||
        // fee.length < 3 ||
        // number.length < 10 ||
        // number.length > 10 ||
        // img.length == 0
    ) {
        // alert("Please enter valid details");
        // let error = document.createElement("p");
        // error.innerHTML = "Please enter valid name";
        // document.getElementById("name-box").append(error);
        errorDetails("name-box", "Please enter valid name");
        return;
    }
    if (email.length < 1) {
        // let error = document.createElement("p");
        // error.innerHTML = "Please enter valid email address";
        // document.getElementById("email-box").append(error);
        errorDetails("email-box", "Please enter valid email");
        return;
    }
    let student = {
        name: name,
        email: email,
        course: course,
        fee: fee,
        img: img,
        number: number,
    };
    students.push(student);
    uiMaker();
};

document.getElementById("student").addEventListener("submit", handleSubmit);
