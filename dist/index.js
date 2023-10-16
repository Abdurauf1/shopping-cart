"use strict";
const data = "../data.json";
const cartItemCountElem = document.querySelector(".cart-item-count");
let cartItemCount = 0;
cartItemCountElem.textContent = String(cartItemCount);
const getData = () => {
    fetch(data)
        .then((res) => {
        if (!res.ok) {
            console.log("Network response was not ok");
        }
        return res.json();
    })
        .then((data) => {
        displayData(data.products);
    })
        .catch((err) => {
        console.log("Error: ", err);
    });
};
const displayData = (data) => {
    const content = document.querySelector(".content");
    content.innerHTML = `
        ${data.map((product) => (`
            <div class="product border text-center">
                <img src="${product.img}" class="w-100" />
                <h1>${product.name}</h1>
                <p>${product.description}</p>
                <button class="btn btn-primary">Add to cart</button>
            </div>
        `))}
    `;
};
getData();
const addToCart = () => {
};
