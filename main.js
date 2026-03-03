// Main JavaScript file

document.addEventListener('DOMContentLoaded', () => {
    // Initialize translations
    initTranslations();

    // Initialize products page if on products.html
    if (document.getElementById('products-grid')) {
        initProductsPage();
    }

    // Initialize cart page if on cart.html
    if (document.getElementById('cart-container')) {
        renderCart();
    }

    // Initialize checkout page if on checkout.html
    if (document.getElementById('checkout-form')) {
        initCheckout();
    }

    // Close language menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.lang-selector')) {
            const menu = document.getElementById('lang-menu');
            if (menu) menu.classList.remove('show');
        }
    });
});

// Initialize translations on page load
function initTranslations() {
    // Update current flag
    const currentFlag = document.getElementById('current-flag');
    if (currentFlag && window.config) {
        const lang = getCurrentLang();
        currentFlag.textContent = window.config[lang].flag;
    }

    // Translate all elements with data-t attribute
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        const translated = t(key);
        if (translated && translated !== key) {
            el.textContent = translated;
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = getCurrentLang();
}

// Toggle language menu
function toggleLangMenu() {
    const menu = document.getElementById('lang-menu');
    if (menu) {
        menu.classList.toggle('show');
    }
}

window.toggleLangMenu = toggleLangMenu;

// Checkout initialization
function initCheckout() {
    const form = document.getElementById('checkout-form');
    const orderItemsContainer = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    // Render order summary
    if (orderItemsContainer && window.cart) {
        const { subtotal, shipping, total } = window.getCartTotals();

        // Get VAT rate from selected country or default
        const countrySelect = document.getElementById('country');
        const countryCode = countrySelect ? countrySelect.value : 'FR';
        const vatRate = window.getVatRate ? window.getVatRate(countryCode) : 20;

        const vatAmount = (subtotal * vatRate) / (100 + vatRate); // VAT included in price
        const subtotalExclVat = subtotal - vatAmount;

        orderItemsContainer.innerHTML = window.cart.map(item => `
            <div class="order-item">
                <span class="order-item-name">${item.name} (${item.diameter})</span>
                <span class="order-item-qty">x${item.quantity}</span>
                <span>${formatPrice(item.price * item.quantity)}</span>
            </div>
        `).join('');

        // Update subtotal (excl VAT)
        const orderSubtotal = document.getElementById('order-subtotal');
        if (orderSubtotal) {
            orderSubtotal.textContent = formatPrice(subtotalExclVat);
        }

        // Update VAT
        const orderVat = document.getElementById('order-vat');
        const vatLabel = document.getElementById('vat-label');
        if (orderVat) {
            orderVat.textContent = formatPrice(vatAmount);
        }
        if (vatLabel) {
            vatLabel.textContent = `${t('vat')} (${vatRate}%)`;
        }

        // Update shipping
        const orderShipping = document.getElementById('order-shipping');
        if (orderShipping) {
            orderShipping.textContent = formatPrice(shipping);
        }

        // Update total
        if (orderTotalElement) {
            orderTotalElement.textContent = formatPrice(total);
        }
    }

    // Handle form submission
    if (form) {
        form.addEventListener('submit', handleCheckoutSubmit);
    }
}

// Handle checkout form submission
async function handleCheckoutSubmit(e) {
    e.preventDefault();

    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Traitement en cours...';
    submitBtn.disabled = true;

    // Collect form data
    const formData = new FormData(e.target);
    const orderData = {
        // Customer info
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),

        // Customer type
        customerType: formData.get('customerType'),
        companyName: formData.get('companyName'),
        ico: formData.get('ico'),
        vatNumber: formData.get('vatNumber'),

        // Delivery address
        address: formData.get('address'),
        city: formData.get('city'),
        postalCode: formData.get('postalCode'),
        country: formData.get('country'),

        // Billing address
        differentBilling: formData.get('differentBilling') === 'on',
        billingAddress: formData.get('billingAddress'),
        billingCity: formData.get('billingCity'),
        billingPostalCode: formData.get('billingPostalCode'),
        billingCountry: formData.get('billingCountry'),

        // Order details
        items: window.cart,
        totals: window.getCartTotals()
    };

    try {
        // Simulate payment processing
        await simulatePayment(orderData);

        // Generate order reference
        const orderRef = window.generateOrderReference ? window.generateOrderReference() : 'NAV-' + Date.now();

        // Send confirmation emails
        if (window.sendOrderEmails) {
            const emailResult = await window.sendOrderEmails(orderData);
            if (emailResult.orderRef) {
                localStorage.setItem('navalo_last_order_ref', emailResult.orderRef);
            } else {
                localStorage.setItem('navalo_last_order_ref', orderRef);
            }
        } else {
            localStorage.setItem('navalo_last_order_ref', orderRef);
        }

        // Clear cart
        localStorage.removeItem('navalo_cart');
        window.cart = [];

        // Redirect to success page
        window.location.href = 'success.html';
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors du paiement. Veuillez réessayer.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// Simulate payment (replace with real Stripe integration)
function simulatePayment(orderData) {
    return new Promise((resolve, reject) => {
        // Simulate API call delay
        setTimeout(() => {
            console.log('Order placed:', orderData);
            resolve({ success: true, orderId: 'ORD-' + Date.now() });
        }, 2000);
    });
}

// Stripe integration placeholder
// To integrate Stripe:
// 1. Add Stripe.js: <script src="https://js.stripe.com/v3/"></script>
// 2. Create a Stripe account and get your publishable key
// 3. Replace simulatePayment with actual Stripe payment intent

/*
async function initStripePayment() {
    const stripe = Stripe('YOUR_PUBLISHABLE_KEY');
    const elements = stripe.elements();

    const cardElement = elements.create('card');
    cardElement.mount('#card-element');

    // Handle form submission with Stripe
    const form = document.getElementById('checkout-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.error(error);
            return;
        }

        // Send paymentMethod.id to your server
        // Your server should create a PaymentIntent and confirm the payment
    });
}
*/
