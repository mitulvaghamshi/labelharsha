import { useState } from 'react';

import { ProductCard } from './ProductCard';
import { ProductCarousel } from './ProductCarousel';

import { CATEGORIES } from '../utils/categories';
import { getProducts } from '../utils/getProducts';
import ALL_PRODUCTS from '../utils/items.json';

import '../styles/ProductGrid.css';

function HeaderSection() {
    return (
        <div className="section-header">
            <h2 className="section-title">The Vibrant Collections</h2>
            <p className="section-desc">
                Explore our handpicked designer catalog of premium readymade wear,
                categorized for ease of selection.
            </p>
        </div>
    );
};

function CategoryFilters({ activeCategory, onSelect }) {
    return (
        <div className="catalog-filters">
            {CATEGORIES.map(cat => (
                <button
                    key={cat.id}
                    className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                    data-category={cat.id}
                    onClick={() => onSelect(cat.id)}
                >
                    {cat.label}
                </button>
            ))}
        </div>
    );
}

function ProductSection({ children }) {
    return (
        <>
            {children}
            <div style={{ height: '35px' }} />
        </>
    );
};

export function ProductsContent() {
    const [activeCategory, setActiveCategory] = useState("all");
    const { tallUngrouped, wideGroups, tallGroups } = getProducts(ALL_PRODUCTS, activeCategory);

    const hasAnyProducts = tallUngrouped.length > 0 || wideGroups.length > 0 || tallGroups.length > 0;

    return (
        <section className="container" id="catalog">
            <HeaderSection />

            <CategoryFilters activeCategory={activeCategory} onSelect={setActiveCategory} />

            <div id="product-container">
                {tallUngrouped.length > 0 && (
                    <ProductSection>
                        <div id="product-card-container-tall" className="product-grid-tall">
                            {tallUngrouped.map(item => (
                                <ProductCard key={item.id} item={item} isCarousel={false} />
                            ))}
                        </div>
                    </ProductSection>
                )}

                {wideGroups.length > 0 && (
                    <ProductSection>
                        <div id="product-card-container-wide" className="product-grid-wide">
                            {wideGroups.map((group, idx) => (
                                <ProductCarousel key={`wide-group-${idx}`} items={group} />
                            ))}
                        </div>
                    </ProductSection>
                )}

                {tallGroups.length > 0 && (
                    <ProductSection>
                        <div id="product-card-container-tall-grouped" className="product-grid-tall">
                            {tallGroups.map((group, idx) => (
                                <ProductCarousel key={`tall-group-${idx}`} items={group} />
                            ))}
                        </div>
                    </ProductSection>
                )}

                {!hasAnyProducts && (
                    <div className="text-center py-12 text-lg text-slate-400">
                        No styles currently available in this category. Please check back later!
                    </div>
                )}
            </div>
        </section>
    );
}
