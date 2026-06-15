import { useState } from 'react';

import { ProductCard } from './ProductCard';
import { ProductCarousel } from './ProductCarousel';

import { CATEGORIES } from '../utils/categories';
import ALL_PRODUCTS from '../utils/items.json';

export function ProductsContent() {
    // Filters state
    const [activeCategory, setActiveCategory] = useState("all");

    // Filtering products for rendering groups
    // Group 1: tall, non-carousel (LHxxx/T/NA)
    const tallUngrouped = ALL_PRODUCTS.filter(p => {
        const parts = p.tag.split('/');
        return parts[1] === 'T' && parts[2] === 'NA';
    });

    // Group 2: wide, carousel (LHxxx/W/Gxx)
    const wideCarouselIds = [...new Set(ALL_PRODUCTS
        .filter(p => p.tag.split('/')[1] === 'W')
        .map(p => p.tag.split('/')[2])
    )];
    const wideGroups = wideCarouselIds.map(cid =>
        ALL_PRODUCTS.filter(p => p.tag.split('/')[2] === cid)
    );

    // Group 3: tall, carousel (LHxxx/T/Gxx where Gxx is not NA)
    const tallCarouselIds = [...new Set(ALL_PRODUCTS
        .filter(p => p.tag.split('/')[1] === 'T' && p.tag.split('/')[2] !== 'NA')
        .map(p => p.tag.split('/')[2])
    )];
    const tallGroups = tallCarouselIds.map(cid =>
        ALL_PRODUCTS.filter(p => p.tag.split('/')[2] === cid)
    );

    // Apply active category filter
    const filteredTallUngrouped = tallUngrouped.filter(
        item => activeCategory === "all" || item.category === activeCategory
    );

    const filteredWideGroups = wideGroups.map(group =>
        group.filter(item => activeCategory === "all" || item.category === activeCategory)
    ).filter(group => group.length > 0);

    const filteredTallGroups = tallGroups.map(group =>
        group.filter(item => activeCategory === "all" || item.category === activeCategory)
    ).filter(group => group.length > 0);

    return (
        <section className="container" id="catalog">
            <div className="section-header">
                <h2 className="section-title">The Vibrant Collections</h2>
                <p className="section-desc">Explore our handpicked designer catalog of premium readymade wear, categorized for easy selection.</p>
            </div>

            <div className="catalog-filters">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat.id}
                        className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                        data-category={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div id="product-container">
                {/* Render Group 1: Ungrouped Tall Cards */}
                {filteredTallUngrouped.length > 0 && (
                    <>
                        <div id="product-card-container-tall" className="product-grid-tall">
                            {filteredTallUngrouped.map(item => (
                                <ProductCard
                                    key={item.id}
                                    item={item}
                                    isCarousel={false}
                                />
                            ))}
                        </div>
                        <div style={{ height: '35px' }}></div>
                    </>
                )}

                {/* Render Group 2: Grouped Wide Sliders */}
                {filteredWideGroups.length > 0 && (
                    <>
                        <div id="product-card-container-wide" className="product-grid-wide">
                            {filteredWideGroups.map((group, idx) => (
                                <ProductCarousel
                                    key={`wide-group-${idx}`}
                                    items={group}
                                />
                            ))}
                        </div>
                        <div style={{ height: '35px' }}></div>
                    </>
                )}

                {/* Render Group 3: Grouped Tall Sliders */}
                {filteredTallGroups.length > 0 && (
                    <>
                        <div id="product-card-container-tall-grouped" className="product-grid-tall">
                            {filteredTallGroups.map((group, idx) => (
                                <ProductCarousel
                                    key={`tall-group-${idx}`}
                                    items={group}
                                />
                            ))}
                        </div>
                        <div style={{ height: '35px' }}></div>
                    </>
                )}

                {/* Empty state when no products match filter */}
                {filteredTallUngrouped.length === 0 && filteredWideGroups.length === 0 && filteredTallGroups.length === 0 && (
                    <div className="text-center py-12 text-lg text-slate-400">
                        No styles currently available in this category. Please check back later!
                    </div>
                )}
            </div>
        </section>
    );
}
