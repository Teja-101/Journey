document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelectorAll(".cart-item");

    cartItems.forEach(item => {
        const addItemButton = item.querySelector(".add-item");
        const removeItemButton = item.querySelector(".remove-item");
        const itemQuantity = item.querySelector(".item-quantity");

        addItemButton.addEventListener("click", () => {
            itemQuantity.textContent = parseInt(itemQuantity.textContent) + 1;
        });

        removeItemButton.addEventListener("click", () => {
            let quantity = parseInt(itemQuantity.textContent);
            if (quantity > 0) {
                itemQuantity.textContent = quantity - 1;
            }
        });
    });

    const buyNowButton = document.querySelector(".buy-now");
    buyNowButton.addEventListener("click", () => {
        alert("Thank you for your purchase!");
    });
});
