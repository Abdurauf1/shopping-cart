const products: Product[] = [
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
]

interface Product {
    name: string,
    price: number,
    image: string,
    quantity: number,
}

const cartItemCountElem = document.querySelector(".cart-item-count") as HTMLSpanElement;
const cart: Product[] = [];

let total: number = 0;

cartItemCountElem.textContent = total.toString();

const addToCart = (product: Product): void => {
    const addedProd = cart.find((p: Product) => p.name === product.name)

    if (addedProd) {
        addedProd.quantity++;
    } else {
        cart.push(product);
        product.quantity++;
        total++;
    }
    cartItemCountElem.textContent = total.toString();
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
                <div class="card col-xs-12 col-sm-6 col-md-4 overflow-hidden d-flex flex-column align-items-center justify-content-between border text-center pb-3">
                    <div class="overflow-hidden d-flex align-items-center justify-content-center">
                        <img src="${image}" class="w-75" />
                    </div>
                    <div class="w-100">
                        <h1 class="fs-2">${name}</h1>
                        <p class="fs-5 text-secondary">$${price}</p>
                        <button class="rounded-0 py-2 btn btn-success w-100" onclick="addToCart(${JSON.stringify(product).replace(/"/g, "&quot;")})">Add to cart</button>
                    </div>
                </div>
            `
        )
    }).join("")}
    `;
}

displayData(products)
