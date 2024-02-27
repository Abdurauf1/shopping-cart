interface Product {
    id: number
    title: string
    price: number
    image: string
    quantity: number
}

let productCount: number = 0;
let data: Product[] = [];
let cart: Product[] = [];

const productCountEl = document.querySelector(".product-count") as HTMLSpanElement;

productCountEl.textContent = productCount.toString()

const fetchProducts = async (): Promise<void> => {
    const response = await fetch("https://fakestoreapi.com/products/");
    data = await response.json()
    displayCards()
}

const displayCards = (): void => {
    data.forEach((product: Product) => {
        const card = document.createElement("div") as HTMLDivElement;
        const cardsWrapper = document.querySelector(".cards-wrapper") as HTMLDivElement;

        card.classList.add("card")

        card.innerHTML += `
            <div class="card-description">
                <div class="product-img"></div>
                <p class="product-title">${product.title}</p>
                <p class="product-price">$${product.price}</p>
                <button class="add-to-cart-btn">Add To Cart</button>
            </div>
        `;
        
        const img = card.querySelector(".product-img") as HTMLDivElement
        img.style.backgroundImage = `url(${product.image})`

        card.querySelector(".add-to-cart-btn")?.addEventListener("click", () => addToCart(product));
        cardsWrapper.appendChild(card);
    })
}

fetchProducts()

const addToCart = (product: Product): void => {
    const existingProduct = cart.find((cartItem: Product) => cartItem.id === product.id)

    if (existingProduct) {
        existingProduct.quantity++
    } else {
        cart.push({ ...product, quantity: 1 })
        productCount++
    }

    productCountEl.textContent = productCount.toString()
}

const openCartBtn = document.querySelector(".open-cart-btn") as HTMLButtonElement;

openCartBtn.addEventListener("click", () => openCart())

const openCart = () => {
    console.log(cart);
}