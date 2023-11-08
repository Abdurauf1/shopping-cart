"use strict";
const products = [
    {
        name: "Airpods",
        price: 69,
        image: "../images/airpods.png",
        quantity: 0
    },
    {
        name: "Earbuds",
        price: 35,
        image: "../images/earbuds.png",
        quantity: 0
    },
    {
        name: "iPhone Case",
        price: 49,
        image: "../images/iphone_case.png",
        quantity: 0
    },
    {
        name: "iPhone 15",
        price: 899,
        image: "../images/iphone.png",
        quantity: 0
    },
    {
        name: "Poco",
        price: 129,
        image: "../images/poco.png",
        quantity: 0
    },
    {
        name: "Redmi",
        price: 280,
        image: "../images/redmi.png",
        quantity: 0
    },
    {
        name: "Samsung",
        price: 75,
        image: "../images/samsung.png",
        quantity: 0
    },
    {
        name: "USB",
        price: 25,
        image: "../images/usb.png",
        quantity: 0
    },
];
const cartItemCountElem = document.querySelector(".cart-item-count");
const cart = [];
let total = 0;
cartItemCountElem.textContent = total.toString();
const addToCart = (product) => {
    const existProd = cart.filter((prod) => prod.name === product.name);
    if (existProd) {
        product.quantity++;
    }
    else {
        cart.push(product);
        total++;
        cartItemCountElem.textContent = total.toString();
    }
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
            <div class="w-25 border text-center pb-3">
                <div class="d-flex align-items-center product-img">
                    <img src="${image}" class="w-100" />
                </div>
                <h1 class="fs-2">${name}</h1>
                <p class="fs-5 text-secondary">$${price}</p>
                <button class="rounded-0 py-2 btn btn-success w-75" onClick="${addToCart(product)}">Add to cart</button>
            </div>
        `);
    }).join("")}
    `;
};
displayData(products);
