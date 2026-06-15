export function ShowCaseContent() {
    return (
        <section className="showcase-section" id="showcase">
            <div className="container">
                <div className="showcase-container">
                    <span className="showcase-badge">Boutique Special Offer</span>
                    <h2 className="showcase-title">Tailored Elegance & Exquisite Styling</h2>
                    <div className="showcase-discount">
                        <span>Flat 10% Off</span><span className="small"> on First Order</span>
                    </div>
                    <p className="showcase-desc">Bring your dream wardrobe to life! Our boutique specializes in premium custom alterations for all catalog items. Walk in or consult with our style designers on WhatsApp to secure a customized tailored drape for your next big celebration.</p>
                    <div className="showcase-promo-grid">
                        <div className="promo-item">
                            <span className="promo-icon">🎉</span>
                            <div className="promo-text">
                                <h4>Festive Group Bookings</h4>
                                <p>Shopping for a family wedding or festive occasion? Enjoy special custom tailoring rates and discounts for groups of 5 or more.</p>
                            </div>
                        </div>
                        <div className="promo-item">
                            <span className="promo-icon">💖</span>
                            <div className="promo-text">
                                <h4>Complimentary Styling Consult</h4>
                                <p>Speak directly with our chief designer for advice on matching accessories, fit suggestions, and personal styling.</p>
                            </div>
                        </div>
                    </div>
                    <div className="showcase-notice">
                        ⏰ <span>Custom styling and fit alterations typically take 3 to 5 business days for perfect precision.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
