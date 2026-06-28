import { useRef } from "react";

import { Product } from "./Product";

import "../styles/Carousel.css";

export function Carousel({ items, onOpen }) {
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    if (containerRef.current) {
      const amount = containerRef.current.offsetWidth;

      containerRef.current.scrollBy({
        left: direction === "next" ? amount : -amount,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => handleScroll("prev");
  const scrollNext = () => handleScroll("next");

  return (
    <div className="slider">
      <div className="slides" ref={containerRef}>
        {items.map((item) => (
          <div key={item.id}>
            <Product
              item={item}
              isCarousel={true}
              onPrev={scrollPrev}
              onNext={scrollNext}
              onOpen={onOpen}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
