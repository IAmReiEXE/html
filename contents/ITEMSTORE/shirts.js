const shirts = [
    { name: "I'm Gay Shirt", price: 20, stock: 99, img: "imgay.png" },
    { name: "Ure Gay Shirt", price: 20, stock: 99, img: "uregay.png" },
    { name: "I love you Shirt", price: 15, stock: 99, img: "ilove.png" },
    { name: "I don't love you Shirt", price: 15, stock: 99, img: "idont.png" }
];

const jeans = [
    { name: "Ripped Jeans", price: 20, stock: 99, img: "ripjeans.png" },
    { name: "Slime Jeans", price: 20, stock: 99, img: "slimej.png" },
    { name: "Jelly Jeans", price: 20, stock: 99, img: "jelly.png" },
    { name: "Boring Jeans", price: 10, stock: 99, img: "boring.png" }
];

const perfume = [
    { name: "Pink Pony Girl", price: 30, stock: 99, img: "pink.png" },
    { name: "Casual", price: 40, stock: 99, img: "casual.png" },
    { name: "Red Wine Supernova", price: 50, stock: 99, img: "red.png" },
    { name: "Good Luck Babe", price: 60, stock: 99, img: "glbabe.png" }
];

const sando = [
    { name: "White Sando S", price: 15, stock: 99, img: "sando.png" },
    { name: "White Sando M", price: 20, stock: 99, img: "sando.png" },
    { name: "White Sando L", price: 25, stock: 99, img: "sando.png" },
    { name: "White Sando XL", price: 30, stock: 99, img: "sando.png" }
];

const toys = [
    { name: "Green Slimeball", price: 10, stock: 99, img: "slimeb.png" },
    { name: "Mike's Cap Keychain", price: 10, stock: 99, img: "mikecap.png" },
    { name: "Atlas' Ball", price: 10, stock: 99, img: "atlas.png" },
    { name: "Mike's Baseball Bat", price: 10, stock: 99, img: "mikebb.png" }
];

function displayShirts() {
    const shirtsList = document.getElementById("shirts-list");
    shirtsList.innerHTML = "";

    shirts.forEach((shirt, index) => {
        const shirtDiv = document.createElement("div");
        shirtDiv.classList.add("shirt");

        shirtDiv.innerHTML = `
            <img src="images/${shirt.img}" alt="${shirt.name}" class="item-img">
            <h3>${shirt.name}</h3>
            <p>Price: $${shirt.price}</p>
            <p>Stock: ${shirt.stock}</p>
            <label for="quantity-${index}">Quantity:</label>
            <input type="number" id="quantity-${index}" min="1" max="${shirt.stock}" value="1">
            <button onclick="addToCart('shirt', ${index})">Add to Cart</button>
        `;

        shirtsList.appendChild(shirtDiv);
    });
}

function displayJeans() {
    const jeansList = document.getElementById("jeans-list");
    jeansList.innerHTML = "";

    jeans.forEach((jean, index) => {
        const jeanDiv = document.createElement("div");
        jeanDiv.classList.add("jean");

        jeanDiv.innerHTML = `
            <img src="images/${jean.img}" alt="${jean.name}" class="item-img">
            <h3>${jean.name}</h3>
            <p>Price: $${jean.price}</p>
            <p>Stock: ${jean.stock}</p>
            <label for="quantity-${index}">Quantity:</label>
            <input type="number" id="quantity-${index}" min="1" max="${jean.stock}" value="1">
            <button onclick="addToCart('jean', ${index})">Add to Cart</button>
        `;

        jeansList.appendChild(jeanDiv);
    });
}

function displayPerfume() {
    const perfumeList = document.getElementById("perfume-list");
    perfumeList.innerHTML = "";

    perfume.forEach((perf, index) => {
        const perfDiv = document.createElement("div");
        perfDiv.classList.add("perfume");

        perfDiv.innerHTML = `
            <img src="images/${perf.img}" alt="${perf.name}" class="item-img">
            <h3>${perf.name}</h3>
            <p>Price: $${perf.price}</p>
            <p>Stock: ${perf.stock}</p>
            <label for="quantity-${index}">Quantity:</label>
            <input type="number" id="quantity-${index}" min="1" max="${perf.stock}" value="1">
            <button onclick="addToCart('perfume', ${index})">Add to Cart</button>
        `;

        perfumeList.appendChild(perfDiv);
    });
}

function displaySando() {
    const sandoList = document.getElementById("sando-list");
    sandoList.innerHTML = "";

    sando.forEach((san, index) => {
        const sandoDiv = document.createElement("div");
        sandoDiv.classList.add("sando");

        sandoDiv.innerHTML = `
            <img src="images/${san.img}" alt="${san.name}" class="item-img">
            <h3>${san.name}</h3>
            <p>Price: $${san.price}</p>
            <p>Stock: ${san.stock}</p>
            <label for="quantity-${index}">Quantity:</label>
            <input type="number" id="quantity-${index}" min="1" max="${san.stock}" value="1">
            <button onclick="addToCart('sando', ${index})">Add to Cart</button>
        `;

        sandoList.appendChild(sandoDiv);
    });
}

function displayToys() {
    const toysList = document.getElementById("toys-list");
    toysList.innerHTML = "";

    toys.forEach((toy, index) => {
        const toyDiv = document.createElement("div");
        toyDiv.classList.add("toy");

        toyDiv.innerHTML = `
            <img src="images/${toy.img}" alt="${toy.name}" class="item-img">
            <h3>${toy.name}</h3>
            <p>Price: $${toy.price}</p>
            <p>Stock: ${toy.stock}</p>
            <label for="quantity-${index}">Quantity:</label>
            <input type="number" id="quantity-${index}" min="1" max="${toy.stock}" value="1">
            <button onclick="addToCart('toy', ${index})">Add to Cart</button>
        `;

        toysList.appendChild(toyDiv);
    });
}

function addToCart(category, index) {
    const quantityInput = document.getElementById(`quantity-${index}`);
    const quantity = parseInt(quantityInput.value);

    let selectedItem;

    switch (category) {
        case 'shirt':
            selectedItem = shirts[index];
            break;
        case 'jean':
            selectedItem = jeans[index];
            break;
        case 'perfume':
            selectedItem = perfume[index];
            break;
        case 'sando':
            selectedItem = sando[index];
            break;
        case 'toy':
            selectedItem = toys[index];
            break;
        default:
            break;
    }

    if (selectedItem.stock >= quantity) {
        selectedItem.stock -= quantity;

        const existingItemIndex = cartItems.findIndex(item => item.name === selectedItem.name && item.category === category);

        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity += quantity;
        } else {
            cartItems.push({ ...selectedItem, quantity, category });
        }
        updateCart();

        switch (category) {
            case 'shirt':
                displayShirts();
                break;
            case 'jean':
                displayJeans();
                break;
            case 'perfume':
                displayPerfume();
                break;
            case 'sando':
                displaySando();
                break;
            case 'toy':
                displayToys();
                break;
            default:
                break;
        }
    } else {
        alert("Not enough stock!");
    }
}

function updateCart() {
    const cart = document.getElementById("cart");
    const totalPriceElement = document.getElementById("total-price");
    cart.innerHTML = "";

    let totalPrice = 0;

    cartItems.forEach(item => {
        const cartItem = document.createElement("div");
        const itemTotalPrice = item.price * item.quantity;
        cartItem.innerText = `${item.name} x${item.quantity} - $${itemTotalPrice}`;
        cart.appendChild(cartItem);
        totalPrice += itemTotalPrice;
    });

    totalPriceElement.textContent = totalPrice;
}

function purchase() {
    let totalPrice = 0;
    cartItems.forEach(item => {
        totalPrice += item.price * item.quantity;
    });

    const seniorDiscount = document.getElementById("senior-discount");
    const pwdDiscount = document.getElementById("pwd-discount");
    const studentDiscount = document.getElementById("student-discount");

    let discount = 0;
    if (seniorDiscount.checked) {
        discount = 0.2;
    } else if (pwdDiscount.checked) {
        discount = 0.3;
    } else if (studentDiscount.checked) {
        discount = 0.1;
    }
    totalPrice -= totalPrice * discount;
    const totalPriceElement = document.getElementById("total-price");
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

    cartItems = [];
    updateCart();
    displayShirts();
    displayJeans();
    displayPerfume();
    displaySando();
    displayToys();

displayShirts();
displayJeans();
displayPerfume();
displaySando();
displayToys();
