import { useEffect, useState } from "react";

export function BackToTopButton() {
    // Back to top button state
    const [showBackToTop, setShowBackToTop] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <button
            className={`back-to-top ${showBackToTop ? 'show' : ''}`}
            id="back-to-top"
            aria-label="Scroll to top"
            onClick={scrollToTop}
        >
            <svg viewBox="0 0 24 24">
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
            </svg>
        </button>
    );
}
