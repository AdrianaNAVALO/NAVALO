// Translations and currency settings
const config = {
    fr: {
        currency: "EUR",
        currencySymbol: "€",
        exchangeRate: 1,
        vatRate: 20,
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
        vatRate: 19,
        lang: "Deutsch",
        flag: "🇩🇪"
    },
    cz: {
        currency: "CZK",
        currencySymbol: "Kč",
        exchangeRate: 25.5,
        vatRate: 21,
        lang: "Čeština",
        flag: "🇨🇿"
    }
};

const translations = {
    cz: {
        // Navigation
        home: "Domů",
        products: "Produkty",
        contact: "Kontakt",
        navLinks: "Navigace",

        // Homepage
        heroLabel: "Certifikace EU · EPDM těsnění",
        heroTitle: "Lisovací tvarovky pro topení",
        heroSubtitle: "Profesionální kvalita pro vaše topné instalace",
        viewProducts: "Zobrazit produkty",
        learnMore: "Více informací",
        whyChooseUs: "Proč si vybrat Navalo?",
        premiumQuality: "Prémiová kvalita",
        premiumQualityDesc: "Evropsky certifikované díly splňující nejvyšší normy",
        fastDelivery: "Rychlé doručení",
        fastDeliveryDesc: "Expedice do 24–48 h od potvrzení objednávky",
        competitivePrices: "Konkurenční ceny",
        competitivePricesDesc: "Nejlepší ceny na trhu bez kompromisů v kvalitě",
        expertSupport: "Odborná podpora",
        expertSupportDesc: "Technické poradenství k dispozici Po–Pá 8–17 h",
        ourCategories: "Naše kategorie",

        // Stats
        statYears: "let zkušeností",
        statProducts: "produktů",
        statCountries: "zemí dodávek",
        statClients: "spokojených klientů",

        // Categories
        elbows: "Kolena",
        elbowsDesc: "90° rovná a s hladkým koncem",
        tees: "T-kusy",
        teesDesc: "Rovné, redukční a se závitem",
        couplings: "Spojky",
        couplingsDesc: "Přímé lisovací spojky",
        reducers: "Redukce",
        reducersDesc: "Všechny rozměry",
        adaptors: "Přechodky",
        adaptorsDesc: "S vnějším a vnitřním závitem",
        valves: "Kohouty",

        // Products page
        ourProducts: "Naše produkty",
        professionalQuality: "Lisovací tvarovky v profesionální kvalitě",
        all: "Vše",
        addToCart: "Přidat do košíku",
        addedToCart: "přidáno do košíku",

        // Cart
        myCart: "Můj košík",
        emptyCart: "Váš košík je prázdný",
        orderSummary: "Shrnutí objednávky",
        subtotal: "Mezisoučet",
        shipping: "Doprava",
        freeShipping: "zdarma",
        total: "Celkem",
        checkout: "Objednat",

        // Checkout
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
        processing: "Zpracovává se...",

        // Contact
        contactUs: "Kontaktujte nás",
        contactIntro: "Navalo vyvíjí vlastní systém přímé kondenzace pro úsporné vytápění budov s potenciálem snížení nákladů na topení o více než 50 %. Naše zkušenosti z oblasti moderních topných technologií přenášíme i do nabídky kvalitních lisovacích tvarovek a systémových řešení pro profesionální instalace. Dodáváme spolehlivé komponenty pro efektivní, rychlou a bezpečnou montáž rozvodů.",
        fullName: "Celé jméno",
        subject: "Předmět",
        selectSubject: "Vyberte předmět",
        orderQuestion: "Dotaz k objednávce",
        productInfo: "Informace o produktu",
        quoteRequest: "Žádost o nabídku",
        other: "Jiné",
        message: "Zpráva",
        sendMessage: "Odeslat zprávu",
        sending: "Odesílání...",
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

        // Success
        orderConfirmed: "Objednávka potvrzena!",
        orderConfirmedMsg: "Děkujeme za vaši objednávku. Obdržíte potvrzovací e-mail s podrobnostmi objednávky a sledováním zásilky.",
        orderNumber: "Číslo objednávky",
        continueShopping: "Pokračovat v nákupu",

        // Product detail
        backToProducts: "Zpět na produkty",
        productNotFound: "Produkt nenalezen",
        quantity: "Množství",
        viewDetails: "Detail produktu",
        technicalSpecs: "Technické specifikace",

        // Footer
        footerDesc: "Specialista na lisovací tvarovky pro topení",
        allRightsReserved: "Všechna práva vyhrazena",
        termsLink: "Obchodní podmínky",
        privacyLink: "Ochrana osobních údajů",
        agreeToTerms: 'Souhlasím s <a href="terms.html" target="_blank" style="color:var(--red)">obchodními podmínkami</a> a <a href="privacy.html" target="_blank" style="color:var(--red)">zásadami ochrany osobních údajů</a>',

        // Cookie banner
        cookieText: "Tento web používá cookies pro zapamatování košíku a nastavení jazyka. Žádné sledovací ani marketingové cookies nepoužíváme.",
        cookieAccept: "Přijmout",
        cookieDecline: "Odmítnout",

        // 404
        notFound: "Stránka nenalezena",
        notFoundMsg: "Stránka, kterou hledáte, neexistuje nebo byla přesunuta.",
        goHome: "Zpět na hlavní stránku",
        browseProducts: "Procházet produkty",

        // Shipping
        shippingMethod: "Způsob dopravy",
        calculatedAtCheckout: "Dopočítáno v objednávce",

        // Payment methods
        paymentMethod: "Způsob platby",
        card: "Platební karta",
        bankTransfer: "Bankovní převod",
        bankTransferInfo: "Platba po potvrzení objednávky",
        bankTransferDetail: "Po odeslání objednávky obdržíte email s platebními údaji.",
        accountNumber: "Číslo účtu",
        variableSymbol: "Variabilní symbol",
        variableSymbolInfo: "Číslo objednávky (zasláno emailem)",
        cod: "Dobírka",
        codInfo: "Platba při převzetí (CZ, SK)",

        // Validation errors
        errorRequired: "Toto pole je povinné",
        errorEmail: "Zadejte platnou e-mailovou adresu",
        errorPhone: "Neplatný formát telefonu",
        errorPostalCode: "Formát PSČ: XXX XX",
        errorIco: "IČO musí mít 8 číslic",
        errorCardNumber: "Zadejte 16místné číslo karty",
        errorExpiry: "Formát: MM/RR",
        errorCvv: "CVV: 3–4 číslice",
        stripeRedirectInfo: "Po kliknutí budete bezpečně přesměrováni na platební bránu Stripe, kde zadáte údaje své karty.",
        securedByStripe: "Zabezpečeno Stripe — Visa, Mastercard",
        errorPayment: "Chyba při zpracování. Zkuste to prosím znovu."
    },

    en: {
        home: "Home",
        products: "Products",
        contact: "Contact",
        navLinks: "Navigation",
        heroLabel: "EU Certified · EPDM Seals",
        heroTitle: "Press fittings for heating systems",
        heroSubtitle: "Professional quality for your heating installations",
        viewProducts: "View our products",
        learnMore: "Learn more",
        whyChooseUs: "Why choose Navalo?",
        premiumQuality: "Premium Quality",
        premiumQualityDesc: "European certified parts meeting the highest standards",
        fastDelivery: "Fast Delivery",
        fastDeliveryDesc: "Shipping within 24–48 h from order confirmation",
        competitivePrices: "Competitive Prices",
        competitivePricesDesc: "Best market prices without compromising on quality",
        expertSupport: "Expert Support",
        expertSupportDesc: "Technical advice available Mon–Fri 8am–5pm",
        ourCategories: "Our categories",
        statYears: "years of experience",
        statProducts: "products",
        statCountries: "delivery countries",
        statClients: "happy clients",
        elbows: "Elbows",
        elbowsDesc: "90° equal and plain end",
        tees: "Tees",
        teesDesc: "Equal, reducing and threaded",
        couplings: "Couplings",
        couplingsDesc: "Straight press-fit couplings",
        reducers: "Reducers",
        reducersDesc: "All dimensions",
        adaptors: "Adaptors",
        adaptorsDesc: "Male and female thread",
        valves: "Valves",
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
        processing: "Processing...",
        contactUs: "Contact us",
        contactIntro: "Navalo develops its own direct condensation system for energy-efficient building heating, with the potential to reduce heating costs by more than 50%. Our expertise in modern heating technology also extends to our range of high-quality press fittings and system solutions for professional installations. We supply reliable components for efficient, fast and safe pipe assembly.",
        fullName: "Full name",
        subject: "Subject",
        selectSubject: "Select a subject",
        orderQuestion: "Order question",
        productInfo: "Product information",
        quoteRequest: "Quote request",
        other: "Other",
        message: "Message",
        sendMessage: "Send message",
        sending: "Sending...",
        messageSent: "Thank you for your message! We will respond as soon as possible.",
        inclVat: "incl. VAT",
        exclVat: "excl. VAT",
        vat: "VAT",
        vatAmount: "VAT (20%)",
        customerType: "Customer type",
        individual: "Individual",
        company: "Company",
        companyName: "Company name",
        ico: "Company ID",
        vatNumber: "VAT number",
        differentBillingAddress: "Different billing address",
        billingAddress: "Billing address",
        billingCity: "City (billing)",
        billingPostalCode: "Postal code (billing)",
        orderConfirmed: "Order confirmed!",
        orderConfirmedMsg: "Thank you for your order. You will receive a confirmation email with order details and tracking information.",
        orderNumber: "Order number",
        continueShopping: "Continue shopping",
        backToProducts: "Back to products",
        productNotFound: "Product not found",
        quantity: "Quantity",
        viewDetails: "Product details",
        technicalSpecs: "Technical specifications",
        footerDesc: "Press fittings specialist for heating systems",
        allRightsReserved: "All rights reserved",
        termsLink: "Terms & Conditions",
        privacyLink: "Privacy Policy",
        agreeToTerms: 'I agree to the <a href="terms.html" target="_blank" style="color:var(--red)">Terms &amp; Conditions</a> and <a href="privacy.html" target="_blank" style="color:var(--red)">Privacy Policy</a>',

        // Cookie banner
        cookieText: "This website uses cookies to remember your cart and language settings. We do not use any tracking or marketing cookies.",
        cookieAccept: "Accept",
        cookieDecline: "Decline",

        // 404
        notFound: "Page not found",
        notFoundMsg: "The page you are looking for does not exist or has been moved.",
        goHome: "Back to homepage",
        browseProducts: "Browse products",

        // Shipping
        shippingMethod: "Shipping method",
        calculatedAtCheckout: "Calculated at checkout",

        // Payment methods
        paymentMethod: "Payment method",
        card: "Credit/debit card",
        bankTransfer: "Bank transfer",
        bankTransferInfo: "Payment after order confirmation",
        bankTransferDetail: "After placing your order, you will receive an email with payment details.",
        accountNumber: "Account number",
        variableSymbol: "Reference number",
        variableSymbolInfo: "Order number (sent by email)",
        cod: "Cash on delivery",
        codInfo: "Payment on delivery (CZ, SK)",

        // Validation errors
        errorRequired: "This field is required",
        errorEmail: "Enter a valid email address",
        errorPhone: "Invalid phone format",
        errorPostalCode: "Postal code format: XXX XX",
        errorIco: "Company ID must be 8 digits",
        errorCardNumber: "Enter a 16-digit card number",
        errorExpiry: "Format: MM/YY",
        errorCvv: "CVV: 3–4 digits",
        stripeRedirectInfo: "After clicking, you will be securely redirected to the Stripe payment gateway to enter your card details.",
        securedByStripe: "Secured by Stripe — Visa, Mastercard",
        errorPayment: "Payment processing error. Please try again."
    },

    de: {
        home: "Startseite",
        products: "Produkte",
        contact: "Kontakt",
        navLinks: "Navigation",
        heroLabel: "EU-zertifiziert · EPDM-Dichtungen",
        heroTitle: "Pressfittings für Heizungsanlagen",
        heroSubtitle: "Professionelle Qualität für Ihre Heizungsinstallationen",
        viewProducts: "Produkte ansehen",
        learnMore: "Mehr erfahren",
        whyChooseUs: "Warum Navalo wählen?",
        premiumQuality: "Premium-Qualität",
        premiumQualityDesc: "Europäisch zertifizierte Teile nach höchsten Normen",
        fastDelivery: "Schnelle Lieferung",
        fastDeliveryDesc: "Versand innerhalb von 24–48 h nach Bestellbestätigung",
        competitivePrices: "Wettbewerbsfähige Preise",
        competitivePricesDesc: "Beste Marktpreise ohne Abstriche bei der Qualität",
        expertSupport: "Expertenunterstützung",
        expertSupportDesc: "Technische Beratung Mo–Fr 8–17 Uhr verfügbar",
        ourCategories: "Unsere Kategorien",
        statYears: "Jahre Erfahrung",
        statProducts: "Produkte",
        statCountries: "Lieferländer",
        statClients: "zufriedene Kunden",
        elbows: "Bögen",
        elbowsDesc: "90°, gleich und Steckende",
        tees: "T-Stücke",
        teesDesc: "Gleich, reduziert und mit Gewinde",
        couplings: "Muffen",
        couplingsDesc: "Gerade Pressfitting-Muffen",
        reducers: "Reduzierstücke",
        reducersDesc: "Alle Abmessungen",
        adaptors: "Übergangsstücke",
        adaptorsDesc: "Außen- und Innengewinde",
        valves: "Hähne",
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
        processing: "Wird verarbeitet...",
        contactUs: "Kontaktieren Sie uns",
        contactIntro: "Navalo entwickelt ein eigenes Direktkondensationssystem für die energieeffiziente Gebäudeheizung mit dem Potenzial, die Heizkosten um mehr als 50 % zu senken. Unsere Erfahrung im Bereich moderner Heiztechnologien fließt auch in unser Angebot hochwertiger Pressfittings und Systemlösungen für professionelle Installationen ein. Wir liefern zuverlässige Komponenten für eine effiziente, schnelle und sichere Rohrleitungsmontage.",
        fullName: "Vollständiger Name",
        subject: "Betreff",
        selectSubject: "Betreff auswählen",
        orderQuestion: "Frage zur Bestellung",
        productInfo: "Produktinformation",
        quoteRequest: "Angebotsanfrage",
        other: "Sonstiges",
        message: "Nachricht",
        sendMessage: "Nachricht senden",
        sending: "Wird gesendet...",
        messageSent: "Vielen Dank für Ihre Nachricht! Wir werden so schnell wie möglich antworten.",
        inclVat: "inkl. MwSt",
        exclVat: "zzgl. MwSt",
        vat: "MwSt",
        vatAmount: "MwSt (19%)",
        customerType: "Kundentyp",
        individual: "Privatperson",
        company: "Unternehmen",
        companyName: "Firmenname",
        ico: "Handelsregisternummer",
        vatNumber: "USt-IdNr",
        differentBillingAddress: "Abweichende Rechnungsadresse",
        billingAddress: "Rechnungsadresse",
        billingCity: "Stadt (Rechnung)",
        billingPostalCode: "PLZ (Rechnung)",
        orderConfirmed: "Bestellung bestätigt!",
        orderConfirmedMsg: "Vielen Dank für Ihre Bestellung. Sie erhalten eine Bestätigungs-E-Mail mit Bestelldetails und Tracking-Informationen.",
        orderNumber: "Bestellnummer",
        continueShopping: "Weiter einkaufen",
        backToProducts: "Zurück zu Produkten",
        productNotFound: "Produkt nicht gefunden",
        quantity: "Menge",
        viewDetails: "Produktdetails",
        technicalSpecs: "Technische Spezifikationen",
        footerDesc: "Spezialist für Pressfittings für Heizungsanlagen",
        allRightsReserved: "Alle Rechte vorbehalten",
        termsLink: "AGB",
        privacyLink: "Datenschutzerklärung",
        agreeToTerms: 'Ich stimme den <a href="terms.html" target="_blank" style="color:var(--red)">AGB</a> und der <a href="privacy.html" target="_blank" style="color:var(--red)">Datenschutzerklärung</a> zu',

        // Cookie banner
        cookieText: "Diese Website verwendet Cookies, um Ihren Warenkorb und Ihre Spracheinstellungen zu speichern. Wir verwenden keine Tracking- oder Marketing-Cookies.",
        cookieAccept: "Akzeptieren",
        cookieDecline: "Ablehnen",

        // 404
        notFound: "Seite nicht gefunden",
        notFoundMsg: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
        goHome: "Zur Startseite",
        browseProducts: "Produkte ansehen",

        // Shipping
        shippingMethod: "Versandart",
        calculatedAtCheckout: "An der Kasse berechnet",

        // Payment methods
        paymentMethod: "Zahlungsart",
        card: "Kredit-/Debitkarte",
        bankTransfer: "Banküberweisung",
        bankTransferInfo: "Zahlung nach Auftragsbestätigung",
        bankTransferDetail: "Nach der Bestellung erhalten Sie eine E-Mail mit den Zahlungsdaten.",
        accountNumber: "Kontonummer",
        variableSymbol: "Verwendungszweck",
        variableSymbolInfo: "Bestellnummer (per E-Mail gesendet)",
        cod: "Nachnahme",
        codInfo: "Zahlung bei Lieferung (CZ, SK)",

        // Validation errors
        errorRequired: "Dieses Feld ist erforderlich",
        errorEmail: "Gültige E-Mail-Adresse eingeben",
        errorPhone: "Ungültiges Telefonformat",
        errorPostalCode: "PLZ-Format: XXX XX",
        errorIco: "Unternehmens-ID muss 8 Ziffern haben",
        errorCardNumber: "16-stellige Kartennummer eingeben",
        errorExpiry: "Format: MM/JJ",
        errorCvv: "CVV: 3–4 Ziffern",
        stripeRedirectInfo: "Nach dem Klicken werden Sie sicher zur Stripe-Zahlungsseite weitergeleitet, wo Sie Ihre Kartendaten eingeben.",
        securedByStripe: "Gesichert durch Stripe — Visa, Mastercard",
        errorPayment: "Fehler bei der Verarbeitung. Bitte versuchen Sie es erneut."
    },

    fr: {
        home: "Accueil",
        products: "Produits",
        contact: "Contact",
        navLinks: "Navigation",
        heroLabel: "Certifié UE · Joints EPDM",
        heroTitle: "Pièces à sertir pour le chauffage",
        heroSubtitle: "Qualité professionnelle pour vos installations de chauffage",
        viewProducts: "Voir nos produits",
        learnMore: "En savoir plus",
        whyChooseUs: "Pourquoi choisir Navalo ?",
        premiumQuality: "Qualité Premium",
        premiumQualityDesc: "Pièces certifiées aux normes européennes les plus strictes",
        fastDelivery: "Livraison Rapide",
        fastDeliveryDesc: "Expédition sous 24–48 h après confirmation de commande",
        competitivePrices: "Prix Compétitifs",
        competitivePricesDesc: "Les meilleurs prix du marché sans compromis sur la qualité",
        expertSupport: "Support Expert",
        expertSupportDesc: "Conseils techniques disponibles Lu–Ve 8h–17h",
        ourCategories: "Nos catégories",
        statYears: "ans d'expérience",
        statProducts: "produits",
        statCountries: "pays de livraison",
        statClients: "clients satisfaits",
        elbows: "Coudes",
        elbowsDesc: "90°, égal et sortie lisse",
        tees: "Tés",
        teesDesc: "Égaux, réduits et filetés",
        couplings: "Manchons",
        couplingsDesc: "Manchons droits à sertir",
        reducers: "Réductions",
        reducersDesc: "Toutes dimensions",
        adaptors: "Adaptateurs",
        adaptorsDesc: "Filetage mâle et femelle",
        valves: "Vannes",
        ourProducts: "Nos produits",
        professionalQuality: "Pièces à sertir de qualité professionnelle",
        all: "Tous",
        addToCart: "Ajouter au panier",
        addedToCart: "ajouté au panier",
        myCart: "Mon panier",
        emptyCart: "Votre panier est vide",
        orderSummary: "Résumé de la commande",
        subtotal: "Sous-total",
        shipping: "Livraison",
        freeShipping: "offerte",
        total: "Total",
        checkout: "Passer commande",
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
        processing: "Traitement en cours...",
        contactUs: "Contactez-nous",
        contactIntro: "Navalo développe son propre système de condensation directe pour un chauffage économique des bâtiments, avec le potentiel de réduire les coûts de chauffage de plus de 50 %. Notre expertise dans les technologies de chauffage modernes se reflète également dans notre gamme de raccords à sertir de qualité et de solutions systèmes pour les installations professionnelles. Nous fournissons des composants fiables pour un montage de canalisations efficace, rapide et sûr.",
        fullName: "Nom complet",
        subject: "Sujet",
        selectSubject: "Sélectionnez un sujet",
        orderQuestion: "Question sur une commande",
        productInfo: "Information produit",
        quoteRequest: "Demande de devis",
        other: "Autre",
        message: "Message",
        sendMessage: "Envoyer le message",
        sending: "Envoi en cours...",
        messageSent: "Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.",
        inclVat: "TTC",
        exclVat: "HT",
        vat: "TVA",
        vatAmount: "TVA (20%)",
        customerType: "Type de client",
        individual: "Particulier",
        company: "Société",
        companyName: "Nom de la société",
        ico: "SIRET",
        vatNumber: "N° TVA intracommunautaire",
        differentBillingAddress: "Adresse de facturation différente",
        billingAddress: "Adresse de facturation",
        billingCity: "Ville (facturation)",
        billingPostalCode: "Code postal (facturation)",
        orderConfirmed: "Commande confirmée !",
        orderConfirmedMsg: "Merci pour votre commande. Vous recevrez un email de confirmation avec les détails de votre commande et le suivi de livraison.",
        orderNumber: "Numéro de commande",
        continueShopping: "Continuer mes achats",
        backToProducts: "Retour aux produits",
        productNotFound: "Produit introuvable",
        quantity: "Quantité",
        viewDetails: "Détails du produit",
        technicalSpecs: "Spécifications techniques",
        footerDesc: "Spécialiste des pièces à sertir pour le chauffage",
        allRightsReserved: "Tous droits réservés",
        termsLink: "CGV",
        privacyLink: "Politique de confidentialité",
        agreeToTerms: 'J\'accepte les <a href="terms.html" target="_blank" style="color:var(--red)">CGV</a> et la <a href="privacy.html" target="_blank" style="color:var(--red)">Politique de confidentialité</a>',

        // Cookie banner
        cookieText: "Ce site utilise des cookies pour mémoriser votre panier et vos préférences de langue. Nous n'utilisons aucun cookie de suivi ou de marketing.",
        cookieAccept: "Accepter",
        cookieDecline: "Refuser",

        // 404
        notFound: "Page introuvable",
        notFoundMsg: "La page que vous recherchez n'existe pas ou a été déplacée.",
        goHome: "Retour à l'accueil",
        browseProducts: "Voir les produits",

        // Shipping
        shippingMethod: "Mode de livraison",
        calculatedAtCheckout: "Calculé à la commande",

        // Payment methods
        paymentMethod: "Mode de paiement",
        card: "Carte de paiement",
        bankTransfer: "Virement bancaire",
        bankTransferInfo: "Paiement après confirmation de commande",
        bankTransferDetail: "Après votre commande, vous recevrez un e-mail avec les coordonnées bancaires.",
        accountNumber: "Numéro de compte",
        variableSymbol: "Référence de paiement",
        variableSymbolInfo: "Numéro de commande (envoyé par e-mail)",
        cod: "Contre remboursement",
        codInfo: "Paiement à la livraison (CZ, SK)",

        // Validation errors
        errorRequired: "Ce champ est obligatoire",
        errorEmail: "Entrez une adresse e-mail valide",
        errorPhone: "Format de téléphone invalide",
        errorPostalCode: "Format code postal : XXX XX",
        errorIco: "L'identifiant d'entreprise doit avoir 8 chiffres",
        errorCardNumber: "Entrez un numéro de carte à 16 chiffres",
        errorExpiry: "Format : MM/AA",
        errorCvv: "CVV : 3–4 chiffres",
        stripeRedirectInfo: "Après avoir cliqué, vous serez redirigé en toute sécurité vers la passerelle de paiement Stripe pour saisir vos coordonnées bancaires.",
        securedByStripe: "Sécurisé par Stripe — Visa, Mastercard",
        errorPayment: "Erreur de traitement. Veuillez réessayer."
    }
};

// Product name translations
const productNames = {
    cz: {
        "elbow90": "Lisovací koleno 90°",
        "elbow45": "Lisovací koleno 45°",
        "teeEqual": "Lisovací T-kus",
        "teeReduced": "Lisovací redukční T-kus",
        "coupling": "Lisovací spojka",
        "reducer": "Lisovací redukce"
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
    fr: {
        "elbow90": "Coude 90° à sertir",
        "elbow45": "Coude 45° à sertir",
        "teeEqual": "Té égal à sertir",
        "teeReduced": "Té réduit à sertir",
        "coupling": "Manchon à sertir",
        "reducer": "Réduction à sertir"
    }
};

// Category translations
const categoryNames = {
    cz: { coudes: "Kolena", tes: "T-kusy", manchons: "Spojky", reductions: "Redukce", adaptors: "Přechodky", vannes: "Kohouty" },
    en: { coudes: "Elbows", tes: "Tees", manchons: "Couplings", reductions: "Reducers", adaptors: "Adaptors", vannes: "Valves" },
    de: { coudes: "Bögen", tes: "T-Stücke", manchons: "Muffen", reductions: "Reduzierstücke", adaptors: "Übergangsstücke", vannes: "Hähne" },
    fr: { coudes: "Coudes", tes: "Tés", manchons: "Manchons", reductions: "Réductions", adaptors: "Adaptateurs", vannes: "Vannes" }
};

// Get current language — default: Czech
// v2 reset: clear old stored language so new default (cz) applies
function getCurrentLang() {
    if (localStorage.getItem('navalo_lang_v') !== '2') {
        localStorage.removeItem('navalo_lang');
        localStorage.setItem('navalo_lang_v', '2');
    }
    return localStorage.getItem('navalo_lang') || 'cz';
}

// Set language
function setLang(lang) {
    localStorage.setItem('navalo_lang', lang);
    location.reload();
}

// Get translation
function t(key) {
    const lang = getCurrentLang();
    return translations[lang][key] || translations['cz'][key] || key;
}

// VAT rates by country (EU + common destinations)
const vatRates = {
    // Czech Republic first (home country)
    CZ: { rate: 21,   name: "Česká republika" },

    // EU member states — alphabetical
    AT: { rate: 20,   name: "Österreich" },
    BE: { rate: 21,   name: "Belgique / België" },
    BG: { rate: 20,   name: "България" },
    CY: { rate: 19,   name: "Κύπρος" },
    DE: { rate: 19,   name: "Deutschland" },
    DK: { rate: 25,   name: "Danmark" },
    EE: { rate: 22,   name: "Eesti" },
    ES: { rate: 21,   name: "España" },
    FI: { rate: 25.5, name: "Suomi" },
    FR: { rate: 20,   name: "France" },
    GR: { rate: 24,   name: "Ελλάδα" },
    HR: { rate: 25,   name: "Hrvatska" },
    HU: { rate: 27,   name: "Magyarország" },
    IE: { rate: 23,   name: "Ireland" },
    IT: { rate: 22,   name: "Italia" },
    LT: { rate: 21,   name: "Lietuva" },
    LU: { rate: 17,   name: "Luxembourg" },
    LV: { rate: 21,   name: "Latvija" },
    MT: { rate: 18,   name: "Malta" },
    NL: { rate: 21,   name: "Nederland" },
    PL: { rate: 23,   name: "Polska" },
    PT: { rate: 23,   name: "Portugal" },
    RO: { rate: 19,   name: "România" },
    SE: { rate: 25,   name: "Sverige" },
    SI: { rate: 22,   name: "Slovenija" },
    SK: { rate: 20,   name: "Slovensko" },

    // Non-EU common destinations
    CH: { rate: 8.1,  name: "Schweiz / Suisse" },
    GB: { rate: 20,   name: "United Kingdom" },
    NO: { rate: 25,   name: "Norge" },
    UA: { rate: 20,   name: "Україна" }
};

function getVatRate(countryCode) {
    return vatRates[countryCode]?.rate || 21;
}

function getCountries() {
    return vatRates;
}

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
window.productNames = productNames;
