import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProduct } from '../utils/get-product';
import { ProductInfo } from './Product';

import '../styles/ProductDetails.css';

export function ProductDetails({ onClose }) {
    /* Track image loading state */
    const [isLoaded, setIsLoaded] = useState(false);

    const { tag } = useParams();
    const item = getProduct(decodeURIComponent(tag));

    if (!item) {
        return (
            <div className="image-loader-overlay">
                <h1>Requested product (id: {tag}) not found!</h1>
            </div>
        );
    }

    return (
        <div className="product-details-overlay" role="dialog" aria-modal="true">
            <div className="product-details-dialog" onClick={(e) => e.stopPropagation()}>
                <button className="details-close" onClick={onClose} aria-label="Close details">
                    ✕
                </button>
                <div className="product-details-image">
                    {!isLoaded && <div className="image-loader-overlay">
                        <div className="spinner" />
                    </div>}
                    <img
                        src={`/labelharsha/items-large/${item.image}`}
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
