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
});
