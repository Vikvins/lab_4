let cart = [];

const savedCart = localStorage.getItem("cart");

if (savedCart) {
    cart = JSON.parse(savedCart);
    renderCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productName) {
    cart.push(productName);
    saveCart();
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

function clearCart() {
    cart = [];
    saveCart();
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = item + ' <button onclick="removeFromCart(' + index + ')">Удалить</button>';
        cartList.appendChild(li);
    });
}
