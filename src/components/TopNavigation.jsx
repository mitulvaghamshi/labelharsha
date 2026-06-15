import { useEffect, useState } from "react";

export function TopNavigation() {
    // Mobile menu management
    const [menuOpen, setMenuOpen] = useState(false);

    // Theme management
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) return savedTheme;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark ? "theme-dark" : "theme-light";
    });

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleTheme = () => {
        setTheme(prev => prev === "theme-dark" ? "theme-light" : "theme-dark");
    };

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <nav className="nav-bar">
            <div
                className={`hamburger-menu ${menuOpen ? 'active' : ''}`}
                id="hamburger-menu"
                aria-label="Toggle Navigation"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <a href="#" className="nav-logo" onClick={closeMenu}>
                <span>Label Harsha</span>
            </a>
            <div className={`nav-links-container ${menuOpen ? 'active' : ''}`} id="nav-links">
                <a href="#" className="nav-link" onClick={closeMenu}>Home</a>
                <a href="#about" className="nav-link" onClick={closeMenu}>Philosophy</a>
                <a href="#showcase" className="nav-link" onClick={closeMenu}>Showcase</a>
                <a href="#catalog" className="nav-link" onClick={closeMenu}>Collections</a>
                <a href="#testimonials" className="nav-link" onClick={closeMenu}>Reviews</a>
                <a href="#contact" className="nav-link" onClick={closeMenu}>Visit Us</a>
            </div>
            <div className="nav-controls">
                <button className="toggle-btn" id="theme-toggle" aria-label="Toggle Theme" onClick={toggleTheme}>
                    {theme === "theme-dark" ? (
                        <svg id="theme-sun-icon" viewBox="0 0 24 24">
                            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.03 0-1.41zM7.05 18.01l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0z" />
                        </svg>
                    ) : (
                        <svg id="theme-moon-icon" viewBox="0 0 24 24">
                            <path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-8.9 8.2-9.8.6-.1 1.2.3 1.3.9.1.6-.3 1.2-.9 1.3-3.7.7-6.4 4-6.4 7.8 0 4.4 3.6 8 8 8 3.8 0 7.1-2.7 7.8-6.4.1-.6.7-1 1.3-.9.6.1 1 .7.9 1.3-.9 4.7-5 8.2-9.8 8.2z" />
                        </svg>
                    )}
                    <span className="theme-mode-text" id="theme-toggle-text">
                        {theme === "theme-dark" ? "Light Mode" : "Dark Mode"}
                    </span>
                </button>
            </div>
        </nav>
    );
}
