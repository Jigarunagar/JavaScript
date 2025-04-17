////////// getValue ///
const getValue = (id) => {
  return document.getElementById(id).value;
};
//////////
///////// setValue ////
const setValue = (id, value) => {
  console.log(id, value);

  document.getElementById(id).value = value;
};
///////////////
let id = -1;
// post method /////////////////
const create = async (data) => {
  let req = await fetch("http://localhost:3000/Data", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let res = await req.json();
  getdata(res)
};
/////////////////////////


//////////// update ///////////
const update = async (data) => {
  await fetch(`http://localhost:3000/Data/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
//////////// addToForm //////
const addToForm = (data) => {
  id = data.id;
  delete data.id;
  data.type = "update"

  setValue("title", data.title);
  setValue("price", data.price);
  setValue("img", data.img);
  setValue("type", "update");
};
//////////////////////// 

////////// get method /////
const getdata = async () => {
  let req = await fetch("http://localhost:3000/Data");
  let res = await req.json();
  uimaker(res);
};
////////////////
//////////// uimaker ///////
const uimaker = (data) => {
  document.getElementById("profliedata").innerHTML = "";
  data.map((ele) => {
    let title = document.createElement("h3");
    title.innerText = ele.title;

    let price = document.createElement("p");
    price.innerText = `₹${ele.price}`;

    let img = document.createElement("img");
    img.src = ele.img;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.addEventListener("click", () => deletedata(ele.id));

    let updateBtn = document.createElement("button");
    updateBtn.innerHTML = "update";
    updateBtn.addEventListener("click", () => addToForm(ele));

    let card = document.createElement("div");
    card.append(img, title, price, delBtn, updateBtn);
    profliedata.append(card);
  })
}
////////////////////////

//////// handleSubmit ////
const handleSubmit = (e) => {
  e.preventDefault();
  let proflies = {
    title: getValue("title"),
    price: getValue("price"),
    img: getValue("img"),
  };
  if (id == -1) {
    create(proflies);
  } else {
    update(proflies);
  }
};

document.getElementById("proflie").addEventListener("submit", handleSubmit);

getdata();
///////////////

//////////// DELETE ///////////
const deletedata = async (id) => {
  await fetch(`http://localhost:3000/Data/${id}`, {
    method: "DELETE",
  });
  getdata();
};
////////////////