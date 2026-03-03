// Cookie consent banner
// Stores user choice in localStorage under key 'navalo_cookie_consent'
// Values: 'accepted' | 'declined'

(function () {
    const STORAGE_KEY = 'navalo_cookie_consent';

    // Already answered — don't show banner
    if (localStorage.getItem(STORAGE_KEY)) return;

    function getCookieTranslations() {
        const lang = localStorage.getItem('navalo_lang') || 'cz';
        const map = {
            cz: {
                text: 'Tento web používá cookies pro zapamatování košíku a nastavení jazyka. Žádné sledovací ani marketingové cookies nepoužíváme.',
                accept: 'Přijmout',
                decline: 'Odmítnout'
            },
            en: {
                text: 'This website uses cookies to remember your cart and language settings. We do not use any tracking or marketing cookies.',
                accept: 'Accept',
                decline: 'Decline'
            },
            de: {
                text: 'Diese Website verwendet Cookies, um Ihren Warenkorb und Ihre Spracheinstellungen zu speichern. Wir verwenden keine Tracking- oder Marketing-Cookies.',
                accept: 'Akzeptieren',
                decline: 'Ablehnen'
            },
            fr: {
                text: 'Ce site utilise des cookies pour mémoriser votre panier et vos préférences de langue. Nous n\'utilisons aucun cookie de suivi ou de marketing.',
                accept: 'Accepter',
                decline: 'Refuser'
            }
        };
        return map[lang] || map.cz;
    }

    function dismissBanner(banner, choice) {
        localStorage.setItem(STORAGE_KEY, choice);
        banner.classList.add('cookie-banner--hidden');
        setTimeout(() => banner.remove(), 400);
    }

    function createBanner() {
        const L = getCookieTranslations();

        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Cookie consent');
        banner.innerHTML = `
            <div class="cookie-banner__inner">
                <svg class="cookie-banner__icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
                    <path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/>
                </svg>
                <p class="cookie-banner__text">${L.text}</p>
                <div class="cookie-banner__actions">
                    <button class="cookie-banner__btn cookie-banner__btn--decline" id="cookie-decline">${L.decline}</button>
                    <button class="cookie-banner__btn cookie-banner__btn--accept" id="cookie-accept">${L.accept}</button>
                </div>
            </div>`;

        document.body.appendChild(banner);

        // Animate in
        requestAnimationFrame(() => {
            requestAnimationFrame(() => banner.classList.add('cookie-banner--visible'));
        });

        banner.querySelector('#cookie-accept').addEventListener('click', () => dismissBanner(banner, 'accepted'));
        banner.querySelector('#cookie-decline').addEventListener('click', () => dismissBanner(banner, 'declined'));
    }

    // Wait for DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createBanner);
    } else {
        createBanner();
    }
})();
