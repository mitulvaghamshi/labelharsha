export function getProducts(products, activeCategory) {
    // Group 1: tall, non-carousel (LHxxx/T/NA)
    const tallUngrouped = products.filter(p => {
        const parts = p.tag.split('/');
        return parts[1] === 'T' && parts[2] === 'NA';
    }).filter(item => activeCategory === "all" || item.category === activeCategory);

    // Group 2: wide, carousel (LHxxx/W/Gxx)
    const wideCarouselIds = [...new Set(products
        .filter(p => p.tag.split('/')[1] === 'W')
        .map(p => p.tag.split('/')[2])
    )];
    const wideGroups = wideCarouselIds.map(cid =>
        products.filter(p => p.tag.split('/')[2] === cid)
    ).map(group => group.filter(item => activeCategory === "all" || item.category === activeCategory))
        .filter(group => group.length > 0);

    // Group 3: tall, carousel (LHxxx/T/Gxx where Gxx is not NA)
    const tallCarouselIds = [...new Set(products
        .filter(p => p.tag.split('/')[1] === 'T' && p.tag.split('/')[2] !== 'NA')
        .map(p => p.tag.split('/')[2])
    )];
    const tallGroups = tallCarouselIds.map(cid =>
        products.filter(p => p.tag.split('/')[2] === cid)
    ).map(group => group.filter(item => activeCategory === "all" || item.category === activeCategory))
        .filter(group => group.length > 0);

    return { tallUngrouped, wideGroups, tallGroups };
};
