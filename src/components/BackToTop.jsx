import { useEffect, useState } from "react";

import "../styles/BackToTop.css";

const BackToTopIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ width: "1em", height: "1em" }}
  >
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
  </svg>
);

export function BackToTop() {
  const SCROLL_THRESHOLD = 400;

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Conditional styling logic moved to a variable for cleaner JSX
  const buttonClasses = `back-to-top ${isVisible ? "show" : ""}`;

  if (!isVisible) return null; // Optional: don't render the button element at all if hidden

  return (
    <button
      className={buttonClasses}
      id="back-to-top"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      type="button"
    >
      <BackToTopIcon />
    </button>
  );
}
