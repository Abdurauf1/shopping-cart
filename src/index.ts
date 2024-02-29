interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
};

const productCountEl = document.querySelector(".product-count") as HTMLSpanElement;
const openCartBtn = document.querySelector(".open-cart-btn") as HTMLButtonElement;
const closeCartBtn = document.querySelector(".bi-x") as HTMLElement;
const cartModalWrapper = document.querySelector(".cart-modal-wrapper") as HTMLDivElement;
const modalBox = document.querySelector(".modal-box") as HTMLDivElement;

let productCount: number = 0;
let data: Product[] = [];
let cart: Product[] = [];


productCountEl.textContent = productCount.toString();

const fetchProducts = async (): Promise<void> => {
    const response = await fetch("https://fakestoreapi.com/products/");
    data = await response.json();
    displayCards();
}

const displayCards = (): void => {
    data.forEach((product: Product) => {
        const card = document.createElement("div") as HTMLDivElement;
        const cardsWrapper = document.querySelector(".cards-wrapper") as HTMLDivElement;

        card.classList.add("card");

        card.innerHTML += `
            <div class="product-img">
                <img src="${product.image}" />
            </div>
            <div class="card-description">
                <p class="product-title">${product.title}</p>
                <p class="product-price">$${product.price}</p>
                <button class="add-to-cart-btn">Add To Cart</button>
            </div>
        `;

        card.querySelector(".add-to-cart-btn")?.addEventListener("click", () => addToCart(product));
        cardsWrapper.appendChild(card);
    })
}

fetchProducts();

const addToCart = (product: Product): void => {
    const existingProduct = cart.find((cartItem: Product) => cartItem.id === product.id);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
        productCount++;
    }

    productCountEl.textContent = productCount.toString();
}

const openCart = () => {
    cartModalWrapper.classList.remove("d-none");
    displayCartItems();
}

const closeCart = () => {
    cartModalWrapper.classList.add("d-none");
}

openCartBtn.addEventListener("click", () => openCart());
closeCartBtn.addEventListener("click", () => closeCart());

const displayCartItems = (): void => {
    cart.forEach((cartItem: Product) => {
        modalBox.innerHTML += `
            <div class="cart-item">
                <img src="${cartItem.image}" alt="product-img" />
                <p>hello</p>
            </div>
        `;
    })
}

displayCartItems()