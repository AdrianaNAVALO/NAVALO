// Translations and currency settings
const config = {
    fr: {
        currency: "EUR",
        currencySymbol: "€",
        exchangeRate: 1,
        vatRate: 20, // TVA France 20%
        lang: "Français",
        flag: "🇫🇷"
    },
    en: {
        currency: "EUR",
        currencySymbol: "€",
        exchangeRate: 1,
        vatRate: 20,
        lang: "English",
        flag: "🇬🇧"
    },
    de: {
        currency: "EUR",
        currencySymbol: "€",
        exchangeRate: 1,
        vatRate: 19, // MwSt Allemagne 19%
        lang: "Deutsch",
        flag: "🇩🇪"
    },
    cz: {
        currency: "CZK",
        currencySymbol: "Kč",
        exchangeRate: 25.5,
        vatRate: 21, // DPH Czech 21%
        lang: "Čeština",
        flag: "🇨🇿"
    }
};

const translations = {
    fr: {
        // Navigation
        home: "Accueil",
        products: "Produits",
        contact: "Contact",

        // Homepage
        heroTitle: "Pièces à sertir pour le chauffage",
        heroSubtitle: "Qualité professionnelle pour vos installations de chauffage",
        viewProducts: "Voir nos produits",
        whyChooseUs: "Pourquoi choisir Navalo ?",
        premiumQuality: "Qualité Premium",
        premiumQualityDesc: "Pièces certifiées aux normes européennes",
        fastDelivery: "Livraison Rapide",
        fastDeliveryDesc: "Expédition sous 24-48h",
        competitivePrices: "Prix Compétitifs",
        competitivePricesDesc: "Les meilleurs prix du marché",
        expertSupport: "Support Expert",
        expertSupportDesc: "Conseils techniques disponibles",
        ourCategories: "Nos catégories",

        // Categories
        elbows: "Coudes",
        elbowsDesc: "45° et 90°",
        tees: "Tés",
        teesDesc: "Égaux et réduits",
        couplings: "Manchons",
        couplingsDesc: "Raccords droits",
        reducers: "Réductions",
        reducersDesc: "Toutes dimensions",

        // Products page
        ourProducts: "Nos produits",
        professionalQuality: "Pièces à sertir de qualité professionnelle",
        all: "Tous",
        addToCart: "Ajouter au panier",
        addedToCart: "ajouté au panier",

        // Cart
        myCart: "Mon panier",
        emptyCart: "Votre panier est vide",
        orderSummary: "Résumé de la commande",
        subtotal: "Sous-total",
        shipping: "Livraison",
        freeShipping: "offerte",
        total: "Total",
        checkout: "Passer commande",

        // Checkout
        finalizeOrder: "Finaliser ma commande",
        deliveryInfo: "Informations de livraison",
        firstName: "Prénom",
        lastName: "Nom",
        email: "Email",
        phone: "Téléphone",
        address: "Adresse",
        city: "Ville",
        postalCode: "Code postal",
        country: "Pays",
        payment: "Paiement",
        cardName: "Nom sur la carte",
        cardNumber: "Numéro de carte",
        expiry: "Date d'expiration",
        payNow: "Payer maintenant",
        summary: "Récapitulatif",

        // Contact
        contactUs: "Contactez-nous",
        contactIntro: "Spécialiste des pièces à sertir pour le chauffage depuis plus de 10 ans. Notre équipe est à votre disposition pour répondre à toutes vos questions.",
        fullName: "Nom complet",
        subject: "Sujet",
        selectSubject: "Sélectionnez un sujet",
        orderQuestion: "Question sur une commande",
        productInfo: "Information produit",
        quoteRequest: "Demande de devis",
        other: "Autre",
        message: "Message",
        sendMessage: "Envoyer le message",
        messageSent: "Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.",

        // VAT & Pricing
        inclVat: "TTC",
        exclVat: "HT",
        vat: "TVA",
        vatAmount: "TVA (20%)",

        // Customer type
        customerType: "Type de client",
        individual: "Particulier",
        company: "Société",
        companyName: "Nom de la société",
        ico: "SIRET",
        vatNumber: "N° TVA intracommunautaire",

        // Billing address
        differentBillingAddress: "Adresse de facturation différente",
        billingAddress: "Adresse de facturation",
        billingCity: "Ville (facturation)",
        billingPostalCode: "Code postal (facturation)",

        // Success
        orderConfirmed: "Commande confirmée !",
        orderConfirmedMsg: "Merci pour votre commande. Vous recevrez un email de confirmation avec les détails de votre commande et le suivi de livraison.",
        orderNumber: "Numéro de commande",
        continueShopping: "Continuer mes achats",

        // Footer
        footerDesc: "Spécialiste des pièces à sertir pour le chauffage",
        allRightsReserved: "Tous droits réservés"
    },

    en: {
        home: "Home",
        products: "Products",
        contact: "Contact",
        heroTitle: "Press fittings for heating systems",
        heroSubtitle: "Professional quality for your heating installations",
        viewProducts: "View our products",
        whyChooseUs: "Why choose Navalo?",
        premiumQuality: "Premium Quality",
        premiumQualityDesc: "European certified parts",
        fastDelivery: "Fast Delivery",
        fastDeliveryDesc: "Shipping within 24-48h",
        competitivePrices: "Competitive Prices",
        competitivePricesDesc: "Best prices on the market",
        expertSupport: "Expert Support",
        expertSupportDesc: "Technical advice available",
        ourCategories: "Our categories",
        elbows: "Elbows",
        elbowsDesc: "45° and 90°",
        tees: "Tees",
        teesDesc: "Equal and reduced",
        couplings: "Couplings",
        couplingsDesc: "Straight connectors",
        reducers: "Reducers",
        reducersDesc: "All dimensions",
        ourProducts: "Our products",
        professionalQuality: "Professional quality press fittings",
        all: "All",
        addToCart: "Add to cart",
        addedToCart: "added to cart",
        myCart: "My cart",
        emptyCart: "Your cart is empty",
        orderSummary: "Order summary",
        subtotal: "Subtotal",
        shipping: "Shipping",
        freeShipping: "free",
        total: "Total",
        checkout: "Checkout",
        finalizeOrder: "Complete my order",
        deliveryInfo: "Delivery information",
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        phone: "Phone",
        address: "Address",
        city: "City",
        postalCode: "Postal code",
        country: "Country",
        payment: "Payment",
        cardName: "Name on card",
        cardNumber: "Card number",
        expiry: "Expiry date",
        payNow: "Pay now",
        summary: "Summary",
        contactUs: "Contact us",
        contactIntro: "Specialists in press fittings for heating systems for over 10 years. Our team is available to answer all your questions.",
        fullName: "Full name",
        subject: "Subject",
        selectSubject: "Select a subject",
        orderQuestion: "Order question",
        productInfo: "Product information",
        quoteRequest: "Quote request",
        other: "Other",
        message: "Message",
        sendMessage: "Send message",
        messageSent: "Thank you for your message! We will respond as soon as possible.",
        // VAT & Pricing
        inclVat: "incl. VAT",
        exclVat: "excl. VAT",
        vat: "VAT",
        vatAmount: "VAT (20%)",

        // Customer type
        customerType: "Customer type",
        individual: "Individual",
        company: "Company",
        companyName: "Company name",
        ico: "Company ID",
        vatNumber: "VAT number",

        // Billing address
        differentBillingAddress: "Different billing address",
        billingAddress: "Billing address",
        billingCity: "City (billing)",
        billingPostalCode: "Postal code (billing)",

        orderConfirmed: "Order confirmed!",
        orderConfirmedMsg: "Thank you for your order. You will receive a confirmation email with order details and tracking information.",
        orderNumber: "Order number",
        continueShopping: "Continue shopping",
        footerDesc: "Press fittings specialist for heating systems",
        allRightsReserved: "All rights reserved"
    },

    de: {
        home: "Startseite",
        products: "Produkte",
        contact: "Kontakt",
        heroTitle: "Pressfittings für Heizungsanlagen",
        heroSubtitle: "Professionelle Qualität für Ihre Heizungsinstallationen",
        viewProducts: "Produkte ansehen",
        whyChooseUs: "Warum Navalo wählen?",
        premiumQuality: "Premium-Qualität",
        premiumQualityDesc: "Europäisch zertifizierte Teile",
        fastDelivery: "Schnelle Lieferung",
        fastDeliveryDesc: "Versand innerhalb von 24-48h",
        competitivePrices: "Wettbewerbsfähige Preise",
        competitivePricesDesc: "Die besten Preise auf dem Markt",
        expertSupport: "Expertenunterstützung",
        expertSupportDesc: "Technische Beratung verfügbar",
        ourCategories: "Unsere Kategorien",
        elbows: "Bögen",
        elbowsDesc: "45° und 90°",
        tees: "T-Stücke",
        teesDesc: "Gleich und reduziert",
        couplings: "Muffen",
        couplingsDesc: "Gerade Verbinder",
        reducers: "Reduzierstücke",
        reducersDesc: "Alle Abmessungen",
        ourProducts: "Unsere Produkte",
        professionalQuality: "Pressfittings in Profiqualität",
        all: "Alle",
        addToCart: "In den Warenkorb",
        addedToCart: "zum Warenkorb hinzugefügt",
        myCart: "Mein Warenkorb",
        emptyCart: "Ihr Warenkorb ist leer",
        orderSummary: "Bestellübersicht",
        subtotal: "Zwischensumme",
        shipping: "Versand",
        freeShipping: "kostenlos",
        total: "Gesamt",
        checkout: "Zur Kasse",
        finalizeOrder: "Bestellung abschließen",
        deliveryInfo: "Lieferinformationen",
        firstName: "Vorname",
        lastName: "Nachname",
        email: "E-Mail",
        phone: "Telefon",
        address: "Adresse",
        city: "Stadt",
        postalCode: "Postleitzahl",
        country: "Land",
        payment: "Zahlung",
        cardName: "Name auf der Karte",
        cardNumber: "Kartennummer",
        expiry: "Ablaufdatum",
        payNow: "Jetzt bezahlen",
        summary: "Zusammenfassung",
        contactUs: "Kontaktieren Sie uns",
        contactIntro: "Seit über 10 Jahren Spezialist für Pressfittings für Heizungsanlagen. Unser Team steht Ihnen für alle Fragen zur Verfügung.",
        fullName: "Vollständiger Name",
        subject: "Betreff",
        selectSubject: "Betreff auswählen",
        orderQuestion: "Frage zur Bestellung",
        productInfo: "Produktinformation",
        quoteRequest: "Angebotsanfrage",
        other: "Sonstiges",
        message: "Nachricht",
        sendMessage: "Nachricht senden",
        messageSent: "Vielen Dank für Ihre Nachricht! Wir werden so schnell wie möglich antworten.",
        // VAT & Pricing
        inclVat: "inkl. MwSt",
        exclVat: "zzgl. MwSt",
        vat: "MwSt",
        vatAmount: "MwSt (19%)",

        // Customer type
        customerType: "Kundentyp",
        individual: "Privatperson",
        company: "Unternehmen",
        companyName: "Firmenname",
        ico: "Handelsregisternummer",
        vatNumber: "USt-IdNr",

        // Billing address
        differentBillingAddress: "Abweichende Rechnungsadresse",
        billingAddress: "Rechnungsadresse",
        billingCity: "Stadt (Rechnung)",
        billingPostalCode: "PLZ (Rechnung)",

        orderConfirmed: "Bestellung bestätigt!",
        orderConfirmedMsg: "Vielen Dank für Ihre Bestellung. Sie erhalten eine Bestätigungs-E-Mail mit Bestelldetails und Tracking-Informationen.",
        orderNumber: "Bestellnummer",
        continueShopping: "Weiter einkaufen",
        footerDesc: "Spezialist für Pressfittings für Heizungsanlagen",
        allRightsReserved: "Alle Rechte vorbehalten"
    },

    cz: {
        home: "Domů",
        products: "Produkty",
        contact: "Kontakt",
        heroTitle: "Lisovací tvarovky pro topení",
        heroSubtitle: "Profesionální kvalita pro vaše topné instalace",
        viewProducts: "Zobrazit produkty",
        whyChooseUs: "Proč si vybrat Navalo?",
        premiumQuality: "Prémiová kvalita",
        premiumQualityDesc: "Evropsky certifikované díly",
        fastDelivery: "Rychlé doručení",
        fastDeliveryDesc: "Expedice do 24-48h",
        competitivePrices: "Konkurenční ceny",
        competitivePricesDesc: "Nejlepší ceny na trhu",
        expertSupport: "Odborná podpora",
        expertSupportDesc: "Technické poradenství k dispozici",
        ourCategories: "Naše kategorie",
        elbows: "Kolena",
        elbowsDesc: "45° a 90°",
        tees: "T-kusy",
        teesDesc: "Rovné a redukované",
        couplings: "Spojky",
        couplingsDesc: "Přímé spojky",
        reducers: "Redukce",
        reducersDesc: "Všechny rozměry",
        ourProducts: "Naše produkty",
        professionalQuality: "Lisovací tvarovky v profesionální kvalitě",
        all: "Vše",
        addToCart: "Přidat do košíku",
        addedToCart: "přidáno do košíku",
        myCart: "Můj košík",
        emptyCart: "Váš košík je prázdný",
        orderSummary: "Shrnutí objednávky",
        subtotal: "Mezisoučet",
        shipping: "Doprava",
        freeShipping: "zdarma",
        total: "Celkem",
        checkout: "Objednat",
        finalizeOrder: "Dokončit objednávku",
        deliveryInfo: "Dodací údaje",
        firstName: "Jméno",
        lastName: "Příjmení",
        email: "E-mail",
        phone: "Telefon",
        address: "Adresa",
        city: "Město",
        postalCode: "PSČ",
        country: "Země",
        payment: "Platba",
        cardName: "Jméno na kartě",
        cardNumber: "Číslo karty",
        expiry: "Datum expirace",
        payNow: "Zaplatit",
        summary: "Souhrn",
        contactUs: "Kontaktujte nás",
        contactIntro: "Již více než 10 let specialisté na lisovací tvarovky pro topné systémy. Náš tým je vám k dispozici pro zodpovězení všech vašich dotazů.",
        fullName: "Celé jméno",
        subject: "Předmět",
        selectSubject: "Vyberte předmět",
        orderQuestion: "Dotaz k objednávce",
        productInfo: "Informace o produktu",
        quoteRequest: "Žádost o nabídku",
        other: "Jiné",
        message: "Zpráva",
        sendMessage: "Odeslat zprávu",
        messageSent: "Děkujeme za vaši zprávu! Odpovíme co nejdříve.",
        // VAT & Pricing
        inclVat: "s DPH",
        exclVat: "bez DPH",
        vat: "DPH",
        vatAmount: "DPH (21%)",

        // Customer type
        customerType: "Typ zákazníka",
        individual: "Fyzická osoba",
        company: "Firma",
        companyName: "Název firmy",
        ico: "IČO",
        vatNumber: "DIČ",

        // Billing address
        differentBillingAddress: "Jiná fakturační adresa",
        billingAddress: "Fakturační adresa",
        billingCity: "Město (fakturace)",
        billingPostalCode: "PSČ (fakturace)",

        orderConfirmed: "Objednávka potvrzena!",
        orderConfirmedMsg: "Děkujeme za vaši objednávku. Obdržíte potvrzovací e-mail s podrobnostmi objednávky a sledováním zásilky.",
        orderNumber: "Číslo objednávky",
        continueShopping: "Pokračovat v nákupu",
        footerDesc: "Specialista na lisovací tvarovky pro topení",
        allRightsReserved: "Všechna práva vyhrazena"
    }
};

// Product name translations
const productNames = {
    fr: {
        "elbow90": "Coude 90° à sertir",
        "elbow45": "Coude 45° à sertir",
        "teeEqual": "Té égal à sertir",
        "teeReduced": "Té réduit à sertir",
        "coupling": "Manchon à sertir",
        "reducer": "Réduction à sertir"
    },
    en: {
        "elbow90": "90° Press elbow",
        "elbow45": "45° Press elbow",
        "teeEqual": "Equal press tee",
        "teeReduced": "Reduced press tee",
        "coupling": "Press coupling",
        "reducer": "Press reducer"
    },
    de: {
        "elbow90": "90° Pressbogen",
        "elbow45": "45° Pressbogen",
        "teeEqual": "Gleich T-Stück",
        "teeReduced": "Reduzier T-Stück",
        "coupling": "Pressmuffe",
        "reducer": "Pressreduzierstück"
    },
    cz: {
        "elbow90": "Lisovací koleno 90°",
        "elbow45": "Lisovací koleno 45°",
        "teeEqual": "Lisovací T-kus",
        "teeReduced": "Lisovací redukční T-kus",
        "coupling": "Lisovací spojka",
        "reducer": "Lisovací redukce"
    }
};

// Category translations
const categoryNames = {
    fr: { coudes: "Coudes", tes: "Tés", manchons: "Manchons", reductions: "Réductions" },
    en: { coudes: "Elbows", tes: "Tees", manchons: "Couplings", reductions: "Reducers" },
    de: { coudes: "Bögen", tes: "T-Stücke", manchons: "Muffen", reductions: "Reduzierstücke" },
    cz: { coudes: "Kolena", tes: "T-kusy", manchons: "Spojky", reductions: "Redukce" }
};

// Get current language from localStorage or default to 'fr'
function getCurrentLang() {
    return localStorage.getItem('navalo_lang') || 'fr';
}

// Set language
function setLang(lang) {
    localStorage.setItem('navalo_lang', lang);
    location.reload();
}

// Get translation
function t(key) {
    const lang = getCurrentLang();
    return translations[lang][key] || translations['fr'][key] || key;
}

// VAT rates by country
const vatRates = {
    FR: { rate: 20, name: "France" },
    DE: { rate: 19, name: "Deutschland" },
    CZ: { rate: 21, name: "Česká republika" },
    AT: { rate: 20, name: "Österreich" },
    BE: { rate: 21, name: "Belgique" },
    NL: { rate: 21, name: "Nederland" },
    IT: { rate: 22, name: "Italia" },
    ES: { rate: 21, name: "España" },
    PL: { rate: 23, name: "Polska" },
    SK: { rate: 20, name: "Slovensko" },
    CH: { rate: 8.1, name: "Schweiz" },
    LU: { rate: 17, name: "Luxembourg" }
};

// Get VAT rate for country
function getVatRate(countryCode) {
    return vatRates[countryCode]?.rate || 20;
}

// Get all countries for dropdown
function getCountries() {
    return vatRates;
}

// Get config for current language
function getConfig() {
    return config[getCurrentLang()];
}

window.vatRates = vatRates;
window.getVatRate = getVatRate;
window.getCountries = getCountries;

// Format price with correct currency
function formatPrice(priceEUR) {
    const cfg = getConfig();
    const price = priceEUR * cfg.exchangeRate;

    if (cfg.currency === 'CZK') {
        return Math.round(price) + ' ' + cfg.currencySymbol;
    }
    return price.toFixed(2) + ' ' + cfg.currencySymbol;
}

// Get category name translated
function getCategoryNameTranslated(category) {
    const lang = getCurrentLang();
    return categoryNames[lang][category] || category;
}

// Export
window.t = t;
window.getCurrentLang = getCurrentLang;
window.setLang = setLang;
window.getConfig = getConfig;
window.formatPrice = formatPrice;
window.getCategoryNameTranslated = getCategoryNameTranslated;
window.config = config;
