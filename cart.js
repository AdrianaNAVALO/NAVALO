// Cart functionality
let cart = JSON.parse(localStorage.getItem('navalo_cart')) || [];

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('navalo_cart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count in navbar
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElements.forEach(el => {
        el.textContent = totalItems;
    });
}

// Add item to cart
function addToCart(productId) {
    const product = window.getProductById(productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            diameter: product.diameter,
            price: product.price,
            image: product.image,
            icon: product.icon,
            quantity: 1
        });
    }

    saveCart();
    showNotification(`${product.name} ${t('addedToCart')}`);
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    saveCart();
    renderCart();
}

// Calculate totals
function getCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 9.90;
    const total = subtotal + shipping;

    return { subtotal, shipping, total };
}

// Render cart page
function renderCart() {
    const cartContainer = document.getElementById('cart-container');
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="cart-empty">
                <p>${t('emptyCart')}</p>
                <a href="products.html" class="btn btn-primary">${t('viewProducts')}</a>
            </div>
        `;
        return;
    }

    const { subtotal, shipping, total } = getCartTotals();
    const freeShippingText = subtotal > 100 ? ` (${t('freeShipping')})` : '';

    cartContainer.innerHTML = `
        <div class="cart-items">
            ${cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">${item.image ? `<img src="${item.image}" alt="${item.name}">` : (item.icon || '📦')}</div>
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <p class="diameter">Ø ${item.diameter}</p>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
                </div>
            `).join('')}
        </div>
        <div class="cart-summary">
            <h3>${t('orderSummary')}</h3>
            <div class="summary-row">
                <span>${t('subtotal')}</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            <div class="summary-row">
                <span>${t('shipping')}${freeShippingText}</span>
                <span>${formatPrice(shipping)}</span>
            </div>
            <div class="summary-row total">
                <span>${t('total')}</span>
                <span>${formatPrice(total)}</span>
            </div>
            <a href="checkout.html" class="btn btn-primary">${t('checkout')}</a>
        </div>
    `;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #2a9d8f;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

// Export functions
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.renderCart = renderCart;
window.getCartTotals = getCartTotals;
window.cart = cart;
