import '../styles/Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

const FooterDisclaimer = ({ children }) => (
    <p className="footer-disclaimer">{children}</p>
);

export function FooterContent() {
    return (
        <footer className="site-footer">
            <div className="container" style={{ padding: '0 0 20px 0' }}>
                <span className="footer-logo">Label Harsha</span>

                <p className="footer-copyright">
                    &copy; {CURRENT_YEAR}, Label Harsha Boutique. All Rights Reserved.
                </p>

                <FooterDisclaimer>
                    *Alteration and custom sizing take 3 to 5 business days and are applicable only to purchased catalog items.
                </FooterDisclaimer>

                <FooterDisclaimer>
                    👷️ Site WIP. 🚧️ Information maybe missing or inaccurate. 🚩️ For feedback & suggestions use WhatsApp link above.
                </FooterDisclaimer>
            </div>
        </footer>
    );
}
