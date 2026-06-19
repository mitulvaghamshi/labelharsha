import '../styles/About.css';

const FeatureItem = ({ icon, text }) => (
    <div className="feature-tag">
        {icon} <span>{text}</span>
    </div>
);

export function About() {
    const features = [
        { icon: '✨', text: 'Vibrant Designer Colors' },
        { icon: '👌', text: 'Handpicked Premium Fabrics' },
        { icon: '✂️', text: 'Personalized Styling & Fit' },
    ];

    return (
        <section className="container" id="about">
            <div className="about-grid">
                <div className="about-text">
                    <span className="about-tagline">Chic & Vibrant</span>
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                        Our Philosophy
                    </h2>
                    <h3>Celebrating Colors & Impeccable Tailoring</h3>
                    <p>
                        At <strong>Label Harsha</strong>, we believe that fashion is a vibrant celebration of personal expression.
                        Based in the heart of Nadiad, our premier boutique curates stunning readymade garments that combine
                        the richness of traditional Indian craftsmanship with the clean lines of modern silhouettes.
                    </p>
                    <p>
                        Every piece in our catalog is built with handpicked premium textiles—ranging from breathing cottons
                        to luxurious Banarasi silks—and finished with precise zardozi, hand block prints, and gorgeous
                        vibrant motifs. We offer specialized custom fitting services to ensure your selected outfit
                        drapes you with absolute comfort and perfect elegance.
                    </p>
                    <div className="about-features">
                        {features.map((feature, index) => (
                            <FeatureItem key={index} icon={feature.icon} text={feature.text} />
                        ))}
                    </div>
                </div>
                <div className="about-image">
                    <img
                        src="icons/icon-512.webp"
                        width={512}
                        height={512}
                        alt="Label Harsha Business Logo"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
