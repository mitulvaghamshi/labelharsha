import ALL_PRODUCTS from './items.json' with { type: 'json' };

const Inventory = {};

const root = document.getElementById("product-container");

Inventory.Catalog = ((root) => {
    const d1g1 = [
        "LH001/NA",
        "LH002/NA",
        "LH003/NA",
        "LH004/NA",
        "LH005/NA",
        "LH006/NA",
        "LH007/NA",
        "LH008/NA",
        "LH009/NA",
        "LH010/NA",
        "LH011/NA",
        "LH012/NA",
        "LH013/NA",
        "LH014/NA",
        "LH015/NA",
        "LH016/NA",
        "LH017/NA",
        "LH018/NA",
        "LH019/NA",
        "LH020/NA",
        "LH021/NA",
        "LH022/NA",
        "LH023/NA",
    ]; // tall singles

    const d2g1 = [
        "LH001-01/NA",
        "LH001-02/NA",
        "LH001-03/NA",
        "LH001-04/NA",
    ]; // wide grouped

    const d2g2 = [
        "LH002-01/NA",
        "LH002-02/NA",
        "LH002-03/NA",
        "LH002-04/NA",
    ]; // wide grouped

    const d2g3 = [
        "LH003-01/NA",
        "LH003-02/NA",
        "LH003-03/NA",
    ]; // wide grouped

    const d2g4 = [
        "LH004-01/NA",
        "LH004-02/NA",
        "LH004-03/NA",
        "LH004-04/NA",
    ]; // wide grouped

    const d2g5 = [
        "LH005-01/NA",
        "LH005-02/NA",
    ]; // wide grouped

    const d2g6 = [
        "LH006-01/NA",
        "LH006-02/NA",
        "LH006-03/NA",
    ]; // wide grouped

    const d3g1 = [
        "LH007-01/NA",
        "LH007-02/NA",
        "LH007-03/NA",
        "LH007-04/NA",
        "LH007-05/NA",
        "LH007-06/NA",
        "LH007-07/NA",
    ]; // tall grouped

    const d3g2 = [
        "LH008-01/NA",
        "LH008-02/NA",
        "LH008-03/NA",
        "LH008-04/NA",
        "LH008-05/NA",
        "LH008-06/NA",
        "LH008-07/NA",
    ]; // tall grouped

    const d4g1 = [
        "LH009-01/NA",
        "LH009-02/NA",
    ]; // tall grouped

    const d4g2 = [
        "LH010-01/NA",
        "LH010-02/NA",
    ]; // tall grouped

    const productGroups = [
        {
            "type": "tall",
            "group": false,
            "items": d1g1,
        },
        {
            "type": "wide",
            "group": true,
            "items": [
                d2g1,
                d2g2,
                d2g3,
                d2g4,
                d2g5,
                d2g6,
            ],
        },
        {
            "type": "tall",
            "group": true,
            "items": [
                d3g1,
                d3g2,
                d4g1,
                d4g2,
            ],
        },
    ];

    // Define which "raw" data categories belong to which "UI" category
    const categoryMap = {
        'kurta_set': [
            'kurta + pants (set)', 'kurta set', 'kurta + trousers (set)',
            'kurta + trousers', 'kurta + palazzo + dupatta', 'kurta + pants + dupatta',
            'kurta + palazzo + dupatta', 'kurta + trousers + dupatta', 'silk kurta set',
            'suit set', 'explicit suit set', 'standard kurta'
        ],
        'tunic_kaftan': [
            'tunic/kaftan', 'co-ord tunic', 'poncho/tunic + palazzo',
            'tunic + pants', 'short kurti + palazzo + dupatta'
        ],
        'co_ord': [
            'co-ord set/gown style', 'long kurta/gown style', 'tunic + pants (co-ord)'
        ],
        'single_kurta': [
            'single kurta', 'short kurta', 'straight kurta'
        ],
        'special': [
            'silk kurta', 'silk kurta set'
        ],
    };

    const cf = new Intl.NumberFormat(undefined, {
        style: "currency", currency: "INR"
    });

    function _buildItems(itemIds, hasMultiple) {
        return itemIds.map(itemId => {
            const item = ALL_PRODUCTS.find(p => p.tag === itemId);
            if (!item) {
                console.debug(`Unable to find Item with Id: '${itemId}'`);
                return "";
            }
            return `<div class="product-card" data-category="${item.category}">
                <div class="product-card-img">
                    <img src="items/${item.image}" alt="${item.product} (${item.tag})" loading="lazy">
                    ${hasMultiple ? `<div class="product-card_nav">
                        <button class="prev" aria-label="Previous Slide">&#10094;</button>
                        <button class="next" aria-label="Next Slide">&#10095;</button>
                    </div>` : ''}
                </div>
                <div class="product-card-details">
                    <span class="product-card-badge ${String(item.badge).toLowerCase().includes("out") ? `product-card-badge-oos` : ``}">${item.badge}</span>
                    <span class="product-card-id">${item.tag}</span>
                    <h3 class="product-card-title">${item.product}</h3>
                    <span class="product-card-material">${item.material}</span>
                    <p class="product-card-desc">${item.description}</p>
                    <div class="price-container">
                        <span class="price-current">${cf.format(item.price)}/-</span>
                        ${(+item.discount) > 0 ? `<span class="price-original">${cf.format(item.price * (1 + item.discount / 100))}</span>
                        <span class="price-discount">${item.discount} OFF</span>` : ''}
                    </div>
                    <a href="https://wa.me/919033310101?text=Hi Label Harsha, I am interested in inquiring about the '${item.product} (${item.tag})'. Could you please share more details." target="_blank" class="btn-whatsapp">
                        <img src="icons/whatsapp.svg" alt="WhatsApp">
                    </a>
                </div>
            </div>`;
        }).join("");
    }

    function _populate() {
        productGroups.forEach(set => {
            root.innerHTML += `<div id="product-card-container-${set.type}" class="product-grid-${set.type}">
                ${set.group ? set.items.map(itemIds => `<div class="slider"><div class="slides">
                    ${_buildItems(itemIds, true)}
                </div></div>`).join("") : _buildItems(set.items)}
            </div>
            <div style="height: 35px;"></div>`;
        });
    }

    function _filter(category, element) {
        // Update active button UI
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        element.classList.add('active');

        // Toggle element card visibility based on data attributes
        const cards = document.querySelectorAll(".product-card");
        cards.forEach(card => {
            const cardCategory = card.getAttribute("data-category");
            card.style.opacity = "0";
            card.style.transform = "translateY(10px)";

            setTimeout(() => {
                if (category === "all" || categoryMap[category].includes(cardCategory)) {
                    card.style.display = "flex";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "translateY(0)";
                    }, 50);
                } else {
                    card.style.display = "none";
                }
            }, 200);
        });
    }

    return {
        populateItems: _populate,
        filter: _filter,
    };
})(root);

Inventory.Utility = (() => {
    const sunIcon = document.getElementById("theme-sun-icon");
    const moonIcon = document.getElementById("theme-moon-icon");
    const themeToggleText = document.getElementById("theme-toggle-text");

    // Initialize theme settings on load
    function _initTheme() {
        // Check local storage or system preference
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "theme-light" || (!savedTheme && !prefersDark)) {
            _setLightTheme();
        } else {
            _setDarkTheme();
        }
    }

    function _setLightTheme() {
        document.documentElement.className = "theme-light";
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
        if (themeToggleText) themeToggleText.textContent = "Dark Mode";
        localStorage.setItem("theme", "theme-light");
    }

    function _setDarkTheme() {
        document.documentElement.className = "theme-dark";
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
        if (themeToggleText) themeToggleText.textContent = "Light Mode";
        localStorage.setItem("theme", "theme-dark");
    }

    function _setupSliderNavigation() {
        // Select all cards that have buttons inside them
        document.querySelectorAll('.product-card').forEach(card => {
            // Find the parent .slides container
            const slideContainer = card.closest('.slides');
            const prevBtn = card.querySelector('.prev');
            const nextBtn = card.querySelector('.next');

            if (slideContainer && prevBtn && nextBtn) {
                nextBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation(); // Stop the event from bubbling up
                    slideContainer.scrollBy({ left: slideContainer.offsetWidth, behavior: 'smooth' });
                });
                prevBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    slideContainer.scrollBy({ left: -slideContainer.offsetWidth, behavior: 'smooth' });
                });
            }
        });
    }

    return {
        setupSliderNavigation: _setupSliderNavigation,
        initTheme: _initTheme,
        handleThemeChange: () => {
            if (document.documentElement.classList.contains("theme-dark")) {
                _setLightTheme();
            } else {
                _setDarkTheme();
            }
        },
    };
})();

// Menu dynamic category filter, direct reference in html code.
function filterCatalog(category, element) {
    Inventory.Catalog.filter(category, element);
}

// Navigation Logic for Mobile Hamburger Menu
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

// Toggle menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked (useful for single-page navigation)
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Back to top scroll listener
window.addEventListener("scroll", (_) => {
    const backToTopBtn = document.getElementById("back-to-top");
    if (window.scrollY > 400) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

// Init on page load
window.addEventListener("DOMContentLoaded", (_) => {
    Inventory.Utility.initTheme();
    root.innerHTML = "";
    Inventory.Catalog.populateItems();
    Inventory.Utility.setupSliderNavigation();
});

// Theme Toggle Elements
document.getElementById("theme-toggle").addEventListener('click', (_) => {
    Inventory.Utility.handleThemeChange();
});
