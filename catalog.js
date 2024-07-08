function addToCart(productId) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let found = cartItems.find(item => item.id === productId);
    if (found) {
        found.quantity++;
    } 
    else {
        cartItems.push({ id: productId, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert('Product added to cart!');
}
function checkout() {
    alert('Checkout complete!');
    // Clear cart after checkout (optional)
    localStorage.removeItem('cart');
   
}
