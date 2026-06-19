import '../styles/Product.css';

const currencyFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
});

const ProductBadge = ({ badge }) => {
    const isOutOfStock = String(badge).toLowerCase().includes("out");
    return (
        <span className={`product-card-badge ${isOutOfStock ? 'product-card-badge-oos' : ''}`}>
            {badge}
        </span>
    );
};

const PriceDisplay = ({ price, discount }) => {
    const originalPrice = price * (1 + (Number(discount) > 0 ? discount / 100 : 0))
    return (
        <div className="price-container">
            <span className="price-current">{currencyFormatter.format(price)}/-</span>
            {Number(discount) > 0 && (
                <>
                    <span className="price-original">{currencyFormatter.format(originalPrice)}</span>
                    <span className="price-discount">{discount} OFF</span>
                </>
            )}
        </div>
    );
};

const WhatsAppButton = ({ product, tag }) => {
    const message = encodeURIComponent(`Hi Label Harsha, I am interested in inquiring about the '${product} (${tag})'. Could you please share more details.`);
    return (
        <a
            href={`https://wa.me/919033310101?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
        >
            <img src="icons/whatsapp.svg" width={'103px'} height={'24px'} alt="WhatsApp" />
        </a>
    );
};

export const ProductInfo = ({ item, onOpen }) => {
    return (
        <div className="product-card-details">
            <ProductBadge badge={item.badge} />
            <span className="product-card-id">{item.tag}</span>
            <h3 className="product-card-title">{item.product}</h3>
            <span className="product-card-material">{item.material}</span>
            <p className="product-card-desc">{item.description}</p>
            <PriceDisplay price={item.price} discount={item.discount} />
            <WhatsAppButton product={item.product} tag={item.tag} />
        </div>
    );
};

export function Product({ item, isCarousel, onPrev, onNext, onOpen }) {
    const handleNav = (action) => {
        const handler = (e) => {
            e.preventDefault();
            e.stopPropagation();
            action();
        };
        return handler;
    };

    return (
        <div className="product-card" data-category={item.category} onClick={onOpen}>
            <div className="product-card-img">
                <img src={`items-thumb/${item.image}`} alt={`${item.product} (${item.tag})`} loading="lazy" />
                {isCarousel && (
                    <div className="product-card_nav">
                        <button
                            className="prev"
                            aria-label="Previous Slide"
                            onClick={handleNav(onPrev)}
                        >
                            ❮
                        </button>
                        <button
                            className="next"
                            aria-label="Next Slide"
                            onClick={handleNav(onNext)}
                        >
                            ❯
                        </button>
                    </div>
                )}
            </div>
            <ProductInfo item={item} onOpen={() => onOpen && onOpen()} />
        </div>
    );
}
