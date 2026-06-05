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
function populateCatalog(tag, start, end) {
    const section = document.getElementById(`product-card-container-${tag}`);
    section.innerHTML = "";
    data.slice(start, end).forEach(item => {
        section.innerHTML += `
        <div class="product-card fade-in-card" data-category="${item.category}">
            <div class="product-card-img">
                <img src="items/${item.image}" alt="${item.product} (${item.productId})" loading="lazy">
                <span class="product-card-badge">${item.badge}</span>
            </div>
            <div class="product-card-details">
                <span class="product-card-id">#${item.productId}</span>
                <h3 class="product-card-title">${item.product}</h3>
                <span class="product-card-material">${item.material}</span>
                <p class="product-card-desc">${item.description}</p>
                <div class="price-container">
                    <span class="price-current">₹${item.priceCurrent}</span>
                    <span class="price-original">₹${item.priceOriginal}</span>
                    <span class="price-discount">${item.priceDiscount} OFF</span>
                </div>
                <a href="https://wa.me/919033310101?text=Hi Label Harsha, I am interested in inquiring about the '${item.product} (${item.productId})'. Could you please share more details." target="_blank" class="btn-whatsapp">
                    <img src="icons/whatsapp.svg" alt="WhatsApp">
                </a>
            </div>
        </div>`;
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
    populateCatalog("tall", 0, 12);
    populateCatalog("wide", 12, data.length)
});

const data = [
    {
        "id": "1",
        "productId": "LH0001/ALL",
        "badge": "Best Seller",
        "image": "item1.webp",
        "product": "Terracotta Slit Tassel Kurta",
        "material": "Premium Slub Cotton",
        "category": "kurtas",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Elegant sleeveless rust-red kurta featuring a high center slit with patterned blue accents and front tassels."
    },
    {
        "id": "2",
        "productId": "LH0002/ALL",
        "badge": "New Arrival",
        "image": "item2.webp",
        "product": "Indigo Leaf Printed Kurta",
        "material": "Soft Crepe Silk",
        "category": "kurtas",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "A striking royal blue long-sleeved kurta adorned with a contrast leaf-and-flower motif on the front."
    },
    {
        "id": "3",
        "productId": "LH0003/ALL",
        "badge": "Signature",
        "image": "item3.webp",
        "product": "Charcoal Floral Contrast Kurta",
        "material": "Chanderi Blend",
        "category": "kurtas",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Modern greyish-brown straight kurta featuring contrast black panels and bold printed floral outlines."
    },
    {
        "id": "4",
        "productId": "LH0004/ALL",
        "badge": "Trending",
        "image": "item4.webp",
        "product": "Magenta Kaftan Dress",
        "material": "Flowy Georgette",
        "category": "tunics",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "A luxurious flowy kaftan dress in rich magenta featuring a symmetric ivory white pattern and a relaxed drape."
    },
    {
        "id": "5",
        "productId": "LH0005/ALL",
        "badge": "Pure Fabric",
        "image": "item5.webp",
        "product": "Pastel Blue Peplum Set",
        "material": "Soft Muslin Cotton",
        "category": "tunics",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Sleeveless short peplum style kurti in light blue and lime green print, paired with green leaf patterned pants."
    },
    {
        "id": "6",
        "productId": "LH0006/ALL",
        "badge": "Classic Fit",
        "image": "item6.webp",
        "product": "Fuchsia Kutch Embroidered Set",
        "material": "Art Silk",
        "category": "kurtas",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Fuchsia/magenta kurta with multi-colored Gujarati embroidery and tassel details, paired with matching trousers."
    },
    {
        "id": "7",
        "productId": "LH0007/ALL",
        "badge": "Vibrant Block",
        "image": "item7.webp",
        "product": "Cream Mauve Ombre Set",
        "material": "Premium Rayon",
        "category": "gowns",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Silk/rayon co-ord set with a diagonal ombre/tie-dye print running from cream to mauve/plum, with embroidered details."
    },
    {
        "id": "8",
        "productId": "LH0008/ALL",
        "badge": "Royal Fit",
        "image": "item8.webp",
        "product": "Sand Linen Co-ord Set",
        "material": "Raw Linen Cotton",
        "category": "tunics",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Beige/sand-colored linen co-ord set with a button-down shirt featuring textured, raw-edge square fabric patches."
    },
    {
        "id": "9",
        "productId": "LH0009/ALL",
        "badge": "Designer Draped",
        "image": "item9.webp",
        "product": "Lilac Scalloped Kurta Set",
        "material": "Premium Cotton",
        "category": "sarees",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Lilac/lavender colored kurti set with a scalloped hem, featuring colorful geometric embroidery and wide-leg pants."
    },
    {
        "id": "10",
        "productId": "LH00010/ALL",
        "badge": "Premium Couture",
        "image": "item10.webp",
        "product": "Taupe Floral Embroidered Set",
        "material": "Cotton Linen",
        "category": "sarees",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Grey/taupe mandarin collar linen tunic set with pink and gold floral embroidery around the waist."
    },
    {
        "id": "11",
        "productId": "LH00011/ALL",
        "badge": "Tiered Anarkali",
        "image": "item11.webp",
        "product": "Mustard Lotus High-Low Set",
        "material": "Pure Crepe",
        "category": "gowns",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Mustard yellow high-low asymmetric silk/crepe kurta set with olive borders and lotus prints."
    },
    {
        "id": "12",
        "productId": "LH00012/ALL",
        "badge": "Showstopper",
        "image": "item12.webp",
        "product": "Wine Kalamkari Kurta Set",
        "material": "Satin Silk",
        "category": "gowns",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Wine/plum colored silk/satin finish kurta set with hand-painted or printed floral and paisley designs."
    },
    {
        "id": "13",
        "productId": "LH00013/ALL",
        "badge": "Best Seller",
        "image": "item13.webp",
        "product": "Taupe Mesh Applique Set",
        "material": "Cotton Linen Blend",
        "category": "tunics",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Greyish brown/taupe short kurta with applique cut-out mesh flower details and matching wide-leg pants."
    },
    {
        "id": "14",
        "productId": "LH00014/ALL",
        "badge": "Best Seller",
        "image": "item14.webp",
        "product": "Slate Grey V-Neck Set",
        "material": "Premium Linen Blend",
        "category": "kurtas",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Charcoal grey straight kurta featuring a delicate embroidered V-neckline and floral motifs."
    },
    {
        "id": "15",
        "productId": "LH00015/ALL",
        "badge": "Best Seller",
        "image": "item15.webp",
        "product": "Teal Blue V-Neck Set",
        "material": "Premium Linen Blend",
        "category": "kurtas",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Dusty teal blue straight kurta featuring a delicate embroidered V-neckline and floral motifs."
    },
    {
        "id": "16",
        "productId": "LH00016/ALL",
        "badge": "Best Seller",
        "image": "item16.webp",
        "product": "Mustard Yellow V-Neck Set",
        "material": "Premium Linen Blend",
        "category": "kurtas",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Bright mustard yellow straight kurta featuring a delicate embroidered V-neckline and floral motifs."
    },
    {
        "id": "17",
        "productId": "LH00017/ALL",
        "badge": "Best Seller",
        "image": "item17.webp",
        "product": "Rust Orange V-Neck Set",
        "material": "Premium Linen Blend",
        "category": "kurtas",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Vibrant rust orange straight kurta featuring a delicate embroidered V-neckline and floral motifs."
    },
    {
        "id": "18",
        "productId": "LH00018/ALL",
        "badge": "Best Seller",
        "image": "item18.webp",
        "product": "Deep Teal Silk Kurta Set",
        "material": "Banarasi Satin Silk",
        "category": "kurtas",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Deep teal/ocean blue silk/satin kurta with beads on the neckline and floral embroidery near the hem."
    },
    {
        "id": "19",
        "productId": "LH00019/ALL",
        "badge": "Best Seller",
        "image": "item19.webp",
        "product": "Magenta Silk Kurta Set",
        "material": "Banarasi Satin Silk",
        "category": "kurtas",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Vibrant deep pink/magenta silk/satin kurta with beads on the neckline and floral embroidery near the hem."
    },
    {
        "id": "20",
        "productId": "LH00020/ALL",
        "badge": "Best Seller",
        "image": "item20.webp",
        "product": "Deep Plum Silk Kurta Set",
        "material": "Banarasi Satin Silk",
        "category": "kurtas",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Rich dark plum/purple silk/satin kurta with beads on the neckline and floral embroidery near the hem."
    },
    {
        "id": "21",
        "productId": "LH00021/ALL",
        "badge": "Best Seller",
        "image": "item21.webp",
        "product": "Metallic Copper Kurta Set",
        "material": "Banarasi Satin Silk",
        "category": "kurtas",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Sleek copper brown/rust silk/satin kurta with beads on the neckline and floral embroidery near the hem."
    },
    {
        "id": "22",
        "productId": "LH00022/ALL",
        "badge": "Best Seller",
        "image": "item22.webp",
        "product": "Ivory Sleeveless Sharara Set",
        "material": "Slub Linen",
        "category": "tunics",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Ivory white sleeveless short kurti with pocket mirror details, paired with wide palazzo pants and a dupatta."
    },
    {
        "id": "23",
        "productId": "LH00023/ALL",
        "badge": "Best Seller",
        "image": "item23.webp",
        "product": "Magenta Sleeveless Kurta Set",
        "material": "Soft Art Rayon",
        "category": "kurtas",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Sleeveless straight-cut silk/rayon kurti in bright magenta pink, featuring mirror work on the neck."
    },
    {
        "id": "24",
        "productId": "LH00024/ALL",
        "badge": "Best Seller",
        "image": "item24.webp",
        "product": "Deep Purple Sleeveless Kurta Set",
        "material": "Soft Art Rayon",
        "category": "kurtas",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Sleeveless straight-cut silk/rayon kurti in deep purple, featuring mirror work on the neck."
    },
    {
        "id": "25",
        "productId": "LH00025/ALL",
        "badge": "Best Seller",
        "image": "item25.webp",
        "product": "Burgundy Sleeveless Kurta Set",
        "material": "Soft Art Rayon",
        "category": "kurtas",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Sleeveless straight-cut silk/rayon kurti in dark burgundy, featuring mirror work on the neck."
    },
    {
        "id": "26",
        "productId": "LH00026/ALL",
        "badge": "Best Seller",
        "image": "item26.webp",
        "product": "Coral Mesh Applique Set",
        "material": "Cotton Linen Blend",
        "category": "tunics",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Coral peach short kurta with applique cut-out mesh flower details and matching wide-leg pants."
    },
    {
        "id": "27",
        "productId": "LH00027/ALL",
        "badge": "Best Seller",
        "image": "item27.webp",
        "product": "Yellow Mesh Applique Set",
        "material": "Cotton Linen Blend",
        "category": "tunics",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Mustard yellow short kurta with applique cut-out mesh flower details and matching wide-leg pants."
    },
    {
        "id": "28",
        "productId": "LH00028/ALL",
        "badge": "Best Seller",
        "image": "item28.webp",
        "product": "Lavender Mesh Applique Set",
        "material": "Cotton Linen Blend",
        "category": "tunics",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Light lavender short kurta with applique cut-out mesh flower details and matching wide-leg pants."
    },
    {
        "id": "29",
        "productId": "LH00029/ALL",
        "badge": "Best Seller",
        "image": "item29.webp",
        "product": "Onion Pink Embroidered Set",
        "material": "Textured Khadi Cotton",
        "category": "kurtas",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Dusty onion pink straight kurta featuring delicate hand embroidery on the neckline and sleeves."
    },
    {
        "id": "30",
        "productId": "LH00030/ALL",
        "badge": "Best Seller",
        "image": "item30.webp",
        "product": "Mint Green Embroidered Set",
        "material": "Textured Khadi Cotton",
        "category": "kurtas",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Sage mint green straight kurta featuring delicate hand embroidery on the neckline and sleeves."
    },
    {
        "id": "31",
        "productId": "LH00031/ALL",
        "badge": "Best Seller",
        "image": "item31.webp",
        "product": "Peach Sleeveless Sharara Set",
        "material": "Slub Linen",
        "category": "tunics",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Peach/baby pink sleeveless short kurti with pocket mirror details, paired with wide palazzo pants and a dupatta."
    },
    {
        "id": "32",
        "productId": "LH00032/ALL",
        "badge": "Best Seller",
        "image": "item32.webp",
        "product": "Rose Pink Sleeveless Sharara Set",
        "material": "Slub Linen",
        "category": "tunics",
        "priceCurrent": "0",
        "priceOriginal": "0",
        "priceDiscount": "0",
        "description": "Rose pink sleeveless short kurti with pocket mirror details, paired with wide palazzo pants and a dupatta."
    },
];
