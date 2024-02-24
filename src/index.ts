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

const productCountEl = document.querySelector(".product-count") as HTMLSpanElement
productCountEl.textContent = productCount.toString()

const fetchProducts = async (): Promise<void> => {
    const response = await fetch("https://fakestoreapi.com/products/");
    data = await response.json()
    displayCards()
}

const displayCards = (): void => {
    const cardsWrapper = document.querySelector(".cards-wrapper") as HTMLDivElement

    data.forEach((product: Product) => {
        cardsWrapper.innerHTML += `
            <div class="card">
                <img src="${product.image}" alt="product-image" />
                <p>${product.title}</p>
                <p>$${product.price}</p>
                <button onClick="addToCart()">Add To Cart</button>
            </div>
            `;
    })
}

fetchProducts()

const addToCart = (): void => {
    console.log(cart);
}

