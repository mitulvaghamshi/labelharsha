const InfoRow = ({ icon, title, children }) => (
    <div className="info-row">
        <div className="info-icon">
            {icon}
        </div>
        <div className="info-content">
            <h4>{title}</h4>
            {children}
        </div>
    </div>
);

export function VisitUsContent() {
    const icons = {
        clock: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
            </svg>
        ),
        phone: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
        ),
        map: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
        ),
    };

    return (
        <section className="container" id="contact">
            <div className="section-header">
                <h2 className="section-title">Visit Our Boutique</h2>
                <p className="section-desc">
                    Walk in to experience our vibrant fabrics or contact us directly to convince
                    styled orders and alterations.
                </p>
            </div>

            <div className="footer-grid">
                <div className="contact-info-panel">
                    <div className="info-card">
                        {/* Timing Info */}
                        <InfoRow icon={icons.clock} title="Boutique Hours">
                            <p>Mon - Sat: 10:00 AM to 8:30 PM (IST)<br />Sunday: By Appointment Only</p>
                        </InfoRow>

                        {/* Contact Info */}
                        <InfoRow icon={icons.phone} title="Reservations & Styling Phone">
                            <p style={{ marginBottom: '8px' }}>
                                <a href="tel:+919033310101" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 700, fontSize: '1.2rem' }}>
                                    +91 90333 10101
                                </a>
                            </p>
                            <a href="https://wa.me/919033310101" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                                <img src="icons/whatsapp.svg" alt="WhatsApp" style={{ height: '24px' }} />
                            </a>
                        </InfoRow>

                        {/* Address Info */}
                        <InfoRow icon={icons.map} title="Boutique Address">
                            <address>Label Harsha, 36, Sarva Mangal Park, Behind Palika Nagar, Bakrol Part, Anand, Gujarat - 388315</address>
                        </InfoRow>
                    </div>
                </div>

                {/* Map Component */}
                <div className="map-card">
                    <iframe
                        title="Label Harsha Boutique Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d230.28488344452242!2d72.93825752087201!3d22.558219268283747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1781597081283!5m2!1sen!2sin"
                        width="500"
                        height="460"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        aria-label="Label Harsha Boutique Location Map"
                    >
                    </iframe>
                </div>
            </div>
        </section>
    );
}
