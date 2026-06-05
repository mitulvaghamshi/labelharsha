// Theme Toggle Elements
const themeBtn = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("theme-sun-icon");
const moonIcon = document.getElementById("theme-moon-icon");
const themeToggleText = document.getElementById("theme-toggle-text");
const productContainer = document.getElementById("product-container");

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
function populateCatalog(tag, data) {
    const section = document.createElement("div");
    section.id = `product-card-container-${tag}`;
    section.classList.add(`product-grid-${tag}`);
    section.innerHTML = "";
    data.forEach(item => {
        prices = `<span class="price-current">₹${item.priceCurrent}/-</span>`;
        if ((+item.priceDiscount) > 0) {
            prices = `
            <span class="price-current">₹${item.priceCurrent}/-</span>
            <span class="price-original">₹${(item.priceOriginal * (1 + item.priceDiscount / 100)).toFixed(0)}/-</span>
            <span class="price-discount">${item.priceDiscount} OFF</span>
            `;
        }
        section.innerHTML += `
        <div class="product-card fade-in-card" data-category="${item.category}">
            <div class="product-card-img">
                <img src="items/${item.image}" alt="${item.product} (${item.productId})" loading="lazy">
            </div>
            <div class="product-card-details">
                <span class="product-card-badge">${item.badge}</span>
                <span class="product-card-id">#${item.productId}</span>
                <h3 class="product-card-title">${item.product}</h3>
                <span class="product-card-material">${item.material}</span>
                <p class="product-card-desc">${item.description}</p>
                <div class="price-container">${prices}</div>
                <a href="https://wa.me/919033310101?text=Hi Label Harsha, I am interested in inquiring about the '${item.product} (${item.productId})'. Could you please share more details." target="_blank" class="btn-whatsapp">
                    <img src="icons/whatsapp.svg" alt="WhatsApp">
                </a>
            </div>
        </div>`;
    });
    section.innerHTML += `<div style="height: 35px;"></div>`;
    productContainer.appendChild(section);
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
    productContainer.innerHTML = "";
    populateCatalog("tall", dataSet1);
    populateCatalog("wide", dataSet2);
});

const dataSet1 = [
    {
        "id": "1",
        "productId": "LH0001/ALL",
        "badge": "In Stock",
        "image": "item1.webp",
        "product": "Terracotta Slit Tassel Kurta",
        "material": "Premium Slub Cotton",
        "category": "kurtas",
        "priceCurrent": "1100",
        "priceOriginal": "1100",
        "priceDiscount": "10",
        "description": "Elegant sleeveless rust-red kurta featuring a high center slit with patterned blue accents and front tassels."
    },
    {
        "id": "2",
        "productId": "LH0002/ALL",
        "badge": "In Stock",
        "image": "item2.webp",
        "product": "Indigo Leaf Printed Kurta",
        "material": "Soft Crepe Silk",
        "category": "kurtas",
        "priceCurrent": "1290",
        "priceOriginal": "1290",
        "priceDiscount": "10",
        "description": "A striking royal blue long-sleeved kurta adorned with a contrast leaf-and-flower motif on the front."
    },
    {
        "id": "3",
        "productId": "LH0003/ALL",
        "badge": "In Stock",
        "image": "item3.webp",
        "product": "Charcoal Floral Contrast Kurta",
        "material": "Chanderi Blend",
        "category": "kurtas",
        "priceCurrent": "1290",
        "priceOriginal": "1290",
        "priceDiscount": "10",
        "description": "Modern greyish-brown straight kurta featuring contrast black panels and bold printed floral outlines."
    },
    {
        "id": "4",
        "productId": "LH0004/ALL",
        "badge": "In Stock",
        "image": "item4.webp",
        "product": "Magenta Kaftan Dress",
        "material": "Flowy Georgette",
        "category": "tunics",
        "priceCurrent": "1750",
        "priceOriginal": "1750",
        "priceDiscount": "10",
        "description": "A luxurious flowy kaftan dress in rich magenta featuring a symmetric ivory white pattern and a relaxed drape."
    },
    {
        "id": "5",
        "productId": "LH0005/ALL",
        "badge": "In Stock",
        "image": "item5.webp",
        "product": "Pastel Blue Peplum Set",
        "material": "Soft Muslin Cotton",
        "category": "tunics",
        "priceCurrent": "1290",
        "priceOriginal": "1290",
        "priceDiscount": "10",
        "description": "Sleeveless short peplum style kurti in light blue and lime green print, paired with green leaf patterned pants."
    },
    {
        "id": "6",
        "productId": "LH0006/ALL",
        "badge": "In Stock",
        "image": "item6.webp",
        "product": "Fuchsia Kutch Embroidered Set",
        "material": "Art Silk",
        "category": "kurtas",
        "priceCurrent": "1890",
        "priceOriginal": "1890",
        "priceDiscount": "10",
        "description": "Fuchsia/magenta kurta with multi-colored Gujarati embroidery and tassel details, paired with matching trousers."
    },
    {
        "id": "7",
        "productId": "LH0007/ALL",
        "badge": "In Stock",
        "image": "item7.webp",
        "product": "Cream Mauve Ombre Set",
        "material": "Premium Rayon",
        "category": "gowns",
        "priceCurrent": "1900",
        "priceOriginal": "1900",
        "priceDiscount": "10",
        "description": "Silk/rayon co-ord set with a diagonal ombre/tie-dye print running from cream to mauve/plum, with embroidered details."
    },
    {
        "id": "8",
        "productId": "LH0008/ALL",
        "badge": "In Stock",
        "image": "item8.webp",
        "product": "Sand Linen Co-ord Set",
        "material": "Raw Linen Cotton",
        "category": "tunics",
        "priceCurrent": "1290",
        "priceOriginal": "1290",
        "priceDiscount": "10",
        "description": "Beige/sand-colored linen co-ord set with a button-down shirt featuring textured, raw-edge square fabric patches."
    },
    {
        "id": "9",
        "productId": "LH0009/ALL",
        "badge": "In Stock",
        "image": "item9.webp",
        "product": "Lilac Scalloped Kurta Set",
        "material": "Premium Cotton",
        "category": "sarees",
        "priceCurrent": "1680",
        "priceOriginal": "1680",
        "priceDiscount": "10",
        "description": "Lilac/lavender colored kurti set with a scalloped hem, featuring colorful geometric embroidery and wide-leg pants."
    },
    {
        "id": "10",
        "productId": "LH00010/ALL",
        "badge": "In Stock",
        "image": "item10.webp",
        "product": "Taupe Floral Embroidered Set",
        "material": "Cotton Linen",
        "category": "sarees",
        "priceCurrent": "1370",
        "priceOriginal": "1370",
        "priceDiscount": "10",
        "description": "Grey/taupe mandarin collar linen tunic set with pink and gold floral embroidery around the waist."
    },
    {
        "id": "11",
        "productId": "LH00011/ALL",
        "badge": "In Stock",
        "image": "item11.webp",
        "product": "Mustard Lotus High-Low Set",
        "material": "Pure Crepe",
        "category": "gowns",
        "priceCurrent": "2015",
        "priceOriginal": "2015",
        "priceDiscount": "10",
        "description": "Mustard yellow high-low asymmetric silk/crepe kurta set with olive borders and lotus prints."
    },
    {
        "id": "12",
        "productId": "LH00012/ALL",
        "badge": "In Stock",
        "image": "item12.webp",
        "product": "Wine Kalamkari Kurta Set",
        "material": "Satin Silk",
        "category": "gowns",
        "priceCurrent": "2015",
        "priceOriginal": "2015",
        "priceDiscount": "10",
        "description": "Wine/plum colored silk/satin finish kurta set with hand-painted or printed floral and paisley designs."
    },
];

const dataSet2 = [
    {
        "id": "1-1",
        "productId": "LH00014/ALL",
        "badge": "In Stock",
        "image": "item14.webp",
        "product": "Slate Grey V-Neck Set",
        "material": "Premium Linen Blend",
        "category": "kurtas",
        "priceCurrent": "1750",
        "priceOriginal": "1750",
        "priceDiscount": "10",
        "description": "Charcoal grey straight kurta featuring a delicate embroidered V-neckline and floral motifs."
    },
    {
        "id": "1-2",
        "productId": "LH00015/ALL",
        "badge": "In Stock",
        "image": "item15.webp",
        "product": "Teal Blue V-Neck Set",
        "material": "Premium Linen Blend",
        "category": "kurtas",
        "priceCurrent": "1750",
        "priceOriginal": "1750",
        "priceDiscount": "10",
        "description": "Dusty teal blue straight kurta featuring a delicate embroidered V-neckline and floral motifs."
    },
    {
        "id": "1-3",
        "productId": "LH00016/ALL",
        "badge": "In Stock",
        "image": "item16.webp",
        "product": "Mustard Yellow V-Neck Set",
        "material": "Premium Linen Blend",
        "category": "kurtas",
        "priceCurrent": "1750",
        "priceOriginal": "1750",
        "priceDiscount": "10",
        "description": "Bright mustard yellow straight kurta featuring a delicate embroidered V-neckline and floral motifs."
    },
    {
        "id": "1-4",
        "productId": "LH00017/ALL",
        "badge": "In Stock",
        "image": "item17.webp",
        "product": "Rust Orange V-Neck Set",
        "material": "Premium Linen Blend",
        "category": "kurtas",
        "priceCurrent": "1750",
        "priceOriginal": "1750",
        "priceDiscount": "10",
        "description": "Vibrant rust orange straight kurta featuring a delicate embroidered V-neckline and floral motifs."
    },

    {
        "id": "2-1",
        "productId": "LH00018/ALL",
        "badge": "In Stock",
        "image": "item18.webp",
        "product": "Deep Teal Silk Kurta Set",
        "material": "Banarasi Satin Silk",
        "category": "kurtas",
        "priceCurrent": "1390",
        "priceOriginal": "1390",
        "priceDiscount": "10",
        "description": "Deep teal/ocean blue silk/satin kurta with beads on the neckline and floral embroidery near the hem."
    },
    {
        "id": "2-2",
        "productId": "LH00019/ALL",
        "badge": "In Stock",
        "image": "item19.webp",
        "product": "Magenta Silk Kurta Set",
        "material": "Banarasi Satin Silk",
        "category": "kurtas",
        "priceCurrent": "1390",
        "priceOriginal": "1390",
        "priceDiscount": "10",
        "description": "Vibrant deep pink/magenta silk/satin kurta with beads on the neckline and floral embroidery near the hem."
    },
    {
        "id": "2-3",
        "productId": "LH00020/ALL",
        "badge": "In Stock",
        "image": "item20.webp",
        "product": "Deep Plum Silk Kurta Set",
        "material": "Banarasi Satin Silk",
        "category": "kurtas",
        "priceCurrent": "1390",
        "priceOriginal": "1390",
        "priceDiscount": "10",
        "description": "Rich dark plum/purple silk/satin kurta with beads on the neckline and floral embroidery near the hem."
    },
    {
        "id": "2-4",
        "productId": "LH00021/ALL",
        "badge": "In Stock",
        "image": "item21.webp",
        "product": "Metallic Copper Kurta Set",
        "material": "Banarasi Satin Silk",
        "category": "kurtas",
        "priceCurrent": "1390",
        "priceOriginal": "1390",
        "priceDiscount": "10",
        "description": "Sleek copper brown/rust silk/satin kurta with beads on the neckline and floral embroidery near the hem."
    },

    {
        "id": "3-1",
        "productId": "LH00023/ALL",
        "badge": "In Stock",
        "image": "item23.webp",
        "product": "Magenta Sleeveless Kurta Set",
        "material": "Soft Art Rayon",
        "category": "kurtas",
        "priceCurrent": "1050",
        "priceOriginal": "1050",
        "priceDiscount": "10",
        "description": "Sleeveless straight-cut silk/rayon kurti in bright magenta pink, featuring mirror work on the neck."
    },
    {
        "id": "3-2",
        "productId": "LH00024/ALL",
        "badge": "In Stock",
        "image": "item24.webp",
        "product": "Deep Purple Sleeveless Kurta Set",
        "material": "Soft Art Rayon",
        "category": "kurtas",
        "priceCurrent": "1050",
        "priceOriginal": "1050",
        "priceDiscount": "10",
        "description": "Sleeveless straight-cut silk/rayon kurti in deep purple, featuring mirror work on the neck."
    },
    {
        "id": "3-3",
        "productId": "LH00025/ALL",
        "badge": "In Stock",
        "image": "item25.webp",
        "product": "Burgundy Sleeveless Kurta Set",
        "material": "Soft Art Rayon",
        "category": "kurtas",
        "priceCurrent": "1050",
        "priceOriginal": "1050",
        "priceDiscount": "10",
        "description": "Sleeveless straight-cut silk/rayon kurti in dark burgundy, featuring mirror work on the neck."
    },

    {
        "id": "4-1",
        "productId": "LH00027/ALL",
        "badge": "In Stock",
        "image": "item27.webp",
        "product": "Yellow Mesh Applique Set",
        "material": "Cotton Linen Blend",
        "category": "tunics",
        "priceCurrent": "1470",
        "priceOriginal": "1470",
        "priceDiscount": "10",
        "description": "Mustard yellow short kurta with applique cut-out mesh flower details and matching wide-leg pants."
    },
    {
        "id": "4-2",
        "productId": "LH00026/ALL",
        "badge": "In Stock",
        "image": "item26.webp",
        "product": "Coral Mesh Applique Set",
        "material": "Cotton Linen Blend",
        "category": "tunics",
        "priceCurrent": "1470",
        "priceOriginal": "1470",
        "priceDiscount": "10",
        "description": "Coral peach short kurta with applique cut-out mesh flower details and matching wide-leg pants."
    },
    {
        "id": "4-3",
        "productId": "LH00028/ALL",
        "badge": "In Stock",
        "image": "item28.webp",
        "product": "Lavender Mesh Applique Set",
        "material": "Cotton Linen Blend",
        "category": "tunics",
        "priceCurrent": "1470",
        "priceOriginal": "1470",
        "priceDiscount": "10",
        "description": "Light lavender short kurta with applique cut-out mesh flower details and matching wide-leg pants."
    },

    {
        "id": "5-1",
        "productId": "LH00029/ALL",
        "badge": "In Stock",
        "image": "item29.webp",
        "product": "Onion Pink Embroidered Set",
        "material": "Textured Khadi Cotton",
        "category": "kurtas",
        "priceCurrent": "2200",
        "priceOriginal": "2200",
        "priceDiscount": "10",
        "description": "Dusty onion pink straight kurta featuring delicate hand embroidery on the neckline and sleeves."
    },
    {
        "id": "5-2",
        "productId": "LH00030/ALL",
        "badge": "In Stock",
        "image": "item30.webp",
        "product": "Mint Green Embroidered Set",
        "material": "Textured Khadi Cotton",
        "category": "kurtas",
        "priceCurrent": "2200",
        "priceOriginal": "2200",
        "priceDiscount": "10",
        "description": "Sage mint green straight kurta featuring delicate hand embroidery on the neckline and sleeves."
    },

    {
        "id": "6-1",
        "productId": "LH00032/ALL",
        "badge": "In Stock",
        "image": "item32.webp",
        "product": "Rose Pink Sleeveless Sharara Set",
        "material": "Slub Linen",
        "category": "tunics",
        "priceCurrent": "1410",
        "priceOriginal": "1410",
        "priceDiscount": "10",
        "description": "Rose pink sleeveless short kurti with pocket mirror details, paired with wide palazzo pants and a dupatta."
    },
    {
        "id": "6-2",
        "productId": "LH00031/ALL",
        "badge": "In Stock",
        "image": "item31.webp",
        "product": "Peach Sleeveless Sharara Set",
        "material": "Slub Linen",
        "category": "tunics",
        "priceCurrent": "1410",
        "priceOriginal": "1410",
        "priceDiscount": "10",
        "description": "Peach/baby pink sleeveless short kurti with pocket mirror details, paired with wide palazzo pants and a dupatta."
    },
    {
        "id": "6-3",
        "productId": "LH00022/ALL",
        "badge": "In Stock",
        "image": "item22.webp",
        "product": "Ivory Sleeveless Sharara Set",
        "material": "Slub Linen",
        "category": "tunics",
        "priceCurrent": "1410",
        "priceOriginal": "1410",
        "priceDiscount": "10",
        "description": "Ivory white sleeveless short kurti with pocket mirror details, paired with wide palazzo pants and a dupatta."
    },
];
