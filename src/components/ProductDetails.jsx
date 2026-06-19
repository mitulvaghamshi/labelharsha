import { ProductInfo } from './Product';

import '../styles/ProductDetails.css';

export function ProductDetails({ item, onClose }) {
    if (!item) return null;

    return (
        <div className="product-details-overlay" onClick={onClose} role="dialog" aria-modal="true">
            <div className="product-details-dialog" onClick={(e) => e.stopPropagation()}>
                <button className="details-close" onClick={onClose} aria-label="Close details">
                    ✕
                </button>
                <div className="product-details-image">
                    <img
                        src={`items-large/${item.image}`}
                        alt={`${item.product} (${item.tag})`}
                        loading="lazy"
                    />
                </div>
                <ProductInfo item={item} />
            </div>
        </div>
    );
}
