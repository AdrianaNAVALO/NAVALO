// EmailJS Configuration
// Šablony na emailjs.com stačí 2 — překlady řeší JavaScript
// template_client  → zákazník (jeho jazyk)
// template_admin   → admin (vždy česky)
//
// Obsah obou šablon:
//   Subject: {{subject}}
//   Body:    {{email_body}}
//   To:      {{to_email}}

const EMAIL_CONFIG = {
    publicKey: 'JWx9OaFUfoowS6Knb',
    serviceId: 'service_pv5hnxu',
    templateIdClient: 'template_client',
    templateIdAdmin: 'template_admin',
    adminEmail: 'fh@navalo.eu'
};

// Initialize EmailJS
if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAIL_CONFIG.publicKey);
}

// Překlady pro emaily zákazníkům
const emailLang = {
    cz: {
        subject:   ref => `Potvrzení objednávky ${ref} — Navalo`,
        greeting:  name => `Dobrý den, ${name},`,
        thanks:    (ref, date) => `děkujeme za vaši objednávku č. ${ref} ze dne ${date}.`,
        items:     'Položky objednávky:',
        subtotal:  'Mezisoučet (bez DPH)',
        vat:       rate => `DPH (${rate} %)`,
        shipping:  'Doprava',
        total:     'Celkem',
        delivery:  'Dodací adresa',
        closing:   'S pozdravem,\nTým Navalo\nwww.navalo.eu'
    },
    en: {
        subject:   ref => `Order confirmation ${ref} — Navalo`,
        greeting:  name => `Dear ${name},`,
        thanks:    (ref, date) => `thank you for your order no. ${ref} placed on ${date}.`,
        items:     'Order items:',
        subtotal:  'Subtotal (excl. VAT)',
        vat:       rate => `VAT (${rate} %)`,
        shipping:  'Shipping',
        total:     'Total',
        delivery:  'Delivery address',
        closing:   'Kind regards,\nNavalo Team\nwww.navalo.eu'
    },
    de: {
        subject:   ref => `Bestellbestätigung ${ref} — Navalo`,
        greeting:  name => `Sehr geehrte/r ${name},`,
        thanks:    (ref, date) => `vielen Dank für Ihre Bestellung Nr. ${ref} vom ${date}.`,
        items:     'Bestellpositionen:',
        subtotal:  'Zwischensumme (ohne MwSt.)',
        vat:       rate => `MwSt. (${rate} %)`,
        shipping:  'Versand',
        total:     'Gesamtbetrag',
        delivery:  'Lieferadresse',
        closing:   'Mit freundlichen Grüßen,\nNavalo Team\nwww.navalo.eu'
    },
    fr: {
        subject:   ref => `Confirmation de commande ${ref} — Navalo`,
        greeting:  name => `Bonjour ${name},`,
        thanks:    (ref, date) => `nous vous remercions pour votre commande n° ${ref} du ${date}.`,
        items:     'Articles commandés :',
        subtotal:  'Sous-total (HT)',
        vat:       rate => `TVA (${rate} %)`,
        shipping:  'Livraison',
        total:     'Total',
        delivery:  'Adresse de livraison',
        closing:   'Cordialement,\nL\'équipe Navalo\nwww.navalo.eu'
    }
};

// Generate unique order reference
function generateOrderReference() {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `NAV-${year}${month}${day}-${random}`;
}

// Resolve multilingual product name
function resolveEmailProductName(name, lang) {
    if (typeof name === 'object' && name !== null) {
        return name[lang] || name.cz || name.en || Object.values(name)[0];
    }
    return name;
}

// Build plain-text order items list
function buildItemsList(cart, lang) {
    return cart.map(item =>
        `• ${resolveEmailProductName(item.name, lang)} (Ø${item.diameter}) x${item.quantity} — ${formatPrice(item.price * item.quantity)}`
    ).join('\n');
}

// Build customer email body in their language
function buildClientEmailBody(lang, name, ref, date, items, subtotal, vatRate, vatAmount, shipping, total, deliveryAddress) {
    const L = emailLang[lang] || emailLang.cz;
    return [
        L.greeting(name),
        '',
        L.thanks(ref, date),
        '',
        L.items,
        items,
        '',
        `${L.subtotal}: ${subtotal}`,
        `${L.vat(vatRate)}: ${vatAmount}`,
        `${L.shipping}: ${shipping}`,
        `${L.total}: ${total}`,
        '',
        `${L.delivery}: ${deliveryAddress}`,
        '',
        L.closing
    ].join('\n');
}

// Build admin email body (always Czech)
function buildAdminEmailBody(d) {
    return [
        `NOVÁ OBJEDNÁVKA: ${d.ref}`,
        `Datum: ${d.date}`,
        '',
        `Zákazník: ${d.name} (${d.type})`,
        `Email: ${d.email}`,
        `Telefon: ${d.phone}`,
        d.company !== '-' ? `Firma: ${d.company} | IČO: ${d.ico}` : '',
        '',
        'POLOŽKY:',
        d.items,
        '',
        `Mezisoučet (bez DPH): ${d.subtotal}`,
        `DPH (${d.vatRate} %): ${d.vatAmount}`,
        `Doprava: ${d.shipping}`,
        `CELKEM: ${d.total}`,
        '',
        `Dodací adresa: ${d.deliveryAddress}`,
        `Fakturační adresa: ${d.billingAddress}`
    ].filter(line => line !== '').join('\n');
}

// Send order confirmation emails
async function sendOrderEmails(orderData) {
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS není načtený');
        return { success: false, error: 'EmailJS not loaded' };
    }

    const lang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'cz';
    const L = emailLang[lang] || emailLang.cz;

    const orderRef = generateOrderReference();
    const { subtotal, shipping, total } = getCartTotals();
    const countryCode = document.getElementById('country')?.value || 'CZ';
    const vatRate = typeof getVatRate === 'function' ? getVatRate(countryCode) : 21;
    const vatAmount = (subtotal * vatRate) / (100 + vatRate);
    const subtotalExcl = subtotal - vatAmount;

    const orderDate = new Date().toLocaleDateString('cs-CZ', {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });

    const customerName = `${orderData.firstName} ${orderData.lastName}`;
    const deliveryAddress = `${orderData.address}, ${orderData.postalCode} ${orderData.city}, ${vatRates[countryCode]?.name || countryCode}`;
    const billingAddress = orderData.differentBilling
        ? `${orderData.billingAddress}, ${orderData.billingPostalCode} ${orderData.billingCity}`
        : 'Shodná s dodací adresou';
    const items = buildItemsList(window.cart, lang);

    try {
        // Email zákazníkovi — v jeho jazyce
        const clientBody = buildClientEmailBody(
            lang, customerName, orderRef, orderDate, items,
            formatPrice(subtotalExcl), vatRate, formatPrice(vatAmount),
            formatPrice(shipping), formatPrice(total), deliveryAddress
        );

        await emailjs.send(EMAIL_CONFIG.serviceId, EMAIL_CONFIG.templateIdClient, {
            to_email: orderData.email,
            subject: L.subject(orderRef),
            email_body: clientBody
        });

        // Email adminovi — vždy česky
        const adminBody = buildAdminEmailBody({
            ref: orderRef, date: orderDate,
            name: customerName, type: orderData.customerType === 'company' ? 'Firma' : 'Soukromá osoba',
            email: orderData.email, phone: orderData.phone,
            company: orderData.companyName || '-', ico: orderData.ico || '-',
            items,
            subtotal: formatPrice(subtotalExcl), vatRate, vatAmount: formatPrice(vatAmount),
            shipping: formatPrice(shipping), total: formatPrice(total),
            deliveryAddress, billingAddress
        });

        await emailjs.send(EMAIL_CONFIG.serviceId, EMAIL_CONFIG.templateIdAdmin, {
            to_email: EMAIL_CONFIG.adminEmail,
            subject: `Nová objednávka: ${orderRef} — ${customerName}`,
            email_body: adminBody
        });

        return { success: true, orderRef };

    } catch (error) {
        console.error('Chyba při odesílání emailu:', error.text || error.message || error);
        return { success: false, error };
    }
}

// Export
window.sendOrderEmails = sendOrderEmails;
window.generateOrderReference = generateOrderReference;
window.EMAIL_CONFIG = EMAIL_CONFIG;
