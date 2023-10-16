const data: string = "../data.json";
const cartItemCountElem = document.querySelector(".cart-item-count") as HTMLSpanElement;

let cartItemCount = 0;

cartItemCountElem.textContent = String(cartItemCount);

const getData = (): void => {
    fetch(data)
        .then((res: Response) => {
            if (!res.ok) {
                console.log("Network response was not ok");
            }
            return res.json();
        })
        .then((data) => {
            displayData(data.products);
        })
        .catch((err: Error) => {
            console.log("Error: ", err);
        })
}

const displayData = (data: any): void => {
    const content = document.querySelector(".content") as HTMLDivElement;
    content.innerHTML = `
        ${data.map((product: any) => (
        `
            <div class="product border text-center">
                <img src="${product.img}" class="w-100" />
                <h1>${product.name}</h1>
                <p>${product.description}</p>
                <button class="btn btn-primary">Add to cart</button>
            </div>
        `
    ))}
    `;
}

getData();

const addToCart = (): void => {

}