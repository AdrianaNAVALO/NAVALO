// Shipping configuration
// Free shipping for CZ orders over 2500 Kč (≈ 98 EUR at rate 25.5)
const SHIPPING_FREE_THRESHOLD_EUR = 98.04;

// Country → shipping zone
const shippingZones = {
    CZ: 0,
    SK: 1, AT: 1, DE: 1, PL: 1, HU: 1, SI: 1, HR: 1,
    FR: 2, IT: 2, BE: 2, NL: 2, LU: 2, CH: 2, DK: 2, CY: 2, MT: 2, GR: 2,
    ES: 3, PT: 3, SE: 3, FI: 3, IE: 3, RO: 3, BG: 3, EE: 3, LV: 3, LT: 3,
    GB: 4, NO: 4, UA: 4
};

// Shipping methods — prices in EUR per zone
const shippingMethods = [
    {
        id: 'free',
        label: { cz: 'Doprava zdarma', en: 'Free shipping', de: 'Kostenloser Versand', fr: 'Livraison gratuite' },
        info:  { cz: '2–4 pracovní dny', en: '2–4 business days', de: '2–4 Werktage', fr: '2–4 jours ouvrés' },
        prices: { 0: 0 },
        onlyIf: (subtotal, country) => country === 'CZ' && subtotal >= SHIPPING_FREE_THRESHOLD_EUR
    },
    {
        id: 'zasilkovna',
        label: { cz: 'Zásilkovna', en: 'Zásilkovna', de: 'Zásilkovna', fr: 'Zásilkovna' },
        info:  { cz: '2–4 pracovní dny', en: '2–4 business days', de: '2–4 Werktage', fr: '2–4 jours ouvrés' },
        prices: { 0: 2.5 }
    },
    {
        id: 'gls',
        label: { cz: 'GLS Standard', en: 'GLS Standard', de: 'GLS Standard', fr: 'GLS Standard' },
        info:  { cz: '2–5 pracovních dní', en: '2–5 business days', de: '2–5 Werktage', fr: '2–5 jours ouvrés' },
        prices: { 0: 5, 1: 10, 2: 14, 3: 18 }
    },
    {
        id: 'dhl',
        label: { cz: 'DHL Express', en: 'DHL Express', de: 'DHL Express', fr: 'DHL Express' },
        info:  { cz: '1–2 pracovní dny', en: '1–2 business days', de: '1–2 Werktage', fr: '1–2 jours ouvrés' },
        prices: { 0: 12, 1: 25, 2: 32, 3: 40, 4: 45 }
    },
    {
        id: 'pickup',
        label: { cz: 'Osobní odběr', en: 'Personal pickup', de: 'Selbstabholung', fr: 'Retrait en personne' },
        info:  { cz: 'Radvanická 140/60, Michálkovice', en: 'Radvanická 140/60, Michálkovice', de: 'Radvanická 140/60, Michálkovice', fr: 'Radvanická 140/60, Michálkovice' },
        prices: { 0: 0 }
    }
];

// Returns available shipping methods for a given country and subtotal
function getAvailableShipping(countryCode, subtotal) {
    const zone = shippingZones[countryCode] ?? 3;
    return shippingMethods.filter(method => {
        if (!(zone in method.prices)) return false;
        if (method.onlyIf) return method.onlyIf(subtotal, countryCode);
        return true;
    });
}

// Returns price of a method for a given country
function getShippingPrice(methodId, countryCode) {
    const method = shippingMethods.find(m => m.id === methodId);
    if (!method) return 0;
    const zone = shippingZones[countryCode] ?? 3;
    return method.prices[zone] ?? 0;
}

window.shippingMethods    = shippingMethods;
window.shippingZones      = shippingZones;
window.getAvailableShipping = getAvailableShipping;
window.getShippingPrice   = getShippingPrice;
window.SHIPPING_FREE_THRESHOLD_EUR = SHIPPING_FREE_THRESHOLD_EUR;
