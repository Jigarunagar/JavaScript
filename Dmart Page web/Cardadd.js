const loadCart=()=> {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-container");

    let table = `<table>
            <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
            </tr>`;

    cart.forEach((product, index) => {
        table += `<tr>
            <td><img src="${product.image}" alt="Product"></td> 
            <td>${product.title}</td>
            <td>₹ ${product.price}</td>
            <td>
                <button class="qty-btn" onclick="updateQty(${index}, -1)">-</button>
                ${product.qty}
                <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
            </td>
            <td>₹ ${product.price * product.qty}</td>
            <td><button class="remove-btn" onclick="removeItem(${index})">Remove</button></td>
        </tr>`;
    });

    table += `</table>`;
    cartContainer.innerHTML = table;
}
/////////////////////////////////////////

const updateQty=(index, change) =>{
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart[index].qty + change > 0) {
        cart[index].qty += change;
    } else {
        cart.splice(index, 0);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}
//////////////////////////////////////
const removeItem=(index) =>{
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

loadCart();
///////////////////////////////////
