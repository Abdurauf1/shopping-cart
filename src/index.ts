import { Product } from "./types.js";
import { products } from "./data.js";

const cartItemCountElem = document.querySelector(".cart-item-count") as HTMLSpanElement;
const cart: Product[] = [];

let total: number = 0;

cartItemCountElem.textContent = total.toString();

const addToCart = (product: Product): void => {
    const existProd = cart.filter((prod: Product) => prod.name === product.name)
    if (existProd) {
        product.quantity++
    } else {
        cart.push(product)
        total++
        cartItemCountElem.textContent = total.toString()
    }
}

const openCart = (): void => {
    console.log(cart);
}

const displayData = (data: Product[]): void => {
    const content = document.querySelector(".content") as HTMLDivElement;
    content.innerHTML = `
        ${data.map((product: Product) => {
        const { image, name, price } = product;
        return (
            `
            <div class="w-25 border text-center pb-3">
                <div class="product-img">
                    <img src="${image}" class="w-100" />
                </div>
                <h1 class="fs-2">${name}</h1>
                <p class="fs-5 text-secondary">$${price}</p>
                <button class="py-2 btn btn-success w-75" onClick={addToCart(${JSON.stringify(product)})}>Add to cart</button>
            </div>
        `
        )
    })}
    `;
}

displayData(products)
