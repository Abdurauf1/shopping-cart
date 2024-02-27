"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let productCount = 0;
let data = [];
let cart = [];
const productCountEl = document.querySelector(".product-count");
productCountEl.textContent = productCount.toString();
const fetchProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://fakestoreapi.com/products/");
    data = yield response.json();
    displayCards();
});
const displayCards = () => {
    data.forEach((product) => {
        var _a;
        const card = document.createElement("div");
        const cardsWrapper = document.querySelector(".cards-wrapper");
        card.classList.add("card");
        card.innerHTML += `
            <img src="${product.image}" class="product-img" />
            <div class="card-description">
                <p class="product-title">${product.title}</p>
                <p class="product-price">$${product.price}</p>
                <button class="add-to-cart-btn">Add To Cart</button>
            </div>
        `;
        (_a = card.querySelector(".add-to-cart-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => addToCart(product));
        cardsWrapper.appendChild(card);
    });
};
fetchProducts();
const addToCart = (product) => {
    const existingProduct = cart.find((cartItem) => cartItem.id === product.id);
    if (existingProduct) {
        existingProduct.quantity++;
    }
    else {
        cart.push(Object.assign(Object.assign({}, product), { quantity: 1 }));
        productCount++;
    }
    productCountEl.textContent = productCount.toString();
};
const openCartBtn = document.querySelector(".open-cart-btn");
openCartBtn.addEventListener("click", () => openCart());
const openCart = () => {
    console.log(cart);
};
