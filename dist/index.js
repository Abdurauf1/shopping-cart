"use strict";
const products = [
    {
        name: "Airpods",
        price: 69,
        image: "../assets/images/airpods.png",
        quantity: 0
    },
    {
        name: "Earbuds",
        price: 35,
        image: "../assets/images/earbuds.png",
        quantity: 0
    },
    {
        name: "iPhone Case",
        price: 49,
        image: "../assets/images/iphone_case.png",
        quantity: 0
    },
    {
        name: "iPhone 15",
        price: 899,
        image: "../assets/images/iphone.png",
        quantity: 0
    },
    {
        name: "Poco",
        price: 129,
        image: "../assets/images/poco.png",
        quantity: 0
    },
    {
        name: "Redmi",
        price: 280,
        image: "../assets/images/redmi.png",
        quantity: 0
    },
    {
        name: "Samsung",
        price: 75,
        image: "../assets/images/samsung.png",
        quantity: 0
    },
    {
        name: "USB",
        price: 25,
        image: "../assets/images/usb.png",
        quantity: 0
    },
];
const cartItemCountElem = document.querySelector(".cart-item-count");
const cart = [];
let total = 0;
cartItemCountElem.textContent = total.toString();
const addToCart = (product) => {
    const addedProd = cart.find((p) => p.name === product.name);
    if (addedProd) {
        addedProd.quantity++;
    }
    else {
        cart.push(product);
        product.quantity++;
        total++;
    }
    cartItemCountElem.textContent = total.toString();
};
const openCart = () => {
    console.log(cart);
};
const displayData = (data) => {
    const content = document.querySelector(".content");
    content.innerHTML = `
        ${data.map((product) => {
        const { image, name, price } = product;
        return (`
                <div class="overflow-hidden card d-flex flex-column align-items-center justify-content-between col-md-3 border text-center pb-3">
                    <div class="overflow-hidden d-flex align-items-center justify-content-center">
                        <img src="${image}" class="w-75" />
                    </div>
                    <div class="w-100">
                        <h1 class="fs-2">${name}</h1>
                        <p class="fs-5 text-secondary">$${price}</p>
                        <button class="rounded-0 py-2 btn btn-success w-100" onclick="addToCart(${JSON.stringify(product).replace(/"/g, "&quot;")})">Add to cart</button>
                    </div>
                </div>
            `);
    }).join("")}
    `;
};
displayData(products);
