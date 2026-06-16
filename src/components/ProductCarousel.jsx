import { useRef } from "react";
import { ProductCard } from "./ProductCard";

export function ProductCarousel({ items }) {
    const containerRef = useRef(null);

    const handleScroll = (direction) => {
        if (containerRef.current) {
            const amount = containerRef.current.offsetWidth;

            containerRef.current.scrollBy({
                left: direction === 'next' ? amount : -amount,
                behavior: 'smooth'
            });
        }
    };

    const scrollPrev = () => handleScroll('prev');
    const scrollNext = () => handleScroll('next');

    return (
        <div className="slider">
            <div className="slides" ref={containerRef}>
                {items.map((item) => (
                    <div key={item.id}>
                        <ProductCard
                            item={item}
                            isCarousel={true}
                            onPrev={scrollPrev}
                            onNext={scrollNext}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
