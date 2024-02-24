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
let data = [];
let cart = [];
const fetchProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://fakestoreapi.com/products/");
    data = yield response.json();
    displayCards();
    console.log(data);
});
const displayCards = () => {
    const cardsWrapper = document.querySelector(".cards-wrapper");
    data.forEach((product) => {
        cardsWrapper.innerHTML += `
            <div class="card">
                <img src="${product.image}" alt="product-image" />
                <p>${product.title}</p>
                <p>$${product.price}</p>
                <button onClick="addToCart()">Add To Cart</button>
            </div>
            `;
    });
};
fetchProducts();
const addToCart = () => {
    console.log(cart);
};
