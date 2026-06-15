export function ProductCard({ item, isCarousel, onPrev, onNext }) {
    const isOutOfStock = String(item.badge).toLowerCase().includes("out");
    const currencyFormatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });
    const priceOriginal = item.price * (1 + item.discount / 100);

    return (
        <div className="product-card" data-category={item.category}>
            <div className="product-card-img">
                <img src={`items/${item.image}`} alt={`${item.product} (${item.tag})`} loading="lazy" />
                {isCarousel && (
                    <div className="product-card_nav">
                        <button className="prev" aria-label="Previous Slide" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onPrev();
                        }}>
                            ❮
                        </button>
                        <button className="next" aria-label="Next Slide" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onNext();
                        }}>
                            ❯
                        </button>
                    </div>
                )}
            </div>
            <div className="product-card-details">
                <span className={`product-card-badge ${isOutOfStock ? 'product-card-badge-oos' : ''}`}>
                    {item.badge}
                </span>
                <span className="product-card-id">{item.tag}</span>
                <h3 className="product-card-title">{item.product}</h3>
                <span className="product-card-material">{item.material}</span>
                <p className="product-card-desc">{item.description}</p>
                <div className="price-container">
                    <span className="price-current">{currencyFormatter.format(item.price)}/-</span>
                    {Number(item.discount) > 0 && (
                        <>
                            <span className="price-original">{currencyFormatter.format(priceOriginal)}</span>
                            <span className="price-discount">{item.discount} OFF</span>
                        </>
                    )}
                </div>
                <a
                    href={`https://wa.me/919033310101?text=Hi Label Harsha, I am interested in inquiring about the '${item.product} (${item.tag})'. Could you please share more details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                >
                    <img src="icons/whatsapp.svg" alt="WhatsApp" />
                </a>
            </div>
        </div>
    );
}
