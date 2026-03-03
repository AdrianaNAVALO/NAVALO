// Product data
const products = [
    // Coudes
    {
        id: 1,
        name: "Coude à sertir",
        category: "coudes",
        diameter: "16mm",
        price: 4.50,
        image: "images/produit-1.png"
    },
    {
        id: 2,
        name: "Coude 90° à sertir",
        category: "coudes",
        diameter: "20mm",
        price: 5.80,
        icon: "🔧"
    },
    {
        id: 3,
        name: "Coude 90° à sertir",
        category: "coudes",
        diameter: "26mm",
        price: 7.90,
        icon: "🔧"
    },
    {
        id: 4,
        name: "Coude 45° à sertir",
        category: "coudes",
        diameter: "16mm",
        price: 4.20,
        icon: "🔧"
    },
    {
        id: 5,
        name: "Coude 45° à sertir",
        category: "coudes",
        diameter: "20mm",
        price: 5.50,
        icon: "🔧"
    },
    // Tés
    {
        id: 6,
        name: "Té égal à sertir",
        category: "tes",
        diameter: "16mm",
        price: 6.90,
        icon: "⚙️"
    },
    {
        id: 7,
        name: "Té égal à sertir",
        category: "tes",
        diameter: "20mm",
        price: 8.50,
        icon: "⚙️"
    },
    {
        id: 8,
        name: "Té égal à sertir",
        category: "tes",
        diameter: "26mm",
        price: 11.20,
        icon: "⚙️"
    },
    {
        id: 9,
        name: "Té réduit à sertir",
        category: "tes",
        diameter: "20-16-20mm",
        price: 9.90,
        icon: "⚙️"
    },
    {
        id: 10,
        name: "Té réduit à sertir",
        category: "tes",
        diameter: "26-20-26mm",
        price: 12.50,
        icon: "⚙️"
    },
    // Manchons
    {
        id: 11,
        name: "Manchon à sertir",
        category: "manchons",
        diameter: "22 mm",
        price: 3.20,
        icon: "🔩"
    },
    {
        id: 12,
        name: "Manchon à sertir",
        category: "manchons",
        diameter: "28mm",
        price: 4.10,
        icon: "🔩"
    },
    {
        id: 13,
        name: "Manchon à sertir",
        category: "manchons",
        diameter: "26mm",
        price: 5.40,
        icon: "🔩"
    },
    {
        id: 14,
        name: "Manchon à sertir",
        category: "manchons",
        diameter: "32mm",
        price: 7.80,
        icon: "🔩"
    },
    // Réductions
    {
        id: 15,
        name: "Réduction à sertir",
        category: "reductions",
        diameter: "20-16mm",
        price: 4.90,
        icon: "🔗"
    },
    {
        id: 16,
        name: "Réduction à sertir",
        category: "reductions",
        diameter: "26-20mm",
        price: 6.20,
        icon: "🔗"
    },
    {
        id: 17,
        name: "Réduction à sertir",
        category: "reductions",
        diameter: "32-26mm",
        price: 8.50,
        icon: "🔗"
    },
    {
        id: 18,
        name: "Réduction à sertir",
        category: "reductions",
        diameter: "26-16mm",
        price: 6.80,
        icon: "🔗"
    }
];

// Get products by category
function getProductsByCategory(category) {
    if (!category || category === 'all') {
        return products;
    }
    return products.filter(p => p.category === category);
}

// Get product by ID
function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

// Render products
function renderProducts(productList, containerId = 'products-grid') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = productList.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                ${product.image
                    ? `<img src="${product.image}" alt="${product.name}">`
                    : product.icon}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="category">${getCategoryNameTranslated(product.category)}</p>
                <p class="diameter">Ø ${product.diameter}</p>
                <p class="price">${formatPrice(product.price)} <small>${t('inclVat')}</small></p>
                <div class="product-actions">
                    <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">
                        ${t('addToCart')}
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Get category display name
function getCategoryName(category) {
    const names = {
        'coudes': 'Coudes',
        'tes': 'Tés',
        'manchons': 'Manchons',
        'reductions': 'Réductions'
    };
    return names[category] || category;
}

// Initialize products page
function initProductsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('cat');

    // Set active filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        if (btn.dataset.category === (category || 'all')) {
            btn.classList.add('active');
        }

        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const cat = btn.dataset.category;
            const filteredProducts = getProductsByCategory(cat);
            renderProducts(filteredProducts);

            // Update URL without reload
            const url = new URL(window.location);
            if (cat && cat !== 'all') {
                url.searchParams.set('cat', cat);
            } else {
                url.searchParams.delete('cat');
            }
            window.history.pushState({}, '', url);
        });
    });

    // Render initial products
    const filteredProducts = getProductsByCategory(category);
    renderProducts(filteredProducts);
}

// Export for use in other files
window.products = products;
window.getProductById = getProductById;
window.initProductsPage = initProductsPage;
