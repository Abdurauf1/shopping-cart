let data: any = []
let cart: any = []

const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    data = await response.json()
    displayCards()
    console.log(data);
}

const displayCards = (): void => {
    const cardsWrapper = document.querySelector(".cards-wrapper") as HTMLElement

    data.forEach((product: any) => {
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
