import '../styles/Header.css';

export function Header() {
  return (
    <header className="hero-section" id="home">
      <img
        src="icons/header.webp"
        className="hero-image"
        fetchpriority="high"
        alt="Label Harsha - Vibrant Autumn & Spring Collections"
      />
      <div className="hero-content">
        <span className="hero-badge">Vibrant Autumn & Spring Collections</span>
        <h1 className="hero-title">Label Harsha</h1>
        <p className="hero-desc">
          Express your color. Premium readymade ethnic and fusion wear
          designed with exquisite handcraft and handpicked vibrant fabrics.
        </p>
        <div className="hero-cta">
          <a href='#catalog' className={"btn-primary"}>
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
              style={{ marginRight: '8px' }}
            >
              <path d="M17.21 9l-4.3-6.2c-.38-.55-1.09-.56-1.47-.02L7.08 9H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-3.79zM12 5.5L15.25 10H8.75L12 5.5zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
            </svg>
            Explore Catalog
          </a>
          <a href='#contact' className={"btn-secondary"}>
            Visit Boutique
          </a>
        </div>
      </div>
    </header>
  );
}
