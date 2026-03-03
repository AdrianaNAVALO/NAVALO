// EmailJS Configuration
// Instructions:
// 1. Créez un compte sur https://www.emailjs.com/
// 2. Ajoutez votre service email (Gmail, Outlook, etc.)
// 3. Créez 2 templates (voir instructions ci-dessous)
// 4. Remplacez les valeurs ci-dessous par vos clés

const EMAIL_CONFIG = {
    publicKey: 'JWx9OaFUfoowS6Knb',
    serviceId: 'service_pv5hnxu',
    templateIdClient: 'template_client',
    templateIdAdmin: 'template_admin',
    adminEmail: 'fh@ind-tech.eu'
};

// Initialize EmailJS
if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAIL_CONFIG.publicKey);
}

// Generate unique order reference
function generateOrderReference() {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `NAV-${year}${month}${day}-${random}`;
}

// Format order items for email
function formatOrderItemsForEmail(cart) {
    return cart.map(item =>
        `• ${item.name} (Ø${item.diameter}) x${item.quantity} - ${formatPrice(item.price * item.quantity)}`
    ).join('\n');
}

// Format order items as HTML table
function formatOrderItemsHTML(cart) {
    const rows = cart.map(item => `
        <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${item.name}</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">Ø${item.diameter}</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">${formatPrice(item.price * item.quantity)}</td>
        </tr>
    `).join('');

    return `
        <table style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr style="background: #f5f5f5;">
                    <th style="padding: 8px; text-align: left;">Produit</th>
                    <th style="padding: 8px; text-align: left;">Diamètre</th>
                    <th style="padding: 8px; text-align: center;">Qté</th>
                    <th style="padding: 8px; text-align: right;">Prix</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
    `;
}

// Send order confirmation emails
async function sendOrderEmails(orderData) {
    console.log('sendOrderEmails appelé', orderData);

    // Check if EmailJS is loaded
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS non chargé!');
        return { success: false, error: 'EmailJS not loaded' };
    }

    console.log('EmailJS est chargé');

    const orderRef = generateOrderReference();
    const { subtotal, shipping, total } = getCartTotals();
    const countryCode = document.getElementById('country')?.value || 'FR';
    const vatRate = getVatRate(countryCode);
    const vatAmount = (subtotal * vatRate) / (100 + vatRate);

    // Common data for both emails
    const emailData = {
        order_ref: orderRef,
        customer_name: `${orderData.firstName} ${orderData.lastName}`,
        customer_email: orderData.email,
        customer_phone: orderData.phone,
        customer_type: orderData.customerType === 'company' ? 'Société' : 'Particulier',
        company_name: orderData.companyName || '-',
        company_ico: orderData.ico || '-',
        company_vat: orderData.vatNumber || '-',
        delivery_address: `${orderData.address}, ${orderData.postalCode} ${orderData.city}`,
        delivery_country: vatRates[countryCode]?.name || countryCode,
        billing_address: orderData.differentBilling
            ? `${orderData.billingAddress}, ${orderData.billingPostalCode} ${orderData.billingCity}`
            : 'Identique à la livraison',
        order_items: formatOrderItemsForEmail(window.cart),
        order_items_html: formatOrderItemsHTML(window.cart),
        subtotal: formatPrice(subtotal - vatAmount),
        vat_rate: vatRate,
        vat_amount: formatPrice(vatAmount),
        shipping: formatPrice(shipping),
        total: formatPrice(total),
        currency: getConfig().currency,
        order_date: new Date().toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    };

    try {
        console.log('Envoi email client à:', orderData.email);
        console.log('Données email:', emailData);

        // Send confirmation to customer
        const result1 = await emailjs.send(
            EMAIL_CONFIG.serviceId,
            EMAIL_CONFIG.templateIdClient,
            {
                to_email: orderData.email,
                customer_name: emailData.customer_name,
                order_ref: emailData.order_ref,
                order_date: emailData.order_date,
                order_items: emailData.order_items,
                subtotal: emailData.subtotal,
                vat_rate: emailData.vat_rate,
                vat_amount: emailData.vat_amount,
                shipping: emailData.shipping,
                total: emailData.total,
                delivery_address: emailData.delivery_address,
                delivery_country: emailData.delivery_country
            }
        );
        console.log('Email client envoyé:', result1);

        // Send notification to admin
        const result2 = await emailjs.send(
            EMAIL_CONFIG.serviceId,
            EMAIL_CONFIG.templateIdAdmin,
            {
                to_email: EMAIL_CONFIG.adminEmail,
                customer_name: emailData.customer_name,
                customer_email: emailData.customer_email,
                customer_phone: emailData.customer_phone,
                customer_type: emailData.customer_type,
                company_name: emailData.company_name,
                company_ico: emailData.company_ico,
                order_ref: emailData.order_ref,
                order_date: emailData.order_date,
                order_items: emailData.order_items,
                subtotal: emailData.subtotal,
                vat_rate: emailData.vat_rate,
                vat_amount: emailData.vat_amount,
                shipping: emailData.shipping,
                total: emailData.total,
                delivery_address: emailData.delivery_address,
                delivery_country: emailData.delivery_country,
                billing_address: emailData.billing_address
            }
        );
        console.log('Email admin envoyé:', result2);

        return { success: true, orderRef };
    } catch (error) {
        console.error('Erreur envoi email:', error);
        console.error('Détail erreur:', error.text || error.message || error);
        return { success: false, error };
    }
}

// Export
window.sendOrderEmails = sendOrderEmails;
window.generateOrderReference = generateOrderReference;
window.EMAIL_CONFIG = EMAIL_CONFIG;
