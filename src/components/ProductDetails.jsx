import { useState } from 'react';
import { ProductInfo } from './Product';

import '../styles/ProductDetails.css';

export function ProductDetails({ item, onClose }) {
    if (!item) return null;

    /* Track image loading state */
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="product-details-overlay" onClick={onClose} role="dialog" aria-modal="true">
            <div className="product-details-dialog" onClick={(e) => e.stopPropagation()}>
                <button className="details-close" onClick={onClose} aria-label="Close details">
                    ✕
                </button>
                <div className="product-details-image">
                    {!isLoaded && <div className="image-loader-overlay">
                        <div className="spinner" />
                    </div>}
                    <img
                        src={`items-large/${item.image}`}
                        alt={`${item.product} (${item.tag})`}
                        onLoad={() => setIsLoaded(true)}
                        className={isLoaded ? 'loaded' : 'loading'}
                    />
                </div>
                <ProductInfo item={item} />
            </div>
        </div>
    );
}
