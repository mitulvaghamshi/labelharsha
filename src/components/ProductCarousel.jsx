import { useRef } from "react";
import { ProductCard } from "./ProductCard";

export function ProductCarousel({ items }) {
    const containerRef = useRef(null);

    const scrollNext = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: containerRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    };

    const scrollPrev = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -containerRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    };

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
