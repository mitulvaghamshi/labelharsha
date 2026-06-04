// Theme Toggle Elements
const themeBtn = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("theme-sun-icon");
const moonIcon = document.getElementById("theme-moon-icon");
const themeToggleText = document.getElementById("theme-toggle-text");

// Initialize theme settings on load
function initTheme() {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "theme-light" || (!savedTheme && !prefersDark)) {
        setLightTheme();
    } else {
        setDarkTheme();
    }
}

function setLightTheme() {
    document.documentElement.className = "theme-light";
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
    if (themeToggleText) themeToggleText.textContent = "Dark Mode";
    localStorage.setItem("theme", "theme-light");
}

function setDarkTheme() {
    document.documentElement.className = "theme-dark";
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
    if (themeToggleText) themeToggleText.textContent = "Light Mode";
    localStorage.setItem("theme", "theme-dark");
}

// Click listener for theme toggle
themeBtn.addEventListener("click", () => {
    if (document.documentElement.classList.contains("theme-dark")) {
        setLightTheme();
    } else {
        setDarkTheme();
    }
});

// Menu dynamic category filter, direct reference in html code.
function filterCatalog(category, btnElement) {
    // Remove active classes from all filter buttons
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => btn.classList.remove("active"));

    // Add active class to clicked button
    if (btnElement) btnElement.classList.add("active");

    // Toggle element card visibility based on data attributes
    const cards = document.querySelectorAll(".product-card");
    cards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        card.style.opacity = "0";
        card.style.transform = "translateY(10px)";

        setTimeout(() => {
            if (category === "all" || cardCategory === category) {
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

// Populate catalog from JSON data
function populateCatalog() {
    const containerTall = document.getElementById("product-card-container");
    const containerWide = document.getElementById("product-card-container-wide");
    containerTall.innerHTML = "";
    containerWide.innerHTML = "";
    data.forEach(item => {
        const cardsHtml = `
        <div class="product-card fade-in-card" id="product-card-${item.id}" data-category="${item.category}">
            <div class="product-card-img" id="product-card-img-${item.id}">
                <img src="items/${item.image}" alt="${item.product}" loading="lazy"fetchpriority="high">
                <span class="product-card-badge" id="badge-item-${item.id}">${item.badge}</span>
            </div>
            <div class="product-card-details">
                <span class="product-card-id" id="product-card-id-${item.id}">#${item.id}</span>
                <h3 class="product-card-title" id="card-title-item-${item.id}">${item.product}</h3>
                <span class="product-card-material" id="card-material-item-${item.id}">${item.material}</span>
                <p class="product-card-desc" id="card-desc-item-${item.id}">${item.description}</p>
                <div class="price-container">
                    <span class="price-current" id="price-current-${item.id}">₹${item.priceCurrent}</span>
                    <span class="price-original" id="price-original-${item.id}">₹${item.priceOriginal}</span>
                    <span class="price-discount" id="price-discount-${item.id}">${item.priceDiscount}</span>
                </div>
                <a href="https://wa.me/919033310101?text=Hi Label Harsha, I am interested in inquiring about the '${item.product} (LH-${item.id})'. Could you please share more details." target="_blank" class="btn-whatsapp">
                    <img src="icons/wp.svg" alt="WhatsApp" width="28px" height="28px" class="btn-whatsapp-icon" loading="lazy">
                    <span id="btn-whatsapp-text">Inquire on WhatsApp</span>
                </a>
            </div>
        </div>`;
        if (item.id <= 12) {
            containerTall.innerHTML += cardsHtml;
        } else {
            containerWide.innerHTML += cardsHtml;
        }
    });
}

// Back to top scroll listener
window.addEventListener("scroll", () => {
    const backToTopBtn = document.getElementById("back-to-top");
    if (window.scrollY > 400) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

// Init on page load
window.addEventListener("DOMContentLoaded", () => {
    initTheme();
    populateCatalog();
});

const data = [
    {
        "id": "1",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item1.webp",
        "product": "Terracotta Slit Tassel Kurta",
        "material": "Premium Slub Cotton",
        "category": "kurtas",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Elegant sleeveless rust-red kurta featuring a high center slit with patterned blue accents and front tassels."
    },
    {
        "id": "2",
        "product-id": "LH",
        "badge": "New Arrival",
        "image": "item2.webp",
        "product": "Indigo Leaf Printed Kurta",
        "material": "Soft Crepe Silk",
        "category": "kurtas",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "A striking royal blue long-sleeved kurta adorned with a contrast leaf-and-flower motif on the front."
    },
    {
        "id": "3",
        "product-id": "LH",
        "badge": "Signature",
        "image": "item3.webp",
        "product": "Charcoal Floral Contrast Kurta",
        "material": "Chanderi Blend",
        "category": "kurtas",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Modern greyish-brown straight kurta featuring contrast black panels and bold printed floral outlines."
    },
    {
        "id": "4",
        "product-id": "LH",
        "badge": "Trending",
        "image": "item4.webp",
        "product": "Magenta Kaftan Dress",
        "material": "Flowy Georgette",
        "category": "tunics",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "A luxurious flowy kaftan dress in rich magenta featuring a symmetric ivory white pattern and a relaxed drape."
    },
    {
        "id": "5",
        "product-id": "LH",
        "badge": "Pure Fabric",
        "image": "item5.webp",
        "product": "Pastel Blue Peplum Set",
        "material": "Soft Muslin Cotton",
        "category": "tunics",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Sleeveless short peplum style kurti in light blue and lime green print, paired with green leaf patterned pants."
    },
    {
        "id": "6",
        "product-id": "LH",
        "badge": "Classic Fit",
        "image": "item6.webp",
        "product": "Fuchsia Kutch Embroidered Set",
        "material": "Art Silk",
        "category": "kurtas",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Fuchsia/magenta kurta with multi-colored Gujarati embroidery and tassel details, paired with matching trousers."
    },
    {
        "id": "7",
        "product-id": "LH",
        "badge": "Vibrant Block",
        "image": "item7.webp",
        "product": "Cream Mauve Ombre Set",
        "material": "Premium Rayon",
        "category": "gowns",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Silk/rayon co-ord set with a diagonal ombre/tie-dye print running from cream to mauve/plum, with embroidered details."
    },
    {
        "id": "8",
        "product-id": "LH",
        "badge": "Royal Fit",
        "image": "item8.webp",
        "product": "Sand Linen Co-ord Set",
        "material": "Raw Linen Cotton",
        "category": "tunics",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Beige/sand-colored linen co-ord set with a button-down shirt featuring textured, raw-edge square fabric patches."
    },
    {
        "id": "9",
        "product-id": "LH",
        "badge": "Designer Draped",
        "image": "item9.webp",
        "product": "Lilac Scalloped Kurta Set",
        "material": "Premium Cotton",
        "category": "sarees",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Lilac/lavender colored kurti set with a scalloped hem, featuring colorful geometric embroidery and wide-leg pants."
    },
    {
        "id": "10",
        "product-id": "LH",
        "badge": "Premium Couture",
        "image": "item10.webp",
        "product": "Taupe Floral Embroidered Set",
        "material": "Cotton Linen",
        "category": "sarees",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Grey/taupe mandarin collar linen tunic set with pink and gold floral embroidery around the waist."
    },
    {
        "id": "11",
        "product-id": "LH",
        "badge": "Tiered Anarkali",
        "image": "item11.webp",
        "product": "Mustard Lotus High-Low Set",
        "material": "Pure Crepe",
        "category": "gowns",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Mustard yellow high-low asymmetric silk/crepe kurta set with olive borders and lotus prints."
    },
    {
        "id": "12",
        "product-id": "LH",
        "badge": "Showstopper",
        "image": "item12.webp",
        "product": "Wine Kalamkari Kurta Set",
        "material": "Satin Silk",
        "category": "gowns",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Wine/plum colored silk/satin finish kurta set with hand-painted or printed floral and paisley designs."
    },
    {
        "id": "13",
        "product-id": "LH",
        "badge": "Showstopper",
        "image": "item13.webp",
        "product": "Sage Green Embroidered Set",
        "material": "Textured Khadi Cotton",
        "category": "kurtas",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Sophisticated sage green straight kurta featuring delicate hand embroidery on the neckline and sleeves."
    },
    {
        "id": "14",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item14.webp",
        "product": "Slate Grey V-Neck Set",
        "material": "Premium Linen Blend",
        "category": "kurtas",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Charcoal grey straight kurta featuring a delicate embroidered V-neckline and floral motifs."
    },
    {
        "id": "15",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item15.webp",
        "product": "Teal Blue V-Neck Set",
        "material": "Premium Linen Blend",
        "category": "kurtas",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Dusty teal blue straight kurta featuring a delicate embroidered V-neckline and floral motifs."
    },
    {
        "id": "16",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item16.webp",
        "product": "Mustard Yellow V-Neck Set",
        "material": "Premium Linen Blend",
        "category": "kurtas",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Bright mustard yellow straight kurta featuring a delicate embroidered V-neckline and floral motifs."
    },
    {
        "id": "17",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item17.webp",
        "product": "Rust Orange V-Neck Set",
        "material": "Premium Linen Blend",
        "category": "kurtas",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Vibrant rust orange straight kurta featuring a delicate embroidered V-neckline and floral motifs."
    },
    {
        "id": "18",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item18.webp",
        "product": "Deep Teal Silk Kurta Set",
        "material": "Banarasi Satin Silk",
        "category": "kurtas",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Deep teal/ocean blue silk/satin kurta with beads on the neckline and floral embroidery near the hem."
    },
    {
        "id": "19",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item19.webp",
        "product": "Magenta Silk Kurta Set",
        "material": "Banarasi Satin Silk",
        "category": "kurtas",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Vibrant deep pink/magenta silk/satin kurta with beads on the neckline and floral embroidery near the hem."
    },
    {
        "id": "20",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item20.webp",
        "product": "Deep Plum Silk Kurta Set",
        "material": "Banarasi Satin Silk",
        "category": "kurtas",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Rich dark plum/purple silk/satin kurta with beads on the neckline and floral embroidery near the hem."
    },
    {
        "id": "21",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item21.webp",
        "product": "Metallic Copper Kurta Set",
        "material": "Banarasi Satin Silk",
        "category": "kurtas",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Sleek copper brown/rust silk/satin kurta with beads on the neckline and floral embroidery near the hem."
    },
    {
        "id": "22",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item22.webp",
        "product": "Ivory Sleeveless Sharara Set",
        "material": "Slub Linen",
        "category": "tunics",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Ivory white sleeveless short kurti with pocket mirror details, paired with wide palazzo pants and a dupatta."
    },
    {
        "id": "23",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item23.webp",
        "product": "Magenta Sleeveless Kurta Set",
        "material": "Soft Art Rayon",
        "category": "kurtas",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Sleeveless straight-cut silk/rayon kurti in bright magenta pink, featuring mirror work on the neck."
    },
    {
        "id": "24",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item24.webp",
        "product": "Deep Purple Sleeveless Kurta Set",
        "material": "Soft Art Rayon",
        "category": "kurtas",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Sleeveless straight-cut silk/rayon kurti in deep purple, featuring mirror work on the neck."
    },
    {
        "id": "25",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item25.webp",
        "product": "Burgundy Sleeveless Kurta Set",
        "material": "Soft Art Rayon",
        "category": "kurtas",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Sleeveless straight-cut silk/rayon kurti in dark burgundy, featuring mirror work on the neck."
    },
    {
        "id": "26",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item26.webp",
        "product": "Coral Mesh Applique Set",
        "material": "Cotton Linen Blend",
        "category": "tunics",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Coral peach short kurta with applique cut-out mesh flower details and matching wide-leg pants."
    },
    {
        "id": "27",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item27.webp",
        "product": "Yellow Mesh Applique Set",
        "material": "Cotton Linen Blend",
        "category": "tunics",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Mustard yellow short kurta with applique cut-out mesh flower details and matching wide-leg pants."
    },
    {
        "id": "28",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item28.webp",
        "product": "Lavender Mesh Applique Set",
        "material": "Cotton Linen Blend",
        "category": "tunics",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Light lavender short kurta with applique cut-out mesh flower details and matching wide-leg pants."
    },
    {
        "id": "29",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item29.webp",
        "product": "Onion Pink Embroidered Set",
        "material": "Textured Khadi Cotton",
        "category": "kurtas",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Dusty onion pink straight kurta featuring delicate hand embroidery on the neckline and sleeves."
    },
    {
        "id": "30",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item30.webp",
        "product": "Mint Green Embroidered Set",
        "material": "Textured Khadi Cotton",
        "category": "kurtas",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Sage mint green straight kurta featuring delicate hand embroidery on the neckline and sleeves."
    },
    {
        "id": "31",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item31.webp",
        "product": "Peach Sleeveless Sharara Set",
        "material": "Slub Linen",
        "category": "tunics",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Peach/baby pink sleeveless short kurti with pocket mirror details, paired with wide palazzo pants and a dupatta."
    },
    {
        "id": "32",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item32.webp",
        "product": "Rose Pink Sleeveless Sharara Set",
        "material": "Slub Linen",
        "category": "tunics",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Rose pink sleeveless short kurti with pocket mirror details, paired with wide palazzo pants and a dupatta."
    },
    {
        "id": "33",
        "product-id": "LH",
        "badge": "Best Seller",
        "image": "item33.webp",
        "product": "Taupe Mesh Applique Set",
        "material": "Cotton Linen Blend",
        "category": "tunics",
        "price-current": "",
        "price-original": "",
        "price-discount": "",
        "description": "Greyish brown/taupe short kurta with applique cut-out mesh flower details and matching wide-leg pants."
    }
];
