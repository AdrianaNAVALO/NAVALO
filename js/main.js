// Main JavaScript file

document.addEventListener('DOMContentLoaded', () => {
    initTranslations();

    if (document.getElementById('products-grid')) {
        initProductsPage();
    }

    if (document.getElementById('cart-container')) {
        renderCart();
    }

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
    const currentFlag = document.getElementById('current-flag');
    if (currentFlag && window.config) {
        const lang = getCurrentLang();
        currentFlag.textContent = window.config[lang].flag;
    }

    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        const translated = t(key);
        if (translated && translated !== key) {
            el.textContent = translated;
        }
    });

    document.querySelectorAll('[data-t-html]').forEach(el => {
        const key = el.getAttribute('data-t-html');
        const translated = t(key);
        if (translated && translated !== key) {
            el.innerHTML = translated;
        }
    });

    document.documentElement.lang = getCurrentLang();
}

// Toggle language menu
function toggleLangMenu() {
    const menu = document.getElementById('lang-menu');
    if (menu) menu.classList.toggle('show');
}

window.toggleLangMenu = toggleLangMenu;

// Toggle mobile nav
function toggleMobileNav() {
    document.querySelector('.nav-links')?.classList.toggle('nav-open');
    document.getElementById('nav-toggle')?.classList.toggle('active');
}

window.toggleMobileNav = toggleMobileNav;

// Close mobile nav when a link is clicked
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-links')?.classList.remove('nav-open');
            document.getElementById('nav-toggle')?.classList.remove('active');
        });
    });
});

// Populate country select elements from vatRates
function populateCountrySelect(selectEl, defaultCode) {
    if (!selectEl || !window.vatRates) return;
    selectEl.innerHTML = '';
    Object.entries(window.vatRates).forEach(([code, info]) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = info.name;
        if (code === (defaultCode || 'CZ')) option.selected = true;
        selectEl.appendChild(option);
    });
}

// Checkout initialization
function initCheckout() {
    const form = document.getElementById('checkout-form');
    const orderItemsContainer = document.getElementById('order-items');

    // Populate country selects
    populateCountrySelect(document.getElementById('country'), 'CZ');
    populateCountrySelect(document.getElementById('billingCountry'), 'CZ');

    if (orderItemsContainer && window.cart) {
        const resolveName = (name) => {
            if (typeof name === 'object' && name !== null) {
                const lang = getCurrentLang();
                return name[lang] || name.en || name.fr || Object.values(name)[0];
            }
            return name;
        };

        orderItemsContainer.innerHTML = window.cart.map(item => `
            <div class="order-item">
                <span class="order-item-name">${resolveName(item.name)} (${item.diameter})</span>
                <span class="order-item-qty">x${item.quantity}</span>
                <span>${formatPrice(item.price * item.quantity)}</span>
            </div>
        `).join('');
    }

    // Render shipping options (also calls updateOrderSummary)
    renderShippingOptions();

    // Init payment options
    updatePaymentOptions();

    // Auto-format card inputs
    const cardNumberInput = document.querySelector('input[name="cardNumber"]');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', e => {
            let v = e.target.value.replace(/\D/g, '').substring(0, 16);
            e.target.value = v.replace(/(.{4})/g, '$1 ').trim();
        });
    }
    const expiryInput = document.querySelector('input[name="expiry"]');
    if (expiryInput) {
        expiryInput.addEventListener('input', e => {
            let v = e.target.value.replace(/\D/g, '').substring(0, 4);
            if (v.length >= 3) v = v.substring(0, 2) + '/' + v.substring(2);
            e.target.value = v;
        });
    }

    // Re-render shipping + payment when country changes
    const countrySelect = document.getElementById('country');
    if (countrySelect) {
        countrySelect.addEventListener('change', () => {
            renderShippingOptions();
            updatePaymentOptions();
        });
    }

    if (form) {
        form.addEventListener('submit', handleCheckoutSubmit);
    }
}

// Render available shipping options for selected country
function renderShippingOptions() {
    const container = document.getElementById('shipping-options');
    if (!container || !window.getAvailableShipping || !window.cart) return;

    const countryCode = document.getElementById('country')?.value || 'CZ';
    const subtotal = window.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const methods = window.getAvailableShipping(countryCode, subtotal);
    const lang = getCurrentLang();
    const zone = window.shippingZones[countryCode] ?? 3;

    if (methods.length === 0) {
        container.innerHTML = '<p style="color:var(--text-3);font-size:0.9rem;">Pro tuto zemi není dostupná žádná doprava.</p>';
        window.selectedShipping = 0;
        updateOrderSummary();
        return;
    }

    container.innerHTML = methods.map((method, i) => {
        const price = method.prices[zone] ?? 0;
        const priceText = price === 0 ? (t('freeShipping') || 'Zdarma') : formatPrice(price);
        return `
        <label class="shipping-option${i === 0 ? ' selected' : ''}">
            <input type="radio" name="shippingMethod" value="${method.id}" ${i === 0 ? 'checked' : ''} onchange="selectShipping('${method.id}', this)">
            <div class="shipping-option__info">
                <span class="shipping-option__label">${method.label[lang] || method.label.en}</span>
                <span class="shipping-option__time">${method.info[lang] || method.info.en}</span>
            </div>
            <span class="shipping-option__price">${priceText}</span>
        </label>`;
    }).join('');

    // Auto-select first method
    window.selectedShipping = methods[0].prices[zone] ?? 0;
    updateOrderSummary();
}

// Called when user picks a shipping option
function selectShipping(methodId, radioEl) {
    const countryCode = document.getElementById('country')?.value || 'CZ';
    const zone = window.shippingZones[countryCode] ?? 3;
    const method = window.shippingMethods.find(m => m.id === methodId);
    window.selectedShipping = method ? (method.prices[zone] ?? 0) : 0;

    document.querySelectorAll('#shipping-options .shipping-option').forEach(el => el.classList.remove('selected'));
    if (radioEl) radioEl.closest('.shipping-option').classList.add('selected');

    updateOrderSummary();
}
window.selectShipping = selectShipping;

// Called when user picks a payment method
function selectPaymentMethod(radioEl) {
    const method = radioEl.value;

    document.querySelectorAll('#payment-options .shipping-option').forEach(el => el.classList.remove('selected'));
    radioEl.closest('.shipping-option').classList.add('selected');

    document.getElementById('card-fields').style.display = method === 'card' ? '' : 'none';
    document.getElementById('bank-fields').style.display = method === 'bank' ? '' : 'none';

    window.codSurcharge = method === 'cod' ? 2.00 : 0;
    updateOrderSummary();
}
window.selectPaymentMethod = selectPaymentMethod;

// Show/hide COD based on country (only CZ and SK)
function updatePaymentOptions() {
    const countryCode = document.getElementById('country')?.value || 'CZ';
    const codOption = document.getElementById('cod-option');
    const codPrice = document.getElementById('cod-price');
    if (!codOption) return;

    const codAllowed = ['CZ', 'SK'].includes(countryCode);
    codOption.style.display = codAllowed ? '' : 'none';

    if (codPrice) codPrice.textContent = '+' + formatPrice(2.00);

    // If COD was selected but country no longer allows it, switch to card
    const codRadio = codOption.querySelector('input[type="radio"]');
    if (!codAllowed && codRadio?.checked) {
        const cardRadio = document.querySelector('input[name="paymentMethod"][value="card"]');
        if (cardRadio) { cardRadio.checked = true; selectPaymentMethod(cardRadio); }
    }
}
window.updatePaymentOptions = updatePaymentOptions;

function updateOrderSummary() {
    if (!window.cart) return;
    const subtotal = window.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = window.selectedShipping ?? 0;
    const codSurcharge = window.codSurcharge ?? 0;
    const countryCode = document.getElementById('country')?.value || 'CZ';
    const vatRate = window.getVatRate ? window.getVatRate(countryCode) : 21;
    const vatAmount = (subtotal * vatRate) / (100 + vatRate);
    const subtotalExclVat = subtotal - vatAmount;
    const total = subtotal + shipping + codSurcharge;

    const orderSubtotal = document.getElementById('order-subtotal');
    const orderVat = document.getElementById('order-vat');
    const vatLabel = document.getElementById('vat-label');
    const orderShipping = document.getElementById('order-shipping');
    const codRow = document.getElementById('cod-row');
    const orderCod = document.getElementById('order-cod');
    const orderTotal = document.getElementById('order-total');

    if (orderSubtotal) orderSubtotal.textContent = formatPrice(subtotalExclVat);
    if (orderVat) orderVat.textContent = formatPrice(vatAmount);
    if (vatLabel) vatLabel.textContent = `${t('vat')} (${vatRate}%)`;
    if (orderShipping) orderShipping.textContent = shipping === 0 ? (t('freeShipping') || 'Zdarma') : formatPrice(shipping);
    if (codRow) codRow.style.display = codSurcharge > 0 ? '' : 'none';
    if (orderCod) orderCod.textContent = codSurcharge > 0 ? formatPrice(codSurcharge) : '—';
    if (orderTotal) orderTotal.textContent = formatPrice(total);
}

// Form validation
function validateCheckoutForm(formData) {
    let valid = true;

    // Clear previous errors
    document.querySelectorAll('.field-error').forEach(el => el.remove());
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));

    function showError(name, message) {
        const input = document.querySelector(`[name="${name}"]`);
        if (!input) return;
        input.classList.add('input-error');
        const err = document.createElement('span');
        err.className = 'field-error';
        err.textContent = message;
        input.parentNode.appendChild(err);
        if (valid) input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        valid = false;
    }

    const req = t('errorRequired') || 'Toto pole je povinné';

    // Required fields
    if (!formData.get('firstName')?.trim()) showError('firstName', req);
    if (!formData.get('lastName')?.trim()) showError('lastName', req);
    if (!formData.get('address')?.trim()) showError('address', req);
    if (!formData.get('city')?.trim()) showError('city', req);
    if (!formData.get('postalCode')?.trim()) showError('postalCode', req);

    // Email
    const email = formData.get('email')?.trim();
    if (!email) {
        showError('email', req);
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('email', t('errorEmail') || 'Zadejte platnou e-mailovou adresu');
    }

    // Phone (optional, format check if filled)
    const phone = formData.get('phone')?.trim();
    if (phone && !/^[\+\d\s\-\(\)]{6,20}$/.test(phone)) {
        showError('phone', t('errorPhone') || 'Neplatný formát telefonu');
    }

    // Postal code format (CZ/SK)
    const postalCode = formData.get('postalCode')?.trim();
    const countryCode = formData.get('country') || 'CZ';
    if (postalCode && ['CZ', 'SK'].includes(countryCode) && !/^\d{3}\s?\d{2}$/.test(postalCode)) {
        showError('postalCode', t('errorPostalCode') || 'Formát PSČ: XXX XX');
    }

    // Company fields
    if (formData.get('customerType') === 'company') {
        if (!formData.get('companyName')?.trim()) showError('companyName', req);
        const ico = formData.get('ico')?.trim();
        if (ico && !/^\d{8}$/.test(ico)) showError('ico', t('errorIco') || 'IČO musí mít 8 číslic');
    }

    // Card fields
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'card';
    if (paymentMethod === 'card') {
        const cardNumber = formData.get('cardNumber')?.replace(/\s/g, '');
        if (!cardNumber || !/^\d{16}$/.test(cardNumber)) showError('cardNumber', t('errorCardNumber') || 'Zadejte 16místné číslo karty');
        const expiry = formData.get('expiry')?.trim();
        if (!expiry || !/^\d{2}\/\d{2}$/.test(expiry)) showError('expiry', t('errorExpiry') || 'Formát: MM/RR');
        const cvv = formData.get('cvv')?.trim();
        if (!cvv || !/^\d{3,4}$/.test(cvv)) showError('cvv', t('errorCvv') || 'CVV: 3–4 číslice');
    }

    return valid;
}

// Handle checkout form submission
async function handleCheckoutSubmit(e) {
    e.preventDefault();

    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    const formData = new FormData(e.target);

    if (!validateCheckoutForm(formData)) return;

    submitBtn.textContent = t('processing');
    submitBtn.disabled = true;
    const orderData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        customerType: formData.get('customerType'),
        companyName: formData.get('companyName'),
        ico: formData.get('ico'),
        vatNumber: formData.get('vatNumber'),
        address: formData.get('address'),
        city: formData.get('city'),
        postalCode: formData.get('postalCode'),
        country: formData.get('country'),
        differentBilling: formData.get('differentBilling') === 'on',
        billingAddress: formData.get('billingAddress'),
        billingCity: formData.get('billingCity'),
        billingPostalCode: formData.get('billingPostalCode'),
        billingCountry: formData.get('billingCountry'),
        items: window.cart,
        shippingMethodId: document.querySelector('input[name="shippingMethod"]:checked')?.value || '',
        totals: window.getCartTotals()
    };

    try {
        await simulatePayment(orderData);

        const orderRef = window.generateOrderReference ? window.generateOrderReference() : 'NAV-' + Date.now();

        if (window.sendOrderEmails) {
            const emailResult = await window.sendOrderEmails(orderData);
            localStorage.setItem('navalo_last_order_ref', emailResult.orderRef || orderRef);
        } else {
            localStorage.setItem('navalo_last_order_ref', orderRef);
        }

        localStorage.removeItem('navalo_cart');
        window.cart = [];

        window.location.href = 'success.html';
    } catch (error) {
        console.error('Error:', error);
        alert('Chyba při zpracování platby. Zkuste to prosím znovu.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// Simulate payment (replace with real Stripe integration)
function simulatePayment(orderData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Order placed:', orderData);
            resolve({ success: true, orderId: 'ORD-' + Date.now() });
        }, 2000);
    });
}
