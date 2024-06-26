let stocks = [
    { category: "shirts", stock: 99 },
    { category: "jeans", stock: 99 },
    { category: "perfume", stock: 99 },
    { category: "sando", stock: 99 },
    { category: "toys", stock: 99 }
];

function displayStocks() {
    const stocksList = document.getElementById("stocks-list");
    stocksList.innerHTML = "";

    stocks.forEach(stock => {
        const stockItem = document.createElement("div");
        stockItem.classList.add("stock-item");
        stockItem.innerHTML = `
            <p>${capitalizeFirstLetter(stock.category)}: ${stock.stock}</p>
        `;
        stocksList.appendChild(stockItem);
    });
}

function addStock() {
    const stockNameInput = document.getElementById("stock-name");
    const stockQuantityInput = document.getElementById("stock-quantity");
    const category = stockNameInput.value;
    const quantity = parseInt(stockQuantityInput.value);
    const itemIndex = stocks.findIndex(stock => stock.category === category);
    if (itemIndex !== -1) {
        stocks[itemIndex].stock += quantity;
        displayStocks();
        alert("Stock updated!");
    } else {
        alert("Not Found!");
    }
    stockQuantityInput.value = "";
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

window.onload = function() {
    displayStocks();
};
