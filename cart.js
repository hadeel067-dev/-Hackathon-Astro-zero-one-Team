let cart = JSON.parse(localStorage.getItem("cart")) || [];

const list = document.querySelector(".cart-list");
const total = document.querySelector(".total");

function displayCart() {

    list.innerHTML = "";

    let totalPrice = 0;

    cart.forEach((product, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <img src="${product.Image}" width="80">

            <span>${product.name}</span>

            <span>$${product.price}</span>

            <span>الكمية: ${product.quantity}</span>

            <button class="removefromcard">
                حذف
            </button>
        `;

        list.appendChild(li);

        totalPrice += product.price * product.quantity;

        li.querySelector(".removefromcard").onclick = function () {

            cart.splice(index, 1);

            localStorage.setItem("cart", JSON.stringify(cart));

            displayCart();
        };

    });

    total.innerText = `$${totalPrice}`;
}

displayCart();let cart = JSON.parse(localStorage.getItem("cart")) || [];

const list = document.querySelector(".cart-list");
const total = document.querySelector(".total");

function displayCart() {

    list.innerHTML = "";

    let totalPrice = 0;

    cart.forEach((product, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <img src="${product.Image}" width="80">

            <span>${product.name}</span>

            <span>$${product.price}</span>

            <span>الكمية: ${product.quantity}</span>

            <button class="removefromcard">
                حذف
            </button>
        `;

        list.appendChild(li);

        totalPrice += product.price * product.quantity;

        li.querySelector(".removefromcard").onclick = function () {

            cart.splice(index, 1);

            localStorage.setItem("cart", JSON.stringify(cart));

            displayCart();
        };

    });

    total.innerText = `$${totalPrice}`;
}

displayCart();let cart = JSON.parse(localStorage.getItem("cart")) || [];

const list = document.querySelector(".cart-list");
const total = document.querySelector(".total");

function displayCart() {

    list.innerHTML = "";

    let totalPrice = 0;

    cart.forEach((product, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <img src="${product.Image}" width="80">

            <span>${product.name}</span>

            <span>$${product.price}</span>

            <span>الكمية: ${product.quantity}</span>

            <button class="removefromcard">
                حذف
            </button>
        `;

        list.appendChild(li);

        totalPrice += product.price * product.quantity;

        li.querySelector(".removefromcard").onclick = function () {

            cart.splice(index, 1);

            localStorage.setItem("cart", JSON.stringify(cart));

            displayCart();
        };

    });

    total.innerText = `$${totalPrice}`;
}

displayCart();
